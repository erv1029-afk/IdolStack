function errorHandler(err, req, res, next) {
  const statusCode = err.status || 500;

  res.status(statusCode).json({
    error: {
      message: err.message || 'Internal Server Error',
      status: statusCode,
      stack: process.env.NODE_ENV === 'production' ? undefined : err.stack
    }
  });
}

module.exports = errorHandler;