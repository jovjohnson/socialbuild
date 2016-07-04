'use strict';

var Message = require('../models/Message');

module.exports.postMessage = function(req, res) {
  var message = new Message(req.body);
  message.save();

  Message.find({}, function(err, allMessages) {
    if (err) {
      res.error(error);
    } else {
      res.json(allMessages);
    }
  })
}
