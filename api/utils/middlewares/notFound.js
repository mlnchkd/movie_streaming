const { NotFoundError } = require('../errors');

const notFoundMiddleware = (_, res, next) => {
  const err = new NotFoundError('Not Found');
  next(err);
};

module.exports = {
  notFoundMiddleware,
};
