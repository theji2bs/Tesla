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
		<nav>
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

	</div>

	<footer>
	<?php include 'footer.php'; ?>
	</footer>

</div>

   
	<script src="js/app.js"></script>

</body>
</html>