// Base router

function showGps() {
        $( "#gps" ).fadeIn('slow');
}
function hideGps() {
        $( "#gps" ).fadeOut('slow');
}

$( "nav > div > .nav-gps" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active");
	  	hideGps()
	}
  else{
  		if( $( 'nav > div > img[class!="nav-gps"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			$( '#' + route ).fadeOut('slow');
			$( '.nav-' + route ).removeClass("active");
		}
	  	$( this ).addClass("active");
	  	showGps()
	  	route = 'gps';
  }

});
