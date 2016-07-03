'use strict';

var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');

var app = express();
var authController = require('./server/controllers/auth-controller');

mongoose.connect('mongodb://localhost/socialapp');


app.use(bodyParser.json());
app.use('/app', express.static(__dirname + "/app"));

app.get('/', function(req, res) {
  res.sendFile('index.html', { root: __dirname });
})

//auth
app.post('/api/user/register', authController.register);

app.listen('3000', function() {
  console.log('listening for "run away with me" saxaphone ');
});
