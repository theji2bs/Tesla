// See faker to generate good data: https://www.npmjs.com/package/faker

var http = require('http');
var fs = require('fs');
var faker = require('faker');

// Chargement du fichier index.html affiché au client
var server = http.createServer();

// Chargement de socket.io
var io = require('socket.io').listen(server);

// Quand un client se connecte, on le note dans la console
io.sockets.on('connection', function (socket) {

    console.log('Un dashboard est connecté !');


	  // in interval emit the monitoring report.
	  setInterval(function(){

	  	var randomEmail = faker.internet.email();

	      socket.emit('data', 'DATA ENVOI SOCKET OK !' + randomEmail);

	  }, 1000);
        
});


server.listen(8080);