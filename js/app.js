


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

    // Initialisation of router
    var route = '';

    // Show different elements of the page
    $( "#dash" ).fadeIn('slow'); // Dashboard
    $( "header" ).fadeIn('slow'); // Header
    $( "nav" ).fadeIn('slow'); // Header
    

});