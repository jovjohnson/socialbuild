'use strict';

var User = require('../models/User');
var fs = require('fs-extra');
var path = require('path');
var mongoose = require('mongoose');

module.exports.updatePhoto = function(req, res) {
  var file = req.files.file;
  var userId = req.body.userId;

  console.log("User " + userId + " is submitting" , file)
  var uploadDate = new Date();

  var tempPath = file.path;
  var targetPath = path.join(__dirname, "../../uploads/" + userId + uploadDate + file.name);
  var savePath = "../../uploads/" + userId + uploadDate + file.name;

  fs.rename(tempPath, targetPath, function(err) {
    if (err) {
      console.log(err)
    } else {
      User.findById(userId, function(err, data) {
        var user = data;
        user.image = savePath;
        user.save(function(err) {
          if(err) {
            console.log('failed to save');
            res.json({status: 500})
          } else {
            console.log('save successful', user.image);
            res.json({status: 200})
          }
        })
      })
    }
  })
}

module.exports.updateUsername = function(req, res) {
  var username = req.body.username;
  var userId = req.body.userId;

  User.findById(userId, function(err, data) {
    var user = data;
    user.username = username;
    user.save(function(err) {
      if(err) {
        console.log('username update failed')
        res.json({status: 500})
      } else {
        console.log('username update successful')
        res.json({status: 200})
      }
    })
  })
}

module.exports.updateBio = function(req, res) {
  var bio = req.body.bio;
  var userId = req.body.userId;

  User.findById(userId, function(err, data) {
    var user = data;
    user.bio = bio;
    user.save(function(err) {
      if(err) {
        console.log('bio update failed')
        res.json({status: 500})
      } else {
        console.log('bio update successful')
        res.json({status: 200})
      }
    })
  })

}
