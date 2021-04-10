<?php
	session_start();
	$host = $_SERVER['HTTP_HOST'];
	if ((!isset($_SESSION['admin'])) and (!isset($_SESSION['user']))) {
		header('Location: http://'.$host.'/Front/index.php');
		exit;
	}
	if (isset($_SESSION['admin'])){
		$return = 'admin';
	} else {
		$return = 'user';
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
	<!-- Here 2 solutions, the first is the creation of the survey with just
	a json file, the second is the creation is the creation of a survey where user 
	can come and choose a answer, and when the admin choose he can finish this survey -->
	
	<div class="container-fluid">
		<div class="row align-center">
			<div class="col-4">
			</div>
			<div class="col-4 text-center">
				<h1 class="margin-top">
					Résultat de sondage pas fichier JSON
				</h1>
			</div>
			<div class="col-4 text-right">
				<a href="<?php echo $return ?>.php" class="margin-right">
					Retour
				</a>
			</div>
		</div>
		<div class="portfolio portfolio-block">
			<div class="row">
				<form enctype="multipart/form-data" action="survey_result.php" method="post">
					<div class="form-group">
						<p>
							Tu peux nous transmettre ton fichier et obtenir les résultats associé en fonction des 
							des méthodes d'aggrégations que tu auras choisi.
						</p>
						<input type="hidden" name="MAX_FILE_SIZE" value="300000"/>
						<input type="file" class="form-control-file" name="vote_list">

						<!-- I can directly create checkbox in function of methods who are in the API rather than in raw -->
						
						<div class="margin-top">
							<input type="checkbox" name="average_method" id="checkbox_average_method" class="little_margin-right">
							<label for="checkbox_average_method">Average method</label>
						</div>

						<div>
							<input type="checkbox" name="borda_method" id="checkbox_borda_method" class="little_margin-right">
							<label for="checkbox_borda_method">Borda method</label>
						</div>
						
						<div>
							<input type="checkbox" name="median_method" id="checkbox_median_method" class="little_margin-right">
							<label for="checkbox_median_method">Median method</label>
						</div>
					</div>

					<?php
						// Trouver comment envoyer un message depuis une autre page sans passer par un get
					?>
						<!--
						<p class="error">
							Aucun fichier sélectionné 
						</p>
						-->
					<?php
					?>
					<button class="btn btn-primary">
						Give result
					</button>
				</form>
			</div>
		</div>
	</div>
</body>
</html>

<!-- I must say to the user, if he doesn't check a box to check one -->