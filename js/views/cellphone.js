// Base router

function showCellphone() {
        $( "#cellphone" ).fadeIn('slow');
}
function hideCellphone() {
        $( "#cellphone" ).fadeOut('slow');
}

$( "nav > .nav-cellphone" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active").addClass("inactive");
	
	  	hideCellphone()
	}
  else{
  		if( $( 'nav > div[class!="nav-cellphone"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			$( '#' + route ).fadeOut('slow');
			$( '.nav-' + route ).removeClass("active").addClass("inactive");
		}
	  	$( this ).removeClass("inactive").addClass("active");
	  	showCellphone()
	  	route = 'cellphone';

      $( ".appeler" ).on( "click", function() {
        console.log("click to phone");
          $('#cellphone > .pad').removeClass('active').addClass('inactive');
          $('#cellphone > .appel').removeClass('inactive').addClass('active');
      });

      $( ".raccrocher" ).on( "click", function() {
        console.log("click to phone");
          $('#cellphone > .pad').removeClass('active').addClass('inactive');
          $('#cellphone > .appel').removeClass('inactive').addClass('active');
      });

  }

});



// Phone widget
//hiddenBox.show()
var currentNumb = [];

    function numberWithSpace(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    
    $( "#cellphone > .number" ).on( "click", function( event ) {
            if(currentNumb.length < 10){
              var getNumb = $(this).text();
              //console.log(getNumb);
              currentNumb.push(getNumb);

             
              //var length = $(".numpad > p").val().length;
              //console.log(length);

              var goodNumbers = numberWithSpace(currentNumb.join(''));



              $("#cellphone > .numpad > p").text(goodNumbers);
            }
         $( "#cellphone > .del-phone-number" ).on( "click", function( event ) {
            if(currentNumb != []){
                console.log(currentNumb);
            currentNumb = [];
            
            $("#cellphone > .numpad > p").text("... ... ... ... ...");
            }
        });
    });
