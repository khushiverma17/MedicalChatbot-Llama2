const express = require("express");
const user = require("../models/User"); 
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
router.post("/Login", async (req, res) => {
  try {
    console.log("Inside login controller");
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
        status: false,
      });
    }

    const existingUser = await user.findOne({
      email: email,
    });

    if (!existingUser) {
      return res.status(401).json({
        message: "Invalid email or password",
        status: false,
      });
    }

    const isPasswordCorrect = await bcryptjs.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid email or password",
        status: false,
      });
    }
    const token = jwt.sign(
      { id: existingUser._id }, // Payload (user ID)
      process.env.JWT_SECRET, // Secret key from environment variable
    );
    
    res.status(200).json({
      message: "Login successful",
      status: true,
      user: {
        id: existingUser._id,
        email: existingUser.email,
        jsontoken:token
      },
    });
  } catch (error) {
    console.log("error is: ", error);
  }
});
module.exports = router;
