const authentication = (req, res, next) => {
  const token = req.cookies.ssolsoll_cookie;
  console.log(token);
  next();
};

module.exports = authentication;
