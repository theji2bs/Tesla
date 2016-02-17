// On crée une classe App qui sera notre classe principale
var App = function(){

	// On crée un objet vide qui nous servira à stocker nos vues / pages
	this.pages = {};

	// On éxécute la fonction init de la classe
	this.init();

};

// Init
App.prototype.init = function() {
	
	// On crée une instance de la classe Home
	this.pages.home = new Home();

	// On crée une instance de la classe TheMovie
	this.pages.theMovie = new TheMovie();

	// On affiche la page home pour commencer
	this.pages.home.show();

};

// On attend que le DOM soit prêt
$(document).ready(function(){

	// Time of the application
	moment.locale('fr', {
	    longDateFormat : {
	        LTS : "HH:mm:ss",
	    }
	});
	var interval = setInterval(function() {
	        var momentNow = moment().format('LTS');
	        $('#time').html(momentNow);
	    }, 100);
	    


	var socket = io.connect('http://localhost:8080');

	socket.on('data', function(content) {
	    console.log(content.number);
	    //data.datasets[0].data.push(content.number);
	    //delete data.datasets[0].data[0];
	    //var shift = data.datasets[0].data.shift();
	    //console.log(data.datasets.data);
	    //console.log(data.datasets[0].data);

	   
	})


	// On crée une instance de notre classe App
	// Et on la stock dans une variable globale app
	app = new App();

});