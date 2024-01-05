const Movie = require("../../../models/Movie");

const getAllMoviesController = async (req, res) => {
    if (!req.user.isAdmin) {
      res.status(403).json("You are not allowed!");
    }

    try {
        const movies = await Movie.find();
        res.status(200).json(movies.reverse());
    } catch (err) {
        res.status(500).json(err);
    }
  };

  module.exports = {
    getAllMoviesController
  }