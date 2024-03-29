<?php
	include("authentification.php");
	session_destroy();
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset='utf-8'>
	<meta http-equiv='X-UA-Compatible' content='IE=edge'>
	<title>Page de connexion</title>
	<meta name='viewport' content='width=device-width, initial-scale=1'>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel='stylesheet' type='text/css' media='screen' href='styles/styles.css'>
</head>
<body>
	<!-- 2 accounts, user and admin, there is user account because user must to have
	the permission to can answer to the survey, so for recognise him, there is user account -->

	<div class="container-fluid">
		<div class="row">
			<div class="col-12 text-center">
				<h1 class="margin-top">
					Connexion
				</h1>
			</div>
		</div>
		<div class="portfolio portfolio-block">
			<form method="POST" action="">
				<div class="row">
					<div class="col-12 text-center">
						<div>
							<label for="input_username" class="block">Nom d'utilisateur :</label>
							<input type="text" class="input-perso" name="username" id="input_username">
						</div>
						<div class="margin-top">
							<label for="input_password" class="block">Mot de passe :</label>
							<input type="password" class="input-perso" name="password" id="input_password">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-12 text-center">
						<div>
							<?php
								if (isset($bad_password)) {
							?>
									<p class="error margin-top">
										Nom d'utilisateur ou mot de passe invalide
									</p>
							<?php
								}
								if (isset($any_words)) {
							?>
									<p class="error">
										Aucune entrée
									</p>
							<?php 
								}
							?>
						</div>
						<button class="btn btn-primary btn-size margin-top">
							CONNEXION
						</button>
						<div class="alternative">
							<a href="user_sign_up.html" class="block">Inscription</a>
							<a href="" class="block">Mot de passe oublié</a>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
	<footer>
		
	</footer>
</body>
</html>