


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
        console.log(content.number);
        //data.datasets[0].data.push(content.number);
        //delete data.datasets[0].data[0];
        //var shift = data.datasets[0].data.shift();
        //console.log(data.datasets.data);
        //console.log(data.datasets[0].data);
        
       
    })

    // Initialisation of router
    var route = '';

    // Show different elements of the page
    $( "#dash" ).fadeIn('slow'); // Dashboard
    $( "#settings" ).fadeIn('slow'); // Dashboard
    $( "header" ).fadeIn('slow'); // Header
    $( "nav" ).fadeIn('slow'); // Header
    

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
  		if( $( 'nav > div > img[class!="nav-cellphone"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

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
  		if( $( 'nav > div > img[class!="nav-contacts"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

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
  		if( $( 'nav > div > img[class!="nav-gps"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

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
	  	if( $( 'nav > div > img[class!="nav-mail"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

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

$( "#settings > .close" ).on( "click", function() {

  hideSettings()

});

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
	  	if( $( 'nav > div > img[class!="nav-tirix"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

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
