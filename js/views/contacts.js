// Base router

function showContacts() {
        $( "#contacts" ).fadeIn('slow');
}
function hideContacts() {
        $( "#contacts" ).fadeOut('slow');
}

$( ".nav-contacts" ).on( "click", function() {

	if( $( 'nav > div > img[class!="nav-contacts"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			$( route ).fadeOut('slow');
	}

  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active");
	  	hideContacts()
	}
  else{
	  	$( this ).addClass("active");
	  	showContacts()
	  	route = '#contacts';
  }

});
