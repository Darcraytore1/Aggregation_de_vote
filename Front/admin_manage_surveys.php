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
	<title>Gestion des sondages</title>
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
					Admin
				</h1>
			</div>
			<div class="col-4 text-right">
				<a href="index.php" class="margin-right">
					Déconnexion
				</a>
			</div>
		</div>
		<div class="portfolio-list">
			<div class="portfolio portfolio-3">
				<div class="row">
					<div class="col-12 text-center">
						<h2>
							Création de Sondage
						</h2>
						<p class="description margin-top">
							En appuyant sur ce boutton, vous pouvez créer un sondage et le
							personnalisez, ensuite les utilisateurs et les admins de notre 
							site pourront vous donner des réponses, quand vous l'aurez décidé
							vous pourrez le cloturer et recevoir les résultats en fonction des 
							différentes méthodes d'aggrégations que nous proposons.
						</p>
						<a href="admin_survey_creation.php">
							<button class="btn btn-primary margin-top">
								Créer sondage
							</button>
						</a>
					</div>
				</div>
			</div>
			<div class="portfolio portfolio-3">
				<div class="row">
					<div class="col-12 text-center">
						<h2>
							Gestion de mes sondages
						</h2>
						<p class="description margin-top">
							En appuyant sur ce boutton, vous pouvez changer et cloturer 
							les sondages que vous avez créé.
						</p>
						<a href="manage_surveys.php">
							<button class="btn btn-primary margin-top">
								Gérer mes sondages
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>


