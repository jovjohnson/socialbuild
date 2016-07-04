'use strict';

var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
  user: String,
  userId: String,
  content: String,
  date: {type: Date, default: Date.now}
});


module.exports = mongoose.model('Message', MessageSchema);
