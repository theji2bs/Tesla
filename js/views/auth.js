// Base router

function showAuth() {
		$( "nav" ).fadeOut('fast'); // Header
		$( "#dash" ).fadeOut('fast'); // Header
        $( "#auth" ).fadeIn('slow');
        
}
function hideAuth() {
		$( "#auth" ).fadeOut('fast');
		$( "nav" ).fadeIn('fast'); // Header
		$( "#dash" ).fadeIn('fast'); // Header
        
    	
}

$( ".tesla" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active");
	  	hideAuth()
	}
  else{
	  	$( this ).addClass("active");
	  	showAuth()
	  	route = '#auth';
  }

});

