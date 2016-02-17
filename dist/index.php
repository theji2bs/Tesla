<!DOCTYPE html>
<html lang="fr">
<head>

	<meta charset="UTF-8">
	<title>Tesla</title>
	<link rel="stylesheet" href="css/app.css">
	<link href='http://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css'>
	<script src="js/vendors.js"></script>

		<script type="text/javascript">
$(function () {
    $(document).ready(function () {
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
                text: 'Live random data'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
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
                }())
            }]
        });
    });
});
		</script>

</head>
<body>
<script src="https://code.highcharts.com/highcharts.js"></script>

<div class="screen">
	<header>
		<div class="left">
		HEURE
		</div>

		<div class="center">
		TESLA
		</div>

		<div class="right">
			<div class="battery">
			80%
			</div>
			<div class="network">
			3G
			</div>
			<div class="weather">
			40 C°
			</div>
		</div>
	</header>

	<div class="content">
		<nav>
		menu
		</nav>

		
		<?php include 'views/main.php'; ?>
		
	</div>

	<footer>
	footer
	</footer>

</div>


	<script src="js/app.js"></script>
</body>
</html>