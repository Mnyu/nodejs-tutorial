const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
  
    // pass control to next middleware, unless terminating the whole cycle by sending back the response.
    next();
  }

  module.exports = logger;