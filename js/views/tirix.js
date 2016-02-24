// Base router

function showTirix() {
		$( "#dash" ).fadeOut('slow'); // Dashboard
        $( "#tirix" ).fadeIn('slow');
        $("nav").fadeOut();
}
function hideTirix() {
        $( "#tirix" ).fadeOut('slow');
        $( "#dash" ).fadeIn('slow'); // Dashboard
        $("nav").fadeIn();
}

$( "#tirix > .close" ).on( "click", function() {
	$( "nav > .nav-tirix" ).removeClass("active").addClass("inactive");
  hideTirix()

});

function useTirix() {
	$( ".containerlogo" ).fadeOut( 300, function() { 
	  if( $( ".containerlogo > div" ).hasClass('active') ){ // si l'élément possède la classe .vert
				    $( ".containerlogo > div" ).removeClass("active");
					$( ".containerlogo > div" ).addClass("inactive");
					$('.ball, .ball1').removeClass('stop');	    
					$('.trigger').click(function() {
							$('.ball, .ball1').toggleClass('stop');
					});
		}
	  else{
	  			
				    $( ".containerlogo > div" ).removeClass("inactive");
				    $( ".containerlogo > div" ).addClass("active");
				
				  
	  }
  });
  $( ".containerlogo" ).fadeIn( 100 );
}

function showInteraction(i) {


	$( ".contenu > #" + i ).slideDown( 200, function() {

		$( ".contenu > #" + i ).fadeIn( 200 );
		console.log (i);
      // Animation complete.
  	});

}

$( "nav > .nav-tirix" ).on( "click", function() {


  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active").addClass("inactive");
	  	hideTirix()

	}
  else{
	  	if( $( 'nav > div[class!="nav-tirix"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

				$( '#' + route ).fadeOut('slow');
				$( '.nav-' + route ).removeClass("active").addClass("inactive");
		}
	  	$( this ).removeClass("inactive").addClass("active");
	  	showTirix()
	  	route = 'tirix';
  }

});


$( ".containerlogo" ).on( "click", function() {
	useTirix()
});

var interactions = 0;

$(window).on('keydown', function(e){
	
	//console.log(e.keyCode);

		// T
		if ( e.keyCode == 84 ){
			
			useTirix()			
		
		}

		// I
		if ( e.keyCode == 73 ){

			interactions = interactions + 1;
			showInteraction(interactions);

		}


});

		

	
