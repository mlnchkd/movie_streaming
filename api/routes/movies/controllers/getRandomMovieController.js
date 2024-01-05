const Movie = require("../../../models/Movie");

const getRandomMovieController = async (req, res) => {
    const type = req.query.type;
    let movie;

    try {
      if (type === "series") {
        movie = await Movie.aggregate([
          { $match: { isSeries: true } },
          { $sample: { size: 1 } },
        ]);
      } else {
        movie = await Movie.aggregate([
          { $match: { isSeries: false } },
          { $sample: { size: 1 } },
        ]);
      }
      res.status(200).json(movie);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  module.exports = {
    getRandomMovieController,
  }