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
var userController = require('./server/controllers/user-controller');

mongoose.connect('mongodb://localhost/socialapp');


app.use(bodyParser.json());
app.use(multipartMiddleware);
app.use('/app', express.static(__dirname + "/app"));
app.use('/node_modules', express.static(__dirname + "/node_modules"));
app.use('/uploads', express.static(__dirname + "/uploads"));

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
app.get('/api/messages/get', messageController.getMessages);
app.post('/api/messages/post', messageController.postMessage);

//user
app.get('/api/users/get', userController.getUsers); 

app.listen('3000', function() {
  console.log('listening for run away with me saxaphone ');
});
