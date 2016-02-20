


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

    

    // Show different elements of the page
    $( "#dash" ).fadeIn('slow'); // Dashboard
    $( "header" ).fadeIn('slow'); // Header
    

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
            m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
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
        supplied: "m4a, oga",
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
