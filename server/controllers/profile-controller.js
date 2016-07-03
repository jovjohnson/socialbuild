'use strict';

var User = require('../models/User');
var fs = require('fs-extra');
var path = require('path');

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
          } else {
            console.log('save successful');
          }
        })
      })
    }
  })

}
