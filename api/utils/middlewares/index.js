const { wrapMiddleware } = require('./wrap');
const { userAuthMiddleware } = require('./userAuth');
// Error handlers
const { notFoundMiddleware } = require('./notFound');
const { errorHandlerMiddleware } = require('./errorHandler');

module.exports = {
  wrapMiddleware,
  userAuthMiddleware,
  notFoundMiddleware,
  errorHandlerMiddleware,
};
