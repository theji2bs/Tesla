// Base router

function showMail() {
        $( "#mail" ).fadeIn('slow');
}
function hideMail() {
        $( "#mail" ).fadeOut('slow');
}

$( "nav > div > .nav-mail" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ 
		
		$( this ).removeClass("active").addClass("inactive");
	  	hideMail()
	}

  else{
	  	if( $( 'nav > div > div[class!="nav-mail"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

				$( '#' + route ).fadeOut('slow');
				$( '.nav-' + route ).removeClass("active").addClass("inactive");
		}
	  	$( this ).removeClass("inactive").addClass("active");
	  	showMail()
	  	route = 'mail';
  }

});
