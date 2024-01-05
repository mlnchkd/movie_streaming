const User = require("../../../models/User");

const getAllUsersController = async (req, res) => {
    const query = req.query.new;
    
    if (!req.user.isAdmin) {
      res.status(403).json("You are not allowed to see all users!");
    }

    try {
        const users = query
          ? await User.find().sort({ _id: -1 }).limit(5)
          : await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
  }

  module.exports = {
    getAllUsersController,
  }