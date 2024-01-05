const Movie = require("../../../models/Movie");

const createMovieController = async (req, res) => {
    if (!req.user.isAdmin) {
      res.status(403).json("You are not allowed!");
    }

    const newMovie = new Movie(req.body);
    try {
        const savedMovie = await newMovie.save();
        res.status(201).json(savedMovie);
    } catch (err) {
        res.status(500).json(err);
    }
  }

  module.exports = {
    createMovieController,
  }