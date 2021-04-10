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

	include "../API/BDD/connexionLocal.php";
?>	

<!DOCTYPE html>
<html>
<head>
	<meta charset='utf-8'>
	<meta http-equiv='X-UA-Compatible' content='IE=edge'>
	<title>Liste des sondages</title>
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
					Sondages
				</h1>
			</div>
			<div class="col-4 text-right">
				<a href="user.php" class="margin-right">
					Retour
				</a>
			</div>
		</div>
		<!-- Ici mettre la liste de tous les sondages dans la bdd et puis permettre a l'user de pouvoir voter -->
		<ol>
			<?php
				$sql = "SELECT id_survey,`name`,`description` FROM survey";
				$req = $dbh->query($sql);
				$surveys = $req->fetchAll();
				foreach ($surveys as &$survey) {
					$id_survey = $survey['id_survey'];
					$name_survey = $survey['name'];
					echo "<li><a href='survey.php?id_survey=$id_survey'>$name_survey</a></li>";
				}
			?>
		</ol>
	</div>
</body>
</html>