'use strict';

var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');

var app = express();
var authController = require('./server/controllers/auth-controller');

mongoose.connect('mongodb://localhost/socialapp');


app.use(bodyParser.json());
app.use('/app', express.static(__dirname + "/app"));
app.use('/node_modules', express.static(__dirname + "/node_modules"));

app.get('/', function(req, res) {
  res.sendFile('index.html', { root: __dirname });
})

//auth
app.post('/api/user/register', authController.register);
app.post('/api/user/login', authController.login);

//profile
// app.post('/api/profile/edit');

app.listen('3000', function() {
  console.log('listening for "run away with me" saxaphone ');
});
