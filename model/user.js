const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  //first_name
  //last_name,
  //email
  //password
  //token
});

module.exports = mongoose.model("user", userSchema);
