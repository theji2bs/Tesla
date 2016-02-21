// Base router

function showTirix() {
        $( "#tirix" ).fadeIn('slow');
}
function hideTirix() {
        $( "#tirix" ).fadeOut('slow');
}

$( "nav > div > .nav-tirix" ).on( "click", function() {

  if( $( 'nav > div > img[class!="nav-tirix"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			$( '#' + route ).fadeOut('slow');
			$( '.nav-' + route ).removeClass("active");
	}
  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active");
	  	hideTirix()
	}
  else{
	  	$( this ).addClass("active");
	  	showTirix()
	  	route = 'tirix';
  }

});
