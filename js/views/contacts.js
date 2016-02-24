// Base router

function showContacts() {
		$( "#dash" ).fadeOut('slow'); // Dashboard
        $( "#contacts" ).fadeIn('slow');
}
function hideContacts() {
		$( "#dash" ).fadeIn('slow'); // Dashboard
        $( "#contacts" ).fadeOut('slow');
}

$( "nav > .nav-contacts" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active").addClass("inactive");
	  	hideContacts()
	}
  else{
  		if( $( 'nav > div[class!="nav-contacts"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			$( '#' + route ).fadeOut('slow');
			$( '.nav-' + route ).removeClass("active").addClass("inactive");
		}
	  	$( this ).removeClass("inactive").addClass("active");
	  	showContacts()
	  	route = 'contacts';
  }

});





