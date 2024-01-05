const Movie = require("../../../models/Movie");

const deleteMovieController = async (req, res) => {
    if (!req.user.isAdmin) {
      res.status(403).json("You are not allowed!");
    }

    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.status(200).json("The movie has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
  }

  module.exports = {
    deleteMovieController,
  }