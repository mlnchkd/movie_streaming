/*
  Index files should only be used for import/export statements and contain no logic
*/
const { getAllMoviesController } = require('./getAllMoviesController');
const { getRandomMovieController } = require('./getRandomMovieController');
const { getMovieController } = require('./getMovieController');
const { deleteMovieController } = require('./deleteMovieController');
const { updateMovieController } = require('./updateMovieController');
const { createMovieController } = require('./createMovieController');

module.exports = {
    getAllMoviesController,
    getRandomMovieController,
    getMovieController,
    deleteMovieController,
    updateMovieController,
    createMovieController
};
