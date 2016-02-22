


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
	    

	var socket = io.connect('http://localhost:8080');
    socket.on('data', function(content) {
        //console.log(content.number);
        //data.datasets[0].data.push(content.number);
        //delete data.datasets[0].data[0];
        //var shift = data.datasets[0].data.shift();
        //console.log(data.datasets.data);
        //console.log(data.datasets[0].data);
        
       
    })

    // Initialisation of router
    var route = '';

    // Initialisation of switchs
    var switchSettingsLights = '';

    // Show different elements of the page
    //$( "#auth" ).fadeIn('slow'); // Dashboard
    $( "#settings" ).fadeIn('slow'); // Dashboard
    $( "header" ).fadeIn('slow'); // Header
    //$( "nav" ).fadeIn('slow'); // Header
    $( "footer" ).fadeIn('slow'); // Header
    //$( "#dash" ).fadeIn('slow'); // Dashboard
    

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

$( ".unlock" ).on( "click", function() {

	  	hideAuth()

});

$( ".power2" ).on( "click", function() {

	  	showAuth()

});



// Base router

function showCellphone() {
        $( "#cellphone" ).fadeIn('slow');
}
function hideCellphone() {
        $( "#cellphone" ).fadeOut('slow');
}

$( "nav > div > .nav-cellphone" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active");
	  	hideCellphone()
	}
  else{
  		if( $( 'nav > div > div[class!="nav-cellphone"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			$( '#' + route ).fadeOut('slow');
			$( '.nav-' + route ).removeClass("active");
		}
	  	$( this ).addClass("active");
	  	showCellphone()
	  	route = 'cellphone';

  }

});

// Base router

function showContacts() {
        $( "#contacts" ).fadeIn('slow');
}
function hideContacts() {
        $( "#contacts" ).fadeOut('slow');
}

$( "nav > div > .nav-contacts" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active");
	  	hideContacts()
	}
  else{
  		if( $( 'nav > div > div[class!="nav-contacts"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			$( '#' + route ).fadeOut('slow');
			$( '.nav-' + route ).removeClass("active");
		}
	  	$( this ).addClass("active");
	  	showContacts()
	  	route = 'contacts';
  }

});



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
    
        $( ".play" ).css( "diplay", "none" );
        $( ".pause" ).fadeIn('slow');
    }
    function widgetPause() {
        $( ".pause" ).css( "diplay", "none" );
        $( ".play" ).fadeIn('slow');
        
    }
    $( ".play" ).on( "click", widgetPlay );
    $( ".pause" ).on( "click", widgetPause );
// Base router

function showGps() {
        $( "#gps" ).fadeIn('slow');
}
function hideGps() {
        $( "#gps" ).fadeOut('slow');
}

$( "nav > div > .nav-gps" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active");
	  	hideGps()
	}
  else{
  		if( $( 'nav > div > div[class!="nav-gps"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			$( '#' + route ).fadeOut('slow');
			$( '.nav-' + route ).removeClass("active");
		}
	  	$( this ).addClass("active");
	  	showGps()
	  	route = 'gps';
  }

});

// Base router

function showMail() {
        $( "#mail" ).fadeIn('slow');
}
function hideMail() {
        $( "#mail" ).fadeOut('slow');
}

$( "nav > div > .nav-mail" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ 
		
		$( this ).removeClass("active");
	  	hideMail()
	}

  else{
	  	if( $( 'nav > div > div[class!="nav-mail"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

				$( '#' + route ).fadeOut('slow');
				$( '.nav-' + route ).removeClass("active");
		}
	  	$( this ).addClass("active");
	  	showMail()
	  	route = 'mail';
  }

});

// Base router

function showSettings() {
		$( "nav" ).fadeOut('fast'); // Header
		$( "#dash" ).fadeOut('fast'); // Header
        $( "#settings" ).fadeIn('slow');




        
}
function hideSettings() {
		$( "#settings" ).fadeOut('fast');
		$( "nav" ).fadeIn('fast'); // Header
		$( "#dash" ).fadeIn('fast'); // Header
        
    	
}

$( ".iconeU_off" ).on( "click", function() {
	
		$(this).fadeOut(500);
		$('.iconeU_on').fadeIn(500);
		$('.urgencyetat').removeClass("off").addClass("on");
		$('.urgencyetat').text( "ON" );
});

$( ".iconeU_on" ).on( "click", function() {
		$(this).fadeOut(500);
		$('.iconeU_off').fadeIn(500);
		$('.urgencyetat').removeClass("on").addClass("off");
		$('.urgencyetat').text( "OFF" );
});

$( ".iconeB_off" ).on( "click", function() {
	
		$(this).fadeOut(500);
		$('.iconeB_on').fadeIn(500);
		$('.blindageetat').removeClass("off").addClass("on");
		$('.blindageetat').text( "ON" );
});

$( ".iconeB_on" ).on( "click", function() {
		$(this).fadeOut(500);
		$('.iconeB_off').fadeIn(500);
		$('.blindageetat').removeClass("on").addClass("off");
		$('.blindageetat').text( "OFF" );
});


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

$( ".roof_open" ).on( "click", function() {
	$(this).fadeOut(500, function(){
		$('.roof_close').fadeIn(500);
	});
});
$( ".roof_close" ).on( "click", function() {
	$(this).fadeOut(500, function(){
		$('.roof_open').fadeIn(500);
	});
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

// Lock doors
 $( ".lock > .front" ).on( "click", function() {
  if( $( this ).hasClass('lock') ){ // si l'élément possède la classe .vert
		$( this ).removeClass("lock");
		$( ".lock > .front > .icon > img" ).attr( "src", "assets/img/Deverrouillage.svg" );
		$( ".lock > .front > .title > h2").html( "Unlocked" );
	}
  else{
	  	$( this ).addClass("lock");
	  	$( ".lock > .front > .icon > img" ).attr( "src", "assets/img/Verrouillage.svg" );
	  	$(".lock > .front > .title > h2" ).html( "Locked" );
  }
});

$( ".lock > .right" ).on( "click", function() {
  if( $( this ).hasClass('lock') ){ // si l'élément possède la classe .vert
		$( this ).removeClass("lock");
		$( ".lock > .right > .icon > img" ).attr( "src", "assets/img/Deverrouillage.svg" );
		$(".lock > .right > .title > h2" ).html( "Unlocked" );
	}
  else{
	  	$( this ).addClass("lock");
	  	$( ".lock > .right > .icon > img" ).attr( "src", "assets/img/Verrouillage.svg" );
	  	$(".lock > .right > .title > h2" ).html( "Locked" );
  }
});

$( ".lock > .charge" ).on( "click", function() {
  if( $( this ).hasClass('lock') ){ // si l'élément possède la classe .vert
		$( this ).removeClass("lock");
		$( ".lock > .right > .icon > img" ).attr( "src", "assets/img/Deverrouillage.svg" );
		$(".lock > .right > .title > h2" ).html( "Unlocked" );
	}
  else{
	  	$( this ).addClass("lock");
	  	$( ".lock > .right > .icon > img" ).attr( "src", "assets/img/Verrouillage.svg" );
	  	$(".lock > .right > .title > h2" ).html( "Locked" );
  }
});

 $( ".lock > .left" ).on( "click", function() {
  if( $( this ).hasClass('lock') ){ // si l'élément possède la classe .vert
		$( this ).removeClass("lock");
		$( ".lock > .left > .icon > img" ).attr( "src", "assets/img/Deverrouillage.svg" );
		$(".lock > .left > .title > h2" ).html( "Unlocked" );
	}
  else{
	  	$( this ).addClass("lock");
	  	$( ".lock > .left > .icon > img" ).attr( "src", "assets/img/Verrouillage.svg" );
	  	$(".lock > .left > .title > h2" ).html( "Locked" );
  }
});

 $( ".lock > .back" ).on( "click", function() {
  if( $( this ).hasClass('lock') ){ // si l'élément possède la classe .vert
		$( this ).removeClass("lock");
		$( ".lock > .back > .icon > img" ).attr( "src", "assets/img/Deverrouillage.svg" );
		$(".lock > .back > .title > h2" ).html( "Unlocked" );
	}
  else{
	  	$( this ).addClass("lock");
	  	$( ".lock > .back > .icon > img" ).attr( "src", "assets/img/Verrouillage.svg" );
	  	$(".lock > .back > .title > h2" ).html( "Locked" );
  }
});

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

/*
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
*/


// Menu
 /*$( ".on" ).on( "click", function() {
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
});*/


// Base router

function showTirix() {
        $( "#tirix" ).fadeIn('slow');
}
function hideTirix() {
        $( "#tirix" ).fadeOut('slow');
}

$( "nav > div > .nav-tirix" ).on( "click", function() {


  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active");
	  	hideTirix()

	}
  else{
	  	if( $( 'nav > div > div[class!="nav-tirix"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

				$( '#' + route ).fadeOut('slow');
				$( '.nav-' + route ).removeClass("active");
		}
	  	$( this ).addClass("active");
	  	showTirix()
	  	route = 'tirix';
  }

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
}

$( ".nav-warning"  ).on( "click", function() {


  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active");
	  	hideWarning()
	}
  else{
	  	$( this ).addClass("active");
	  	showWarning()
	  	
  }


});

$( ".box"  ).on( "click", function() {

	  	hideWarning()

});




