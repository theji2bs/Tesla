// Base router

function showMusic() {
        $( "#music" ).fadeIn('slow');
}
function hideMusic() {
        $( "#music" ).fadeOut('slow');
}

$( "nav  > .nav-music" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active").addClass("inactive");
	  	hideMusic()
	}
  else{
  		if( $( 'nav > div[class!="nav-music"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			$( '#' + route ).fadeOut('slow');
			$( '.nav-' + route ).removeClass("active").addClass("inactive");
		}
	  	$( this ).removeClass("inactive").addClass("active");
	  	showMusic()
	  	route = 'music';

  }

});
