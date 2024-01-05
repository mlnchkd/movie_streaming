const router = require('express').Router();

const { authRouter } = require('./auth/router');
const { listRouter } = require('./lists/router');
const { movieRouter } = require('./movies/router');
const { userRouter } = require('./users/router');

const subroutes = [
  authRouter,
  listRouter,
  movieRouter,
  userRouter,
];

router.use(subroutes);

module.exports = {
  landingRouter: router,
};
