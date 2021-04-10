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

	$id_survey = $_GET['id_survey'];
	
	// Details du sondage
	$sql = "SELECT `name`,`description`,id_account FROM survey WHERE id_survey = $id_survey";
	$req = $dbh->query($sql);
	$survey = $req->fetch();
	$name_survey = $survey['name'];
	$description_survey = $survey['description'];
	$id_account = $survey['id_account'];

	// Nom du createur du sondage, peut être cree des pseudo ?
	$sql = "SELECT `login` FROM account WHERE id_account = $id_account";
	$req = $dbh->query($sql);
	$account = $req->fetch();
	$login = $account['login'];

	// Choix 
	$sql = "SELECT `id_choice`,`name` FROM choice WHERE id_survey = $id_survey";
	$req = $dbh->query($sql);
	$choices = $req->fetchAll();
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
					<?php
						echo $survey['name'];
					?>	
				</h1>
			</div>
			<div class="col-4 text-right">
				<a href="user.php" class="margin-right">
					Retour
				</a>
			</div>
		</div>
		<!-- Ici mettre le fait de pouvoir voter pour ce sondage, deux choses a prendre en compte, il faut donner une note allant de 0 a 1 pour chaque choix, et un ordre doit egalemnt
		etre donne pour ceux aillant des notes equivalentes -->
		<form method="POST" action="">
			<?php
				echo "<h4>$description_survey</h4>";
				echo "Crée par : $login";
				
				echo "<ol>";
				foreach ($choices as &$choice) {
					$name_choice = $choice['name'];
					echo "<li><label for='$name_choice'>$name_choice</label></li>";
					echo "<input type='number' name='$name_choice' id='$name_choice' min='0' max='1' step='0.1'>";
				}
				echo "</ol>";
			?>
			<input type="hidden" name="verify">
			<button type="submit">Valider mon vote</button>
		</form>
	</div>
	<script src="scripts/vote_classement.js"></script>
	<?php
		// Prend le vote en compte dans la bdd si les choix sont valides 

		function check_if_notes_exist($choices) {
			foreach ($choices as &$choice) {
				$name_choice = $choice['name'];
				$note = $_POST["$name_choice"];
				if (empty($note)) {
					return False;
				} else if ($note < 0 or $note > 1) {
					return False;
				}
			}
			return true;
		}

		if (isset($_POST['verify'])) {
			if (!check_if_notes_exist($choices)) {
				echo "Veuillez donner une note pour chaque choix";
			} else {
				echo "Votre choix a bien été pris en compte";
				
				// Utiliser une maniere ou on recupere le rank directement grace a l'interface

				$ranks = array();
				foreach ($choices as &$choice) {
					$name_choice = $choice['name'];
					$note = $_POST["$name_choice"];
					$ranks[$name_choice] = $note;
				}

				asort($ranks);
				print_r($ranks);
				
				foreach ($choices as &$choice) {

					$name_choice = $choice['name'];
					$id_choice = $choice['id_choice'];
					$note = $_POST["$name_choice"];
					$id_account = $_SESSION['id_account'];
					$rank = $ranks[$name_choice];

					$sql = "INSERT INTO `vote_note`(`id_choice`, `id_account`, `note`, `rank`) VALUES ($id_choice,$id_account,$note,)";
				}
			}
		}
	?>
</body>
</html>