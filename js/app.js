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
	    



    // Initialisation of router
    var route = '';

    // Initialisation of switchs
    var switchSettingsLights = '';

    // Show different elements of the page
    $( "#auth" ).fadeIn('slow'); // Dashboard
    //$( "#tirix" ).fadeIn('slow'); // Dashboard
    //$( "#settings" ).fadeIn('slow'); // Dashboard
    //$( "header" ).fadeIn('slow'); // Header
    //$( "nav" ).fadeIn('slow'); // Header
    //$( "footer" ).fadeIn('slow'); // Header
    //$( "#dash" ).fadeIn('slow'); // Dashboard
    

});