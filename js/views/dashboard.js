

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