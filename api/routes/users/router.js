const express = require("express");
const { userAuthMiddleware } = require("../../utils/middlewares");
const { getUserStatsController, getAllUsersController, getUserController, deleteUserController, updateUserController } = require("./controller");

const router = express.Router();

router.get("/users/", userAuthMiddleware, getAllUsersController);
router.put("/users/:id", userAuthMiddleware, updateUserController);
router.delete("/users/:id", userAuthMiddleware,deleteUserController );
router.get("/users/find/:id", getUserController);
router.get("/users/stats", getUserStatsController);

module.exports = {
    userRouter: router,
};
