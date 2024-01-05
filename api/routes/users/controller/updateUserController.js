const CryptoJS = require("crypto-js");
const User = require("../../../models/User");

const updateUserController = async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      res.status(403).json("You can update only your account!");
    }

    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
          req.body.password,
          process.env.SECRET_KEY
        ).toString();
    }
  
    try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
  }

  module.exports = {
    updateUserController
  }