'use strict';

var Message = require('../models/Message');

module.exports.postMessage = function(req, res) {
  var message = new Message(req.body);
  message.save();

  Message.find({})
  .sort({date: -1}).exec(function(err, allMessages) {
    if (err) {
      res.error(error);
    } else {
      res.json(allMessages);
    }
  })
}

module.exports.getMessages = function(req, res) {
  Message.find({})
  .sort({date: -1}).exec(function(err, allMessages) {
    if(err) {
      res.error(err);
    } else {
      res.json(allMessages);
    }
  })
}
