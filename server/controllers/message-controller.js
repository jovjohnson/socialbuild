'use strict';

var Message = ('../models/Message');

module.exports.postMessage = function(req, res) {
  var message = new Message(req.body);
  message.save();

  Message.find({}, function(err, allWastes) {
    if (err) {
      res.error(error);
    } else {
      res.json(allMessages);
    }
  })
}
