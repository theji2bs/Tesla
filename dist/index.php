<!DOCTYPE html>
<html lang="fr">
<head>

	<meta charset="UTF-8">
	<title>Tesla</title>
	<link rel="stylesheet" href="css/app.css">
	<link href='http://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css'>


</head>
<body>

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

		<section class="main">
		<?php include 'views/main.php'; ?>
		</section>
	</div>

	<footer>
	footer
	</footer>

</div>


	<script src="js/vendor.js"></script>
	<script src="js/app.js"></script>
</body>
</html>