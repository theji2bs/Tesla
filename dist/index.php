<!DOCTYPE html>
<html lang="fr">
<head>

	<meta charset="UTF-8">
	<title>Tesla</title>
	<link rel="stylesheet" href="css/app.css">

	<script src="js/vendors.js"></script>
	<script src="https://code.highcharts.com/highcharts.js"></script>



</head>
<body>

 

 
<div class="screen">
	<header>
	<?php include 'header.php'; ?>
	</header>

	<div class="content">
		<nav id="menunav">
		<?php include 'menu.php'; ?>
		</nav>



		<?php include 'views/auth.php'; ?>

		<?php include 'views/main.php'; ?>

		<?php include 'views/warning.php'; ?>

		<?php include 'views/tirix.php'; ?>
		
		<?php include 'views/gps.php'; ?>

		<?php include 'views/contacts.php'; ?>

		<?php include 'views/cellphone.php'; ?>

		<?php include 'views/music.php'; ?>

		<?php include 'views/mail.php'; ?>

		<?php include 'views/settings.php'; ?>

		<div id="help">
			<div class="box">
				<center><h1>Helps commands</h1></center>
				<br /><br /><br /><br />
				<h4>On General :</h4>
				<br />
				<ul>
					<li><b>W</b> : Warning T-Rex and Locking car</li>
					<li><b>H</b> : Help page (this screen)</li>
				</ul>
				<br /><br /><br /><br />
				<h4>On Tirix page:</h4>
				<br />
				<ul>
					<li><b>T</b> : Anim Tirix Circles</li>
					<li><b>I</b> : Interactions</li>
				</ul>
			</div>
		</div>

	</div>

	<footer>
	<?php include 'footer.php'; ?>
	</footer>

</div>

   
	<script src="js/app.js"></script>

</body>
</html>