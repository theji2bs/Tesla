// Base router

function showCellphone() {
        $( "#cellphone" ).fadeIn('slow');
}
function hideCellphone() {
        $( "#cellphone" ).fadeOut('slow');
}

$( "nav > div > .nav-cellphone" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active").addClass("inactive");
	
	  	hideCellphone()
	}
  else{
  		if( $( 'nav > div > div[class!="nav-cellphone"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			$( '#' + route ).fadeOut('slow');
			$( '.nav-' + route ).removeClass("active").addClass("inactive");
		}
	  	$( this ).removeClass("inactive").addClass("active");
	  	showCellphone()
	  	route = 'cellphone';

  }

});
