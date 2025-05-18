const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect(
      "mongodb+srv://buchannolacharan:WMCRmAknvFFY6F8Q@cluster0.olj9y.mongodb.net/AI_Trip_RideIn"
    )
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.error("Could not connect to MongoDB:", err));
};

module.exports = connect;
