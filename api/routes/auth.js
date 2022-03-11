const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require("crypto-js");

// Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username:req.body.username,
    email: req.body.email,
    password: req.body.password, // this would show your password on MongoDB
    // Replace with npmjs.com cripto-js code
    password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(), // Encrypt
  });
  try {
    // saves new user to db
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }

});

module.exports = router;