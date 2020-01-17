function logger(req, res, next) {
  console.log(`${req.method} from ${req.url} on ${Date()}`);
  next();
}

module.exports = logger;