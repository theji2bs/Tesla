// Base router

function showWarning() {
        $( "#warning" ).fadeIn('slow');

        $('.bar-percentage[data-percentage]').each(function () {
		  var progress = $(this);
		  var percentage = Math.ceil($(this).attr('data-percentage'));
		  $({countNum: 0}).animate({countNum: percentage}, {
		    duration: 1500,
		    easing:'linear',
		    step: function() {
		      // What todo on every count
		      var pct = Math.floor(this.countNum) + '%';
		      progress.text(pct) && progress.siblings().children().css('width',pct);
		    }
		  });
		});


}
function hideWarning() {
        $( "#warning" ).fadeOut('slow');
        $( "nav > .nav-warning" ).removeClass("active").addClass("inactive");
}

$( ".nav-warning" ).on( "click", function() {


  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active").addClass("inactive");
	  	
	}
  else{
	  	$( this ).removeClass("inactive").addClass("active");
	  	showWarning()
	  	$(window).on('keydown', function(e){
			
			//console.log(e.keyCode);

				// Echap
				if ( e.keyCode == 27 ){
						
					hideWarning()		
				
				}


		});
	  	
  }


});

$( ".box"  ).on( "click", function() {

	  	hideWarning()

});




