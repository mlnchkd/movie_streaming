const jwt = require("jsonwebtoken");
const { UnauthorisedError } = require("../errors");

const userAuthMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.token;

    if (!authHeader) {
      throw new UnauthorisedError('Not authenticated');
    }
    
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        throw new UnauthorisedError('Token is not valid!');
      }
      req.user = user;
    });

    next();
  } catch(err) {
    next(err);
  }
}

module.exports = {
  userAuthMiddleware,
};
