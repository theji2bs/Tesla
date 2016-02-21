// Base router

function showMail() {
        $( "#mail" ).fadeIn('slow');
}
function hideMail() {
        $( "#mail" ).fadeOut('slow');
}

$( "nav > div > .nav-mail" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ 
		
		$( this ).removeClass("active");
	  	hideMail()
	}

  else{
	  	if( $( 'nav > div > img[class!="nav-mail"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

				$( '#' + route ).fadeOut('slow');
				$( '.nav-' + route ).removeClass("active");
		}
	  	$( this ).addClass("active");
	  	showMail()
	  	route = 'mail';
  }

});
