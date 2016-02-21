// Base router

function showCellphone() {
        $( "#cellphone" ).fadeIn('slow');
}
function hideCellphone() {
        $( "#cellphone" ).fadeOut('slow');
}

$( "nav > div > .nav-cellphone" ).on( "click", function() {

	if( $( 'nav > div > img[class!="nav-cellphone"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			$( '#' + route ).fadeOut('slow');
			$( '.nav-' + route ).removeClass("active");
	}

  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active");
	  	hideCellphone()
	}
  else{
	  	$( this ).addClass("active");
	  	showCellphone()
	  	route = 'cellphone';

  }

});
