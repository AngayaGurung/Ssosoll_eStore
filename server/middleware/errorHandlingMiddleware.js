// middleware/errorHandlingMiddleware.js
const errorHandler = (err, req, res, next) => {
  if (err.name === "SequelizeValidationError") {
    const messages = err.errors.map((e) => e.message);
    messages.map((error) => {
      return res.status(400).send({ success: false, message: error });
    });
  }

  res.status(500).json({ success: false, message: "Internal Server Error" });
};

module.exports = errorHandler;
