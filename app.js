'use strict';

var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var multipart = require("connect-multiparty");
var multipartMiddleware = multipart();

var app = express();
var authController = require('./server/controllers/auth-controller');
var profileController = require('./server/controllers/profile-controller');
var messageController = require('./server/controllers/message-controller');

mongoose.connect('mongodb://localhost/socialapp');


app.use(bodyParser.json());
app.use(multipartMiddleware);
app.use('/app', express.static(__dirname + "/app"));
app.use('/node_modules', express.static(__dirname + "/node_modules"));

app.get('/', function(req, res) {
  res.sendFile('index.html', { root: __dirname });
})

//auth
app.post('/api/user/register', authController.register);
app.post('/api/user/login', authController.login);
app.post('/api/profile/updateUsername', profileController.updateUsername);
app.post('/api/profile/updateBio', profileController.updateBio);


//profile
app.post('/api/profile/edit-photo', multipartMiddleware, profileController.updatePhoto);

//msgs
app.post('/api/messages/post', messageController.postMessage);



app.listen('3000', function() {
  console.log('listening for run away with me saxaphone ');
});
