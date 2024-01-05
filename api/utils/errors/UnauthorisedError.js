const BaseError = require('./BaseError');

class UnauthorisedError extends BaseError {
  constructor(message) {
    super(401, message);
  }
}

module.exports = UnauthorisedError;
