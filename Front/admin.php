<!-- Page d'accueil de l'admin, il doit pouvoir : - mettre directement un fichier json pour obtenir ensuite le résultat 
												  - créer des sondages, ou les utilisateurs peuvent voter
												  - vote pour un sondage

	Chose à faire : - mettre des lignes au lieu de colonnes pour les portfolios
-->

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
	<title>Page admin</title>
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
						<a href="admin_manage_surveys.php">
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
							Voter pour un sondage
						</h2>
						<p class="description margin-top">
							En appuyant sur ce boutton, vous pouvez voter pour un sondage 
							créé par un autre admin, vous ne pouvez voter qu'une seul fois pour un
							sondage donné, quand celui ci sera cloturé nous vous tiendront au 
							courant des résultats obtenus.
						</p>
						<a href="survey_list.php">
							<button class="btn btn-primary margin-top">
									Voter
							</button>
						</a>
					</div>
				</div>
			</div>
			<div class="portfolio portfolio-3">
				<div class="row">
					<div class="col-12 text-center">
						<h2>
							Résultat direct avec fichier JSON
						</h2>
						<p class="description margin-top">
							En appuyant sur ce bouton, vous pouvez avec l'aide d'un fichier json,
							qui respecte la forme indiqué obtenir les résultats directement de 
							votre sondage, vous pouvez ici aussi choisir les méthodes d'aggrégations
							que vous voulez qui sont présentes.
						</p>
						<a href="result_survey_json.php">
							<button class="btn btn-primary margin-top">
								Sondage JSON
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
