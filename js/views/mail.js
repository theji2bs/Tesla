// Base router

function showMail() {
        $( "#mail" ).fadeIn('slow');
}
function hideMail() {
        $( "#mail" ).fadeOut('slow');
}

$( "nav > div > .nav-mail" ).on( "click", function() {

	if( $( 'nav > div > img[class!="nav-mail"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			$( route ).fadeOut('slow');
	}

  if( $( this ).hasClass('active') ){ 
		
		$( this ).removeClass("active");
	  	hideMail()
	}

  else{
	  	$( this ).addClass("active");
	  	showMail()
	  	route = '#mail';
  }

});
