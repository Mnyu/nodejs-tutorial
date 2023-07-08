// When it comes to Express, in most cases we will use one the below 2 options :

// 1. API : Setup API
//    - Setting up HTTP interface to interact with data.
//    - Data is mostly sent using JSON 
//    - Use res.json() method which will do the heavy lifting of setting up proper content type and stringify the data.

// 2. SSR (Server Side Rendering) : Setup templates with SSR
//    - Setup templates and send back html, js, css ourselves.
//    - Use res.render() method.

const express = require('express');
const { products } = require('./data')

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

app.get('/api/products', (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter(prod => prod.name.startsWith(search));
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(200).send('No products found!');
  }
  return res.status(200).json(sortedProducts);
});

app.get('/api/products/:productId', (req, res) => {
  const { productId } = req.params;
  const product = products.find((product) => product.id === Number(productId));
  if (!product) {
    res.status(404).send('Product does not exists!');
  }
  return res.json(product);
});

app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
  console.log(req.params);
  const { productId, reviewId } = req.params;
  console.log(productId);
  console.log(reviewId);
  res.send("Reviews page in progress");
});

app.listen(5000, () => {
  console.log(`Server is listening on port 5000...`);
});