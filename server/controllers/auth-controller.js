var mongoose = require('mongoose');
var User = require('../models/User');

module.exports.register = function(req, res) {
  console.log(req.body);

  var user = new User(req.body);
  user.save();

  res.json(req.body);
};

module.exports.login = function(req, res) {
  User.find(req.body, function(err, results) {
    if (err) {
      console.log("THERE'S AN ERROR");
    }
    if (results && results.length === 1) {
      var userData = results[0];
      res.json({email: req.body.email,
        _id: userData._id,
        username: userData.username,
        image: userData.image,
        following: userData.following,
        followers: userData.followers
      });
    }
  })
}
