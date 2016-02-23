// Base router

function showContacts() {
        $( "#contacts" ).fadeIn('slow');
}
function hideContacts() {
        $( "#contacts" ).fadeOut('slow');
}

$( "nav > div > .nav-contacts" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active").addClass("inactive");
	  	hideContacts()
	}
  else{
  		if( $( 'nav > div > div[class!="nav-contacts"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			$( '#' + route ).fadeOut('slow');
			$( '.nav-' + route ).removeClass("active").addClass("inactive");
		}
	  	$( this ).addClass("inactive").addClass("active");
	  	showContacts()
	  	route = 'contacts';
  }

});
