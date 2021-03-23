<?php
	session_start();
	$host = $_SERVER['HTTP_HOST'];
	if (!isset($_SESSION['admin'])) {
		header('Location: http://'.$host.'/Front/');
		exit;
	}

	if (!isset($_POST['survey_name'])) {
		header('Location: http://'.$host.'/Front/admin_manage_surveys.php');
		exit;
	}

	include "../API/BDD/connexionLocal.php";

	$survey_name = $_POST['survey_name'];
	$survey_description = $_POST['survey_description'];
	$id_account = $_SESSION['id_account'];

	$sql = "INSERT INTO `survey`(`id_account`, `name`, `description`) VALUES ($id_account,'$survey_name','$survey_description')";
	$req = $dbh->prepare($sql);
	$req->execute();
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset='utf-8'>
	<meta http-equiv='X-UA-Compatible' content='IE=edge'>
	<title>Choice creation</title>
	<meta name='viewport' content='width=device-width, initial-scale=1'>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel='stylesheet' type='text/css' media='screen' href='styles/styles.css'>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-12 text-center margin-top">
				<h1>
					Choice creation
				</h1>
				<br>
				<h3>
				<?php

					echo $survey_name;
				?>
				</h3>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<br>
				Choix :
				<input type="text" id="inputChoice">
				<button class="btn btn-primary" id="add">
					AJOUTER
				</button>
				<br>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<p id="choiceNumber" class="margin-top">
					Nombre de choix : 
				</p>
				<p id="choiceList">
					Choice list : 
				</p>
				<input list="choices" class="hidden" name="survey_choices">
				<datalist id="choices">
					
				</datalist>
			</div>
		</div>
	</div>
	<script src="scripts/survey_creation.js"></script>
</body>
</html>