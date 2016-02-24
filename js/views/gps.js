// Base router

function showGps() {
		$( "#dash" ).fadeOut('slow'); // Dashboard
        $( "#gps" ).fadeIn('slow');
}
function hideGps() {
		$( "#dash" ).fadeIn('slow'); // Dashboard
        $( "#gps" ).fadeOut('slow');
}

$( "nav > .nav-gps" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active").addClass("inactive");
	  	hideGps()
	}
  else{
  		if( $( 'nav > div[class!="nav-gps"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			$( '#' + route ).fadeOut('slow');
			$( '.nav-' + route ).removeClass("active").addClass("inactive");
		}
	  	$( this ).removeClass("inactive").addClass("active");
	  	showGps()
	  	route = 'gps';
  }

});
