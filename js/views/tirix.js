// Base router

function showTirix() {
        $( "#tirix" ).fadeIn('slow');
}
function hideTirix() {
        $( "#tirix" ).fadeOut('slow');
}

$( ".nav-tirix" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active");
	  	hideTirix()
	}
  else{
	  	$( this ).addClass("active");
	  	showTirix()
  }

});
