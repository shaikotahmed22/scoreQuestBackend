const errorResponserHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack, // Show stack only in development
  });
};

module.exports = { errorResponserHandler };
