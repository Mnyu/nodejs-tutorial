const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === 'john') {
    console.log('authorized');
    req.user = {name: 'john', id: 3}
    next();
  } else {
    res.status(401).send('UNAUTHORIZED');
  }
}

module.exports = authorize