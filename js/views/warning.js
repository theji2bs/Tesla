// Base router

function showWarning() {
        $( "#warning" ).fadeIn('slow');
}
function hideWarning() {
        $( "#warning" ).fadeOut('slow');
}

$( ".nav-warning" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active");
	  	hideWarning()
	}
  else{
	  	$( this ).addClass("active");
	  	showWarning()
  }

});
