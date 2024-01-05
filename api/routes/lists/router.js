
const express = require("express");
const { userAuthMiddleware } = require("../../utils/middlewares");
const { getListController, deleteListController, createListController } = require("./controllers");

const router = express.Router();

router.post("/lists/", userAuthMiddleware, createListController);
router.delete("/lists/:id", userAuthMiddleware, deleteListController);
router.get("/lists/", userAuthMiddleware, getListController);

module.exports = {
    listRouter: router, 
};