export const globalErrorHandler = (err, req, res, next) => {
  // Set the status code based on err.statusCode or default to 500
  err.status = err.statusCode || 500;

  res.status(err.status).json({
    status: err.status,
    message: err.message
  });
};
