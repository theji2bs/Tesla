// On attend que le DOM soit prêt
$(document).ready(function(){

	// Time of the application
	moment.locale('fr', {
	    longDateFormat : {
	        LTS : "HH:mm:ss",
	    }
	});

	var interval = setInterval(function() {
	        var momentNow = moment().format('LTS');
	        $('#time').html(momentNow);
	    }, 100);
	    



    // Initialisation of router
    var route = '';

    // Initialisation of switchs
    var switchSettingsLights = '';

    // Show different elements of the page
    $( "#auth" ).fadeIn('slow'); // Dashboard
    //$( "#tirix" ).fadeIn('slow'); // Dashboard
    //$( "#settings" ).fadeIn('slow'); // Dashboard
    //$( "header" ).fadeIn('slow'); // Header
    //$( "nav" ).fadeIn('slow'); // Header
    //$( "footer" ).fadeIn('slow'); // Header
    //$( "#dash" ).fadeIn('slow'); // Dashboard

$(window).on('keydown', function(e){
    
    //console.log(e.keyCode);
        
        // H
        if ( e.keyCode == 72 ){
            
            if (route === 'help'){
                $( "#help" ).fadeOut('fast'); // Help 
                route = '';
                  console.log('off');
            }else{
                $( "#help" ).fadeIn('fast'); // Help 
                route = 'help'; 
                console.log('on');  
            }
                 
        
        }




});
    

});
// Base router

function showAuth() {
		$( "header" ).fadeOut('slow'); // Header
		$( "nav" ).fadeOut('slow'); // Nav
		$( "footer" ).fadeOut('slow'); // Footer
		$( "#dash" ).fadeOut('slow'); // Header
        $( "#auth" ).fadeIn('slow');
}

function hideAuth() {
		$( "#auth" ).fadeOut('slow'); // Auth
		$( "header" ).fadeIn('slow'); // Header
		$( "nav" ).fadeIn('slow'); // Nav
		$( "footer" ).fadeIn('slow'); // Footer
		$( "#dash" ).fadeIn('slow'); // Header 
}



//$( "#settings" ).fadeIn('slow'); // Dashboard
    //$( "header" ).fadeIn('slow'); // Header
    //$( "nav" ).fadeIn('slow'); // Header
    //$( "footer" ).fadeIn('slow'); // Header
    //$( "#dash" ).fadeIn('slow'); // Dashboard

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

$( ".btnpower" ).on( "click", function() {

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

$( ".unlock" ).on( "click", function() {

	  	hideAuth()

});

$( ".power2" ).on( "click", function() {

	  	showAuth()

});



// Base router

function showCellphone() {
        $( "#dash" ).fadeOut('slow'); // Dashboard
        $( "#cellphone" ).fadeIn('slow');
        
}
function hideCellphone() {
        $( "#cellphone" ).fadeOut('slow');
        $( "#dash" ).fadeIn('slow'); // Dashboard
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

  }

});

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

$( "#content-1 > .contact" ).on( "click", function() {

    //$( this ).removeClass("active").addClass("inactive");

                $( ".body > .pad" ).fadeOut( "fast" , function(){
                    $( ".body > .appel" ).fadeIn( "slow" );
                });
                chronoStart()

});

$( ".callerphone" ).on( "click", function() {

                showCellphone()

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

//$("input[type=range]").val(6); // set value to 6

// Base router

function showContacts() {
		$( "#dash" ).fadeOut('slow'); // Dashboard
        $( "#contacts" ).fadeIn('slow');
}
function hideContacts() {
		$( "#dash" ).fadeIn('slow'); // Dashboard
        $( "#contacts" ).fadeOut('slow');
}

$( "nav > .nav-contacts" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active").addClass("inactive");
	  	hideContacts()
	}
  else{
  		if( $( 'nav > div[class!="nav-contacts"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			$( '#' + route ).fadeOut('slow');
			$( '.nav-' + route ).removeClass("active").addClass("inactive");
		}
	  	$( this ).removeClass("inactive").addClass("active");
	  	showContacts()
	  	route = 'contacts';
  }

});







//callerphone


        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        $('#container').highcharts({
            credits: {
                enabled: false
            },
            chart: {
                type: 'spline',
                backgroundColor: '',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: ''
            },
            xAxis: {
                type: 'datetime',
                title: {
                    enabled: false
                    },
                labels: {
                    enabled: false
                },
                gridLineWidth: 0,
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    enabled: false
                },
                labels: {
                    enabled: false
                },
                gridLineWidth: 0,
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Random data',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;
                        
                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;
                }()),
                color: '#00e2f3'
            }]
        });

    // Phone widget
    //hiddenBox.show();
      var currentNumb = [];

    function numberWithSpace(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    
    $( ".number" ).on( "click", function( event ) {
            $('.delete').fadeIn(500);
            if(currentNumb.length < 10){
              var getNumb = $(this).text();
              //console.log(getNumb);
              currentNumb.push(getNumb);

             
              //var length = $(".numpad > p").val().length;
              //console.log(length);

              var goodNumbers = numberWithSpace(currentNumb.join(''));



              $(".numpad > p").text(goodNumbers);
            }
         $( ".del-phone-number" ).on( "click", function( event ) {
            if(currentNumb != []){
                console.log(currentNumb);
            currentNumb = [];
            
            $(".numpad > p").text("... ... ... ... ...");
            }
            $(this).fadeOut(500);
        });
    });



    $(document).ready(function(){
      $("#jquery_jplayer_1").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Bubble",
            mp3: "assets/sound/jurassic-world-music.mp3"
          });
        },
        cssSelectorAncestor: "#jp_container_1",
        cssSelector: {
          videoPlay: "",
          play: ".play",
          pause: ".pause",
          stop: "",
          seekBar: "",
          playBar: "",
          currentTime: ".jp-current-time",
          duration: ".jp-duration",
          title: ".jp-title",
        },
        supplied: "mp3",
        useStateClassSkin: true,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true
      });
    });

    function widgetPlay() {
        var myDiv = $('.intobar');
        myDiv.animate({width: '320px'}, 99000);
        $( ".play" ).css( "diplay", "none" );
        $( ".pause" ).fadeIn('slow');
        myDiv.queue(function() {
            var that = $( this );
            that.dequeue();
        });
    }
    function widgetPause() {
        var myDiv = $('.intobar');
        $( ".pause" ).css( "diplay", "none" );
        $( ".play" ).fadeIn('slow');
        myDiv.clearQueue();
        myDiv.stop()
    }
    $( ".play" ).on( "click", widgetPlay );
    $( ".pause" ).on( "click", widgetPause );
var i1=0;
$( ".siege1" ).on( "click", function() {

	if($(".cerclebox1 > .c1").hasClass('noactive') && $(".cerclebox1 > .c2").hasClass('noactive') && $(".cerclebox1 > .c3").hasClass('noactive') && i1==0 ){
		$(".cerclebox1 > .c1").removeClass('noactive').addClass('active');
	}
	else if($(".cerclebox1 > .c1").hasClass('active') && $(".cerclebox1 > .c2").hasClass('noactive') && $(".cerclebox1 > .c3").hasClass('noactive') && i1==0){
		$(".cerclebox1 > .c2").removeClass('noactive').addClass('active');
	}
	else if($(".cerclebox1 > .c1").hasClass('active') && $(".cerclebox1 > .c2").hasClass('active') && $(".cerclebox1 > .c3").hasClass('noactive') && i1==0){
		$(".cerclebox1 > .c3").removeClass('noactive').addClass('active');
		i1=1;
	}
	else if($(".cerclebox1 > .c1").hasClass('active') && $(".cerclebox1 > .c2").hasClass('active') && $(".cerclebox1 > .c3").hasClass('active')){
		$(".cerclebox1 > .c3").removeClass('active').addClass('noactive');
	}
	else if($(".cerclebox1 > .c1").hasClass('active') && $(".cerclebox1 > .c2").hasClass('active') && $(".cerclebox1 > .c3").hasClass('noactive')){
		$(".cerclebox1 > .c2").removeClass('active').addClass('noactive');
	}
	else if($(".cerclebox1 > .c1").hasClass('active') && $(".cerclebox1 > .c2").hasClass('noactive') && $(".cerclebox1 > .c3").hasClass('noactive')){
		$(".cerclebox1 > .c1").removeClass('active').addClass('noactive');
		i1=0;
	}
});

var i2=0;
$( ".siege2" ).on( "click", function() {

	if($(".cerclebox3 > .c1").hasClass('noactive') && $(".cerclebox3 > .c2").hasClass('noactive') && $(".cerclebox3 > .c3").hasClass('noactive') && i2==0 ){
		$(".cerclebox3 > .c1").removeClass('noactive').addClass('active');
	}
	else if($(".cerclebox3 > .c1").hasClass('active') && $(".cerclebox3 > .c2").hasClass('noactive') && $(".cerclebox3 > .c3").hasClass('noactive') && i2==0){
		$(".cerclebox3 > .c2").removeClass('noactive').addClass('active');
	}
	else if($(".cerclebox3 > .c1").hasClass('active') && $(".cerclebox3 > .c2").hasClass('active') && $(".cerclebox3 > .c3").hasClass('noactive') && i2==0){
		$(".cerclebox3 > .c3").removeClass('noactive').addClass('active');
		i2=1;
	}
	else if($(".cerclebox3 > .c1").hasClass('active') && $(".cerclebox3 > .c2").hasClass('active') && $(".cerclebox3 > .c3").hasClass('active')){
		$(".cerclebox3 > .c3").removeClass('active').addClass('noactive');
	}
	else if($(".cerclebox3 > .c1").hasClass('active') && $(".cerclebox3 > .c2").hasClass('active') && $(".cerclebox3 > .c3").hasClass('noactive')){
		$(".cerclebox3 > .c2").removeClass('active').addClass('noactive');
	}
	else if($(".cerclebox3 > .c1").hasClass('active') && $(".cerclebox3 > .c2").hasClass('noactive') && $(".cerclebox3 > .c3").hasClass('noactive')){
		$(".cerclebox3 > .c1").removeClass('active').addClass('noactive');
		i2=0;
	}
});


var i3=0;
$( ".ventilation" ).on( "click", function() {

	if($(".cerclebox2 > .c1").hasClass('noactive') && $(".cerclebox2 > .c2").hasClass('noactive') && $(".cerclebox2 > .c3").hasClass('noactive') && $(".cerclebox2 > .c4").hasClass('noactive') && $(".cerclebox2 > .c5").hasClass('noactive') && i3==0 ){
		$(".cerclebox2 > .c1").removeClass('noactive').addClass('active');
	}
	else if($(".cerclebox2 > .c1").hasClass('active') && $(".cerclebox2 > .c2").hasClass('noactive') && $(".cerclebox2 > .c3").hasClass('noactive') && $(".cerclebox2 > .c4").hasClass('noactive') && $(".cerclebox2 > .c5").hasClass('noactive') && i3==0){
		$(".cerclebox2 > .c2").removeClass('noactive').addClass('active');
	}
	else if($(".cerclebox2 > .c1").hasClass('active') && $(".cerclebox2 > .c2").hasClass('active') && $(".cerclebox2 > .c3").hasClass('noactive') && $(".cerclebox2 > .c4").hasClass('noactive') && $(".cerclebox2 > .c5").hasClass('noactive') && i3==0){
		$(".cerclebox2 > .c3").removeClass('noactive').addClass('active');
	}
	else if($(".cerclebox2 > .c1").hasClass('active') && $(".cerclebox2 > .c2").hasClass('active') && $(".cerclebox2 > .c3").hasClass('active') && $(".cerclebox2 > .c4").hasClass('noactive') && $(".cerclebox2 > .c5").hasClass('noactive') && i3==0){
		$(".cerclebox2 > .c4").removeClass('noactive').addClass('active');
	}
	else if($(".cerclebox2 > .c1").hasClass('active') && $(".cerclebox2 > .c2").hasClass('active') && $(".cerclebox2 > .c3").hasClass('active') && $(".cerclebox2 > .c4").hasClass('active') && $(".cerclebox2 > .c5").hasClass('noactive') && i3==0){
		$(".cerclebox2 > .c5").removeClass('noactive').addClass('active');
		i3=1;
	}
	else if($(".cerclebox2 > .c1").hasClass('active') && $(".cerclebox2 > .c2").hasClass('active') && $(".cerclebox2 > .c3").hasClass('active' )&& $(".cerclebox2 > .c4").hasClass('active') && $(".cerclebox2 > .c5").hasClass('active')){
		$(".cerclebox2 > .c5").removeClass('active').addClass('noactive');
	}
	else if($(".cerclebox2 > .c1").hasClass('active') && $(".cerclebox2 > .c2").hasClass('active') && $(".cerclebox2 > .c3").hasClass('active') && $(".cerclebox2 > .c4").hasClass('active') && $(".cerclebox2 > .c5").hasClass('noactive')){
		$(".cerclebox2 > .c4").removeClass('active').addClass('noactive');
	}
	else if($(".cerclebox2 > .c1").hasClass('active') && $(".cerclebox2 > .c2").hasClass('active') && $(".cerclebox2 > .c3").hasClass('active') && $(".cerclebox2 > .c4").hasClass('noactive') && $(".cerclebox2 > .c5").hasClass('noactive')){
		$(".cerclebox2 > .c3").removeClass('active').addClass('noactive');
	}
	else if($(".cerclebox2 > .c1").hasClass('active') && $(".cerclebox2 > .c2").hasClass('active') && $(".cerclebox2 > .c3").hasClass('noactive') && $(".cerclebox2 > .c4").hasClass('noactive') && $(".cerclebox2 > .c5").hasClass('noactive')){
		$(".cerclebox2 > .c2").removeClass('active').addClass('noactive');
	}
	else if($(".cerclebox2 > .c1").hasClass('active') && $(".cerclebox2 > .c2").hasClass('noactive') && $(".cerclebox2 > .c3").hasClass('noactive') && $(".cerclebox2 > .c4").hasClass('noactive') && $(".cerclebox2 > .c5").hasClass('noactive')){
		$(".cerclebox2 > .c1").removeClass('active').addClass('noactive');
		i3=0;
	}
});


$( ".syncblanc" ).on( "click", function() {
	$(this).fadeOut(500);
	$(".syncblue").fadeIn(500);
	$(".p_sync").css("color", "#00D8EF");
});

$( ".syncblue" ).on( "click", function() {
	$(this).fadeOut(500);
	$(".syncblanc").fadeIn(500);
	$(".p_sync").css("color", "white");
});

var count_temp_seat_1 = 50;
$( ".volvol > .moins1" ).on( "click", function() {
	//console.log("test");

	if(count_temp_seat_1 >= 0){
		console.log(count_temp_seat_1);
		count_temp_seat_1 = count_temp_seat_1 - 10;
		$('input[type="range"][name="temp_seat_1"]').val(count_temp_seat_1); // set value to 6
		
		console.log(count_temp_seat_1);
	}
});

$( ".volvol > .plus1" ).on( "click", function() {
	//console.log("test");
	if(count_temp_seat_1 <= 100){
		//console.log(count_temp_seat_1);
		count_temp_seat_1 = count_temp_seat_1 + 10;
		$('input[type="range"][name="temp_seat_1"]').val(count_temp_seat_1); 

	}


});

var count_temp_seat_2 = 50;
$( ".volvol1 > .moins1" ).on( "click", function() {
	//console.log("test");

	if(count_temp_seat_2 >= 0){
		//console.log(count_temp_seat_2);
		count_temp_seat_2 = count_temp_seat_2 - 10;
		$('input[type="range"][name="temp_seat_2"]').val(count_temp_seat_2); // set value to 6
		
	}
});

$( ".volvol1 > .plus1" ).on( "click", function() {
	//console.log("test");
	if(count_temp_seat_2 <= 100){
		count_temp_seat_2 = count_temp_seat_2 + 10;
		$('input[type="range"][name="temp_seat_2"]').val(count_temp_seat_2); 
	}


});


$( "#put_off" ).on( "click", function() {
	$('.roundmove').animate({left: '47px'}, "fast");
	$('.content').fadeOut(500);
});

$( "#put_on" ).on( "click", function() {
	$('.roundmove').animate({left: '0px'}, "fast");
	$('.content').fadeIn(500);
});



// Base router

function showGps() {
		$( "#dash" ).fadeOut('slow'); // Dashboard
        $( "#gps" ).fadeIn('slow');
}
function hideGps() {
		$( "#dash" ).fadeIn('slow'); // Dashboard
        $( "#gps" ).fadeOut('slow');
}

$( "nav > .nav-gps" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active").addClass("inactive");
	  	hideGps()
	}
  else{
  		if( $( 'nav > div[class!="nav-gps"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			$( '#' + route ).fadeOut('slow');
			$( '.nav-' + route ).removeClass("active").addClass("inactive");
		}
	  	$( this ).removeClass("inactive").addClass("active");
	  	showGps()
	  	route = 'gps';
  }

});

// Base router

function showMail() {
		$( "#dash" ).fadeOut('slow'); // Dashboard
        $( "#mail" ).fadeIn('slow');
}
function hideMail() {
		$( "#dash" ).fadeIn('slow'); // Dashboard
        $( "#mail" ).fadeOut('slow');
}

$( "nav > .nav-mail" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ 
		
		$( this ).removeClass("active").addClass("inactive");
	  	hideMail()
	}

  else{
	  	if( $( 'nav > div[class!="nav-mail"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

				$( '#' + route ).fadeOut('slow');
				$( '.nav-' + route ).removeClass("active").addClass("inactive");
		}
	  	$( this ).removeClass("inactive").addClass("active");
	  	showMail()
	  	route = 'mail';
  }

});

// Base router

function showMusic() {
		$( "#dash" ).fadeOut('slow'); // Dashboard
        $( "#music" ).fadeIn('slow');
}
function hideMusic() {
		$( "#dash" ).fadeIn('slow'); // Dashboard
        $( "#music" ).fadeOut('slow');
}

$( "nav  > .nav-music" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active").addClass("inactive");
	  	hideMusic()
	}
  else{
  		if( $( 'nav > div[class!="nav-music"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			$( '#' + route ).fadeOut('slow');
			$( '.nav-' + route ).removeClass("active").addClass("inactive");
		}
	  	$( this ).removeClass("inactive").addClass("active");
	  	showMusic()
	  	route = 'music';

  }

});

// Base router

function showSettings() {
		$( "nav" ).fadeOut('fast'); // Header
		//$( "#dash" ).fadeOut('fast'); // Header
        $( "#settings" ).fadeIn('slow');
   
}
function hideSettings() {
		
        //console.log(route);
        $( "#settings" ).fadeOut('fast');
        
			$( "nav" ).fadeIn('fast'); // Header
        
        //$( "#dash" ).fadeIn('fast'); // Header
    	
}

function lockDoor(id){
	if( ($( ".lock > ."+ id ).hasClass('lock'))){ // si l'élément possède la classe .vert
		$( ".lock > ."+ id ).removeClass("lock");
		$( ".lock > ."+ id +" > .icon > img" ).attr( "src", "assets/img/Deverrouillage.svg" );
		$(".lock > ."+ id +" > .title > h2" ).html( "Unlocked" );
	}
  else{
	  	$( ".lock > ."+ id ).addClass("lock");
	  	$( ".lock > ."+ id +" > .icon > img" ).attr( "src", "assets/img/Verrouillage.svg" );
	  	$(".lock > ."+ id +" > .title > h2" ).html( "Locked" );
  }
}

function forceLockDoor(id){

	  	$( ".lock > ."+ id ).addClass("lock");
	  	$( ".lock > ."+ id +" > .icon > img" ).attr( "src", "assets/img/Verrouillage.svg" );
	  	$(".lock > ."+ id +" > .title > h2" ).html( "Locked" );

}

function forceUnlockDoor(id){

		$( ".lock > ."+ id ).removeClass("lock");
		$( ".lock > ."+ id +" > .icon > img" ).attr( "src", "assets/img/Deverrouillage.svg" );
		$(".lock > ."+ id +" > .title > h2" ).html( "Unlocked" );

}

function roofClose(){
	$(".roof_open").fadeOut(500, function(){
		$('.roof_close').fadeIn(500);
	});
}

function roofOpen(){
	$(".roof_close").fadeOut(500, function(){
		$('.roof_open').fadeIn(500);
	});
}

$( ".roof_open" ).on( "click", function() {
	roofClose();
});
$( ".roof_close" ).on( "click", function() {
	roofOpen();
});



function lockGeneral(){
	  forceLockDoor("front");
	  forceLockDoor("right");
	  forceLockDoor("charge");
	  forceLockDoor("left");
	  forceLockDoor("back");
	  roofClose()
}

function unlockGeneral(){
	  forceUnlockDoor("front");
	  forceUnlockDoor("right");
	  forceUnlockDoor("charge");
	  forceUnlockDoor("left");
	  forceUnlockDoor("back");
	  roofOpen()
}

$(window).on('keydown', function(e){
	
	//console.log(e.keyCode);
		
		// W
		if ( e.keyCode == 87 ){
			
			lockGeneral();	
			$('.iconeU_off').fadeOut(500);
			$('.iconeU_on').fadeIn(500);
			$('.urgencyetat').removeClass("off").addClass("on");
			$('.urgencyetat').text( "ON" );	
		
		}
		


});

$( ".iconeU_off" ).on( "click", function() {
	
		$(this).fadeOut(500);
		$('.iconeU_on').fadeIn(500);
		$('.urgencyetat').removeClass("off").addClass("on");
		$('.urgencyetat').text( "ON" );

		lockGeneral()

});

$( ".iconeU_on" ).on( "click", function() {
		$(this).fadeOut(500);
		$('.iconeU_off').fadeIn(500);
		$('.urgencyetat').removeClass("on").addClass("off");
		$('.urgencyetat').text( "OFF" );

		unlockGeneral()
});

// Lock doors


 $( ".lock > .front" ).on( "click", function() {
	lockDoor("front");
});

$( ".lock > .right" ).on( "click", function() {
  lockDoor("right");
});

$( ".lock > .charge" ).on( "click", function() {
  lockDoor("charge");
});

 $( ".lock > .left" ).on( "click", function() {
  lockDoor("left");
});

 $( ".lock > .back" ).on( "click", function() {
  lockDoor("back");
});




$( ".iconeB_off" ).on( "click", function() {
	
		$(this).fadeOut(500);
		$('.iconeB_on').fadeIn(500);
		$('.blindageetat').removeClass("off").addClass("on");
		$( ".car > .car_skeleton > img" ).attr( "src", "assets/img/Car_red.svg" );
		$('.blindageetat').text( "ON" );
});

$( ".iconeB_on" ).on( "click", function() {
		$(this).fadeOut(500);
		$('.iconeB_off').fadeIn(500);
		$('.blindageetat').removeClass("on").addClass("off");
		$( ".car > .car_skeleton > img" ).attr( "src", "assets/img/Car.svg" );
		$('.blindageetat').text( "OFF" );
});


$( ".voiture" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active");
		$(this).attr('src', 'assets/img/Voiture.svg');
		$(".p_car").css("color", "white");
	  	hideSettings()
	}
  else{
	  	$( this ).addClass("active");
	  	$(this).attr('src', 'assets/img/VoitureBlue.svg');
	  	$(".p_car").css("color", "#00D8EF");
	  	showSettings()
  }

});

$( "#settings > .close" ).on( "click", function() {

  hideSettings()

});


// Lights controls
switchSettingsLights = 'off';
// Switch
 $( ".off" ).on( "click", function() {

 		if( $( '.lights_control > .state > ul > li[class!="off"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			$( "." + switchSettingsLights ).removeClass("active");
			$( this ).addClass("active");
			$( ".light_preview" ).fadeOut('fast');
			$( ".light_preview" ).fadeOut( "fast", function() {
			    $( ".light_preview" ).attr( "src", "assets/img/Light_Off.svg" );
				
			  });
			$( ".light_preview" ).fadeIn('fast');
		  	switchSettingsLights = 'off';
		  	console.log(switchSettingsLights);

		}
  
});

 $( ".parking" ).on( "click", function() {
 		if( $( '.lights_control > .state > ul > li[class!="parking"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			$( "." + switchSettingsLights ).removeClass("active");
			$( this ).addClass("active");
			$( ".light_preview" ).fadeOut( "fast", function() {
			    $( ".light_preview" ).attr( "src", "assets/img/Light_Parking.svg" );
				
			  });
			$( ".light_preview" ).fadeIn('fast');
		  	switchSettingsLights = 'parking';
		  	console.log(switchSettingsLights);
		}
  
});
 $( ".auto" ).on( "click", function() {
 		if( $( '.lights_control > .state > ul > li[class!="auto"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			$( "." + switchSettingsLights ).removeClass("active");
			$( this ).addClass("active");
			$( ".light_preview" ).fadeOut( "fast", function() {
			    $( ".light_preview" ).attr( "src", "assets/img/Light_On.svg" );
				
			  });
			$( ".light_preview" ).fadeIn('fast');
		  	switchSettingsLights = 'auto';
		  	console.log(switchSettingsLights);
		}
});

 $( ".on" ).on( "click", function() {
 		if( $( '.lights_control > .state > ul > li[class!="on"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			$( "." + switchSettingsLights ).removeClass("active");
			$( this ).addClass("active");
			$( ".light_preview" ).fadeOut( "fast", function() {
			    $( ".light_preview" ).attr( "src", "assets/img/Light_On.svg" );
			  });
			$( ".light_preview" ).fadeIn('fast');
		  	switchSettingsLights = 'on';
		  	console.log(switchSettingsLights);
		}
});






// Options
 $( ".fog" ).on( "click", function() {
  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert
		$( this ).removeClass("active");
	}
  else{
	  	$( this ).addClass("active");
  }
});

 $( ".drl" ).on( "click", function() {
  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert
		$( this ).removeClass("active");
	}
  else{
	  	$( this ).addClass("active");
  }
});

 $( ".dome" ).on( "click", function() {
  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert
		$( this ).removeClass("active");
	}
  else{
	  	$( this ).addClass("active");
  }
});

  $( ".ambient" ).on( "click", function() {
  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert
		$( this ).removeClass("active");
	}
  else{
	  	$( this ).addClass("active");
  }
});


// Menu
$( ".aside > ul > li" ).on( "click", function() {

 	$('.aside > ul > .active').removeClass('active').addClass('noactive');
 	$(this).removeClass('noactive').addClass('active');

 	if($(this).hasClass('general')){
		$('.content > ul > li').removeClass('active').addClass('noactive');
		$('.txt_general').removeClass('noactive').addClass('active');
	}
	if($(this).hasClass('driving')){
		$('.content > ul > li').removeClass('active').addClass('noactive');
		$('.txt_driving').removeClass('noactive').addClass('active');
	}
	if($(this).hasClass('display')){
		$('.content > ul > li').removeClass('active').addClass('noactive');
		$('.txt_displays').removeClass('noactive').addClass('active');
	}
	if($(this).hasClass('charging')){
		$('.content > ul > li').removeClass('active').addClass('noactive');
		$('.txt_charging').removeClass('noactive').addClass('active');
	}
});


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

$( "#tirix > .close" ).on( "click", function() {
	$( "nav > .nav-tirix" ).removeClass("active").addClass("inactive");
  hideTirix()

});

$( ".containerlogo" ).on( "click", function() {
	useTirix()
});


		

	

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

$(window).on('keydown', function(e){
	
	//console.log(e.keyCode);
		
		// W
		if ( e.keyCode == 87 ){
			
			showWarning();			
		
		}

		if ( e.keyCode == 27 ){
				
			hideWarning()		
		
		}


});

$( ".nav-warning" ).on( "click", function() {


  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active").addClass("inactive");
	  	
	}
  else{
	  	$( this ).removeClass("inactive").addClass("active");
	  	showWarning()
	  	
  }


});

$( ".box"  ).on( "click", function() {

	  	hideWarning()

});




