const { TokenExpiredError, JsonWebTokenError } = require('jsonwebtoken');
const { BaseError } = require('../errors');

const errorHandlerMiddleware = (error, req, res, next) => {
  // PROPERLY FORMAT ERROR BASING ON ERROR TYPE
  let status = 500;
  let responseBody = {};
  switch (true) {
    case error instanceof BaseError:
      status = error.httpCode;
      responseBody = { error: { code: error.httpCode, message: error.message, data: error.data } };
      break;
    case error instanceof TokenExpiredError:
    case error instanceof JsonWebTokenError:
      status = 400;
      responseBody = {
        error: { code: 400, message: error.message },
      };
      break;
    // UNHANDLED ERRORS
    default:
      responseBody = { error: { code: 500, message: 'Error. Please try later.', error: error.message } };
      break;
  }
  res.status(status).json(responseBody);

  next();
};

module.exports = {
  errorHandlerMiddleware,
};
