var express = require('express');
var app = express();
var exec = require('child_process').exec;

var soundDir = "/home/pi/dog/sound/";

app.get('/', function (req, res) {
  res.send("10");
});

app.get("/growl", function(req,res) {

  //Play sound.
  exec("aplay " + soundDir + "growl.wav");
  res.header('Access-Control-Allow-Origin', '*');
  res.send("1");

});

app.get("/howl", function(req,res) {

  //Play sound.
  exec("aplay " + soundDir + "howl.wav");
  res.header('Access-Control-Allow-Origin', '*');
  res.send("1");

});

app.get("/whistle", function(req,res) {

  //Play sound.
  exec("aplay " + soundDir + "whistle1.wav");
  res.header('Access-Control-Allow-Origin', '*');
  res.send("1");

});

app.get("/whistle2", function(req,res) {

  //Play sound.
  exec("aplay " + soundDir + "whistle2.wav");
  res.header('Access-Control-Allow-Origin', '*');
  res.send("1");

});

app.get("/*", function(req,res) {
  res.send("-1");
});

var server = app.listen(8001, function () {

  var host = server.address().address;
  var port = server.address().port;

});
