const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: String,
	lastname: String,
	age: Number
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
