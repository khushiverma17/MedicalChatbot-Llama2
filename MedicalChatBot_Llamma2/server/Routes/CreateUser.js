const express = require("express");
const user = require("../models/User"); // Assuming you need this model for further use
const jwt=require("jsonwebtoken")
const bcryptjs = require("bcryptjs")
const router = express.Router();
router.post("/SignUp", async (req, res) => {
  try {
    console.log("sign in the request");
    const { email, password, confirmPassword } = req.body;

    if (!email) {
      console.log("emal error");
      return res.status(400).json({
        message: "Email is required",
        status: false,
      });
    }

    if (!password || !confirmPassword) {
      console.log("password error");
      return res.status(400).json({
        message: "password and confirm password are required",
        status: false,
      });
    }

    if (password != confirmPassword) {
      console.log("password error");
      return res.status(400).json({
        message: "Password did not match confirmPassword",
        status: false,
      });
    }

    // check if the user already exists
    const existingUser = await user.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists",
        status: false,
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 12);
   

    const newUser = await user.create({
      email:email,
      password: hashedPassword,
    });

    res.status(200).json({
      message: "User created successfully",
      status: true,
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    console.log("error is ", error);
  }
});
module.exports = router;
