// Base router

function showSettings() {
		$( "nav" ).fadeOut('fast'); // Header
        $( "#settings" ).fadeIn('slow');
        
}
function hideSettings() {
		$( "#settings" ).fadeOut('fast');
		$( "nav" ).fadeIn('fast'); // Header
        
    	
}

$( ".voiture" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active");
	  	hideSettings()
	}
  else{
	  	$( this ).addClass("active");
	  	showSettings()
	  	route = '#settings';
  }

});
