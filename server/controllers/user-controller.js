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
