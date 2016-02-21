// Base router

function showMail() {
        $( "#mail" ).fadeIn('slow');
}
function hideMail() {
        $( "#mail" ).fadeOut('slow');
}

$( "nav > div > .nav-mail" ).on( "click", function() {

	var actualActive = $( 'nav > div > img[class!="nav-mail"]' ).hasClass('active');
	console.log(actualActive);

	if( $( 'nav > div > img[class!="nav-mail"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			
		  	console.log('testok');
	}

  if( $( this ).hasClass('active') ){ 
		
		$( this ).removeClass("active");
	  	hideMail()
	}

  else{
	  	$( this ).addClass("active");
	  	showMail()
  }

});
