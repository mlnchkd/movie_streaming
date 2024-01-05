const express = require('express');
const { wrapMiddleware } = require('../../utils/middlewares');

const { registerController } = require('./controllers/registerController');
const { loginController } = require('./controllers/loginController');

const router = express.Router();

router.post("/auth/register", wrapMiddleware(registerController));
router.post("/auth/login", wrapMiddleware(loginController));

module.exports = {
    authRouter: router, 
};
