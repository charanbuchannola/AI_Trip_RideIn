const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect(
      "mongodb+srv://buchannolacharan:ghpsNKrS7eVnXUV8@cluster0.olj9y.mongodb.net/Ai_trip_RideIn"
    )
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.error("Could not connect to MongoDB:", err));
};

module.exports = connect;
