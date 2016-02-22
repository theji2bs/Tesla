// Base router

function showAuth() {
		$( "header" ).fadeOut('slow'); // Header
		$( "nav" ).fadeOut('slow'); // Nav
		$( "footer" ).fadeOut('slow'); // Footer
		$( "#dash" ).fadeOut('slow'); // Header
        $( "#auth" ).fadeIn('slow');
}

function hideAuth() {
		$( "#auth" ).fadeOut('slow'); // Auth
		$( "header" ).fadeIn('slow'); // Header
		$( "nav" ).fadeIn('slow'); // Nav
		$( "footer" ).fadeIn('slow'); // Footer
		$( "#dash" ).fadeIn('slow'); // Header 
}



//$( "#settings" ).fadeIn('slow'); // Dashboard
    //$( "header" ).fadeIn('slow'); // Header
    //$( "nav" ).fadeIn('slow'); // Header
    //$( "footer" ).fadeIn('slow'); // Header
    //$( "#dash" ).fadeIn('slow'); // Dashboard

$( ".tesla" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active");
	  	hideAuth()
	}
  else{
	  	$( this ).addClass("active");
	  	showAuth()
	  	route = '#auth';
  }

});

$( ".unlock" ).on( "click", function() {

	  	hideAuth()

});

$( ".power2" ).on( "click", function() {

	  	showAuth()

});


