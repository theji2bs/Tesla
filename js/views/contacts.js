// Base router

function showContacts() {
        $( "#contacts" ).fadeIn('slow');
}
function hideContacts() {
        $( "#contacts" ).fadeOut('slow');
}

$( ".nav-contacts" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active");
	  	hideContacts()
	}
  else{
	  	$( this ).addClass("active");
	  	showContacts()
  }

});
