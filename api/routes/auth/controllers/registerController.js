const User = require("../../../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
          req.body.password,
          process.env.SECRET_KEY
        ).toString(),
      });
    
      try {
        const user = await newUser.save();
        // res.header("Access-Control-Allow-Origin", "*");
        res.status(201).json(user);
      } catch (err) {
        res.status(500).json(err);
      }
};

module.exports = {
    registerController,
};