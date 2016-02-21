// Base router

function showGps() {
        $( "#gps" ).fadeIn('slow');
}
function hideGps() {
        $( "#gps" ).fadeOut('slow');
}

$( ".nav-gps" ).on( "click", function() {

	if( $( 'nav > div > img[class!="nav-gps"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			$( route ).fadeOut('slow');
	}

  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active");
	  	hideGps()
	}
  else{
	  	$( this ).addClass("active");
	  	showGps()
	  	route = '#gps';
  }

});
