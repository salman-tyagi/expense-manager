export default function (err, req, res, next) {
  console.log(err);

  const { statusCode = 500, status = 'error', message } = err;

  res.status(statusCode).json({
    status,
    message,
    error: err,
  });
}
