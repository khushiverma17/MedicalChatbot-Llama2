const mongoose = require("mongoose")
const mongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connection successful");

  
  } catch (e) {
    console.log("Connection error:", e);
    return false;
  }
};

module.exports = mongodb;
