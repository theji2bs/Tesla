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
	  	var currentTime = new Date();
	  	var randomNumb = faker.random.number({
		    'min': 25,
		    'max': 100
		});
		var randomNetwork = faker.random.number({
		    'min': 1,
		    'max': 3
		});

	  	var data = {
		    current_time: currentTime,
		    number: randomNumb,
		    network: randomNetwork
		};

	      socket.emit('data', data);

	  }, 1000);
        
});


server.listen(8080);


// http://www.infoclimat.fr/public-api/gfs/json?_ll=48.85341,2.3488&_auth=CRNVQgR6U3FRfFJlUCYCKwBoVWAAdlN0Uy8KaQ9qXyJWPVU0BWVcOl4wWyZVegA2UH0EZ15lUGBQO1IqDnxTMgljVTkEb1M0UT5SN1B%2FAikALlU0ACBTdFM3CmUPfF89VjRVOAV4XD9eOFsnVWQAMFBmBHteflBpUDdSMA5mUzkJYlU5BGJTOVE%2FUi9QfwIzADVVZgA3U2JTZgprD2dfP1Y8VWQFZVw7XjhbJ1VgADVQZQRiXmlQaVA2UjQOfFMvCRNVQgR6U3FRfFJlUCYCKwBmVWsAaw%3D%3D&_c=495d1dfd6f22658a55672c61c508c554