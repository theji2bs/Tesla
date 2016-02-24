// Base router

function showMail() {
		$( "#dash" ).fadeOut('slow'); // Dashboard
        $( "#mail" ).fadeIn('slow');
}
function hideMail() {
		$( "#dash" ).fadeIn('slow'); // Dashboard
        $( "#mail" ).fadeOut('slow');
}

$( "nav > .nav-mail" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ 
		
		$( this ).removeClass("active").addClass("inactive");
	  	hideMail()
	}

  else{
	  	if( $( 'nav > div[class!="nav-mail"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

				$( '#' + route ).fadeOut('slow');
				$( '.nav-' + route ).removeClass("active").addClass("inactive");
		}
	  	$( this ).removeClass("inactive").addClass("active");
	  	showMail()
	  	route = 'mail';
  }

});
