const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Users = require("../../models/Users");
// @route POST api/users
// @desc Register User
// @Private
router.post(
  "/",

  async (req, res) => {
    const token = req.header("x-auth-token");

    if (!token) {
      return res.status(401).json({
        msg: "No Authorization",
      });
    }

    try {
      const decoded = jwt.verify(token, config.get("jwtSecret"));
      const { name, email, picture } = decoded;

      let user = new Users({
        name,
        email,
        avatar,
      });

      await user.save();
    } catch (err) {
      return res.status(401).json({
        msg: "No Authorization",
      });
    }
  }
);

module.exports = router;
