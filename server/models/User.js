'use strict';

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
  image: String,
  bio: String,
  following: [{userId: String, username: String}],
  followers: [{userId: String, username: String}]
});


module.exports = mongoose.model('User', UserSchema);
