var mongoose = require('mongoose');
var User = require('../models/User');

module.exports.register = function(req, res) {
  console.log(req.body);

  var user = new User(req.body);
  user.save();

  res.json(req.body);
};
