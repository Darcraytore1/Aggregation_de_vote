<?php
	session_start();
	$host = $_SERVER['HTTP_HOST'];
	if (!isset($_SESSION['admin'])) {
		header('Location: http://'.$host.'/Front/');
		exit;
	}
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset='utf-8'>
	<meta http-equiv='X-UA-Compatible' content='IE=edge'>
	<title>Survey creation</title>
	<meta name='viewport' content='width=device-width, initial-scale=1'>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel='stylesheet' type='text/css' media='screen' href='styles/styles.css'>
</head>
<body>
	<div class="container-fluid">
		<div class="row align-center">
			<div class="col-4">
			</div>
			<div class="col-4 text-center">
				<h1 class="margin-top">
					Création de sondage
				</h1>
			</div>
			<div class="col-4 text-right">
				<a href="admin.php" class="margin-right">
					Retour
				</a>
			</div>
		</div>
		<div class="row margin-top">
			<div class="col-12 text-center">
				<form type="get" action="admin_survey_choice_creation.php">
					<div class="row">
						<div class="col-12">
							Nom du sondage : 
							<input type="text" name="survey_name">
						</div>
					</div>
					<div class="row">
						<div class="col-12">
							<br>
							Description du sondage : 
							<input type="textarea" name="survey_description">
						</div>
					</div>
					<div class="row">
						<div class="col-12 text-center">
							<br>
							<button id="send" class="btn btn-primary" type="submit">
								ENVOYER
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</body>
</html>