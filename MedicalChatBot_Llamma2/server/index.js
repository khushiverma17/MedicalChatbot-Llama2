const express = require("express");
require("dotenv").config();
const app = express();
const connect = require("./database/db");
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your client's origin
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
// Middleware to parse JSON
app.use(express.json());

// Import and use routes
const createUserRoute = require("./Routes/CreateUser.js");
app.use("/api", createUserRoute);
const loginUserRoute = require("./Routes/LoginUser.js")
app.use("/api", loginUserRoute)

// Start server and connect to database
app.listen(process.env.port, () => {
  connect();
  console.log("Server is running on port", process.env.port);
});
