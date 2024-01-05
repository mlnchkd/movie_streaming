const express = require("express");

const { userAuthMiddleware } = require("../../utils/middlewares");
const { getAllMoviesController, getRandomMovieController, getMovieController, deleteMovieController, updateMovieController, createMovieController } = require("./controllers");

const router = express.Router();

router.post("/movies/", userAuthMiddleware, createMovieController);
router.put("/movies/:id", userAuthMiddleware, updateMovieController);
router.delete("/movies/:id", userAuthMiddleware, deleteMovieController);
router.get("/movies/find/:id", userAuthMiddleware, getMovieController);
router.get("/movies/random", userAuthMiddleware, getRandomMovieController);
router.get("/movies/", userAuthMiddleware, getAllMoviesController);

module.exports = {
    movieRouter: router
};
