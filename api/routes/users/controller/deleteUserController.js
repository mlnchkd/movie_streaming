const User = require("../../../models/User");

const deleteUserController = async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      res.status(403).json("You can delete only your account!");
    }

    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
  }

  module.exports = {
    deleteUserController,
  }