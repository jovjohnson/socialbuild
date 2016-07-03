'use strict';

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  image: String
});


module.exports = mongoose.model('User', UserSchema);
