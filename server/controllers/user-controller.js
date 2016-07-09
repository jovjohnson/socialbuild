'use strict';

var User = require('../models/User');

module.exports.getUsers = function(req, res) {
  User.find({}, function(err, users) {
    if(err) {
      res.error(err);
    } else {
      res.json(users);
      console.log(users);
    }
  })
}

module.exports.followUser = function(req, res) {
  var userId = req.body.userId;
  var wasterId = req.body.wasterId;

  console.log('this is waster', wasterId, 'this is the follower', userId); 
}
