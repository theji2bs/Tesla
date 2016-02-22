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






