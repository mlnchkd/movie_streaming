const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../../../models/User");
const { BadRequestError } = require("../../../utils/errors");

const loginController = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            throw new BadRequestError('Incorrect email or password');
        }
    
        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
    
        if (originalPassword !== req.body.password) {
            throw new BadRequestError('Incorrect email or password');
        }

        const accessToken = jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },
          process.env.SECRET_KEY,
          { expiresIn: "5d" }
        );
    
        const { password, ...info } = user._doc;
    
        return res.status(200).json({ ...info, accessToken });
      } catch (err) {
        return res.status(500).json(err);
      }
};

module.exports = {
    loginController,
  };
  