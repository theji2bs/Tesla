// Base router

function showCellphone() {
        $( "#cellphone" ).fadeIn('slow');
}
function hideCellphone() {
        $( "#cellphone" ).fadeOut('slow');
}


var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0
function chrono(){
  end = new Date()
  diff = end - start
  diff = new Date(diff)
  var msec = diff.getMilliseconds()
  var sec = diff.getSeconds()
  var min = diff.getMinutes()
  var hr = diff.getHours()-1
  if (min < 10){
    min = "0" + min
  }
  if (sec < 10){
    sec = "0" + sec
  }
  if(msec < 10){
    msec = "00" +msec
  }
  else if(msec < 100){
    msec = "0" +msec
  }
  document.getElementById("chronotime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec
  timerID = setTimeout("chrono()", 10)
}
function chronoStart(){
  start = new Date()
  chrono()
}
function chronoReset(){
  document.getElementById("chronotime").innerHTML = "0:00:00:000"
  start = new Date()
}
function chronoStop(){
  clearTimeout(timerID)
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

      $( ".appeler > .cercle" ).on( "click", function() {
                $( ".body > .pad" ).fadeOut( "fast" , function(){
                    $( ".body > .appel" ).fadeIn( "slow" );
                });
                chronoStart()
               
      });


      $( ".raccrocher > .cercle" ).on( "click", function() {
                chronoStop()
                $( ".body > .appel" ).fadeOut( "fast" , function(){
                    $( ".body > .pad" ).fadeIn( "slow" );
                });
                chronoReset()
      });

  }

});



$( "#content-1 > .contact" ).on( "click", function() {

    //$( this ).removeClass("active").addClass("inactive");

                $( ".body > .pad" ).fadeOut( "fast" , function(){
                    $( ".body > .appel" ).fadeIn( "slow" );
                });
                chronoStart()

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
