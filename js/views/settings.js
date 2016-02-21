// Base router

function showSettings() {
        $( "#settings" ).fadeIn('slow');
}
function hideSettings() {
        $( "#settings" ).fadeOut('slow');
}

$( ".voiture" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active");
	  	hideSettings()
	}
  else{
	  	$( this ).addClass("active");
	  	showSettings()
  }

});
