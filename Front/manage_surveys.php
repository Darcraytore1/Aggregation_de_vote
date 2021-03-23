<?php
	session_start();
	$host = $_SERVER['HTTP_HOST'];
	if (!isset($_SESSION['admin'])) {
		header('Location: http://'.$host.'/Front/');
		exit;
	}

	include "../API/BDD/connexionLocal.php";

	$id_account = $_SESSION['id_account'];
	$sql = "SELECT id_survey,`name`,`description` FROM survey WHERE id_account = $id_account";
	$req = $dbh->query($sql);
	$surveys = $req->fetchAll();
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
		<div class="row">
			<div class="col-12 text-center">
				<h1 class="margin-top">
					Gestions de vos sondages
				</h1>
			</div>
		</div>
		<div class="surveys margin-top">
			<?php
				// Mettre un lien pour interagir avec le sondage selectionne

				foreach ($surveys as &$survey) {
					echo "<div class='survey'>";
					echo "<div class='margin-left'>";
					echo "<h1 class='survey_name'>";
					echo $survey['name'];
					echo "</h1>";
					echo $survey['description'];
					echo "</div>";
					echo "</div>";
				} 
			?>
		</div>
	</div>
</body>
</html>
