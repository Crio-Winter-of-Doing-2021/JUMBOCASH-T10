const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
      socialMediaID: String,
      username: String,
      thumbnail: String
});

const User = mongoose.model("User",userSchema);

module.exports = User;