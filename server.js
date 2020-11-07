require('dotenv').config();
var express = require('express');
var app = express();
var ExpressPeerServer = require('peer').ExpressPeerServer;
 
app.get('/', function(req, res, next) { res.send('Hello world!'); });
 
// var server = app.listen(80);
 
var options = {
    debug: true
}
 
// app.use('/api', ExpressPeerServer(server, options));
 



// // OR
 
 var server = require('http').createServer(app);
 
 app.use('/peerjs', ExpressPeerServer(server, options));
 
 server.listen(443);

 server.on('connection', function(id) { //console.log(id) 
 });
 
 server.on('disconnect', function(id) { //console.log(id) 
 });