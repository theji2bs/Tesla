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
// Classe View
// Qui sera la classe parente à toutes nos vues
var View = function(){

	// On définit le sélecteur en fonction du paramètre id de chaque vue
	this.domElem = $('#' + this.id);

	// On définit le CTA en fonction du domElem
	this.ctaButton = this.domElem.find('.cta');

};

// Afficher la vue
View.prototype.show = function() {
	
	// On commence par "binder" la vue avant de l'afficher
	this.bind();

	// On stocke le contexte dans une variable pour pouvoir y accéder plus bas
	var self = this;

	// On affiche le domElem de la vue
	this.domElem.fadeIn(function(){

		// Une fois que le domElem est affiché
		// On appelle une fonction dans laquelle on pourra mettre
		// tout ce dont on a besoin de faire une fois la vue affichée 
		self.onAnimateIn();

	});

};

// Cacher la vue
View.prototype.hide = function() {
		
	// On "unbind" la vue
	// Càd on désactive les onclick etc.
	// Pour éviter d'avoir plusieurs onclick sur le même élément
	// Lorsqu'on affichera à nouveau la vue par la suite
	this.unbind();

	// Cache la vue
	this.domElem.fadeOut();

};

// Fonction bind
View.prototype.bind = function() {

};

// Fonction unbind
View.prototype.unbind = function() {

};

// Fonction onAnimateIn
View.prototype.onAnimateIn = function() {

};