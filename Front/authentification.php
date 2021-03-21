<!-- Page for redirections, normaly just to the user page or the admin page 
	admin : account_type = 1
	user : account_type = 2
-->

<?php 
	include "../API/BDD/connexionLocal.php";

	if (isset($_POST['username']) and isset($_POST['password'])){
		if ($_POST['username'] == "" and $_POST['password'] == "") {
			$any_words = 1;
		} else {
			$username = $_POST['username'];
			$password = $_POST['password'];
			$cryped_pwd  = password_hash($password,PASSWORD_DEFAULT);

			// Penser à crypter le mot de passe 
			$req = $dbh->query("SELECT account_type FROM account WHERE `login` = '$username' AND `password` = '$password'");

			if ($req->rowCount() != 0) {
				$account_type = $req->fetch()['account_type'];

				$host = $_SERVER['HTTP_HOST'];
				if ($account_type == 1) {
					header('Location: http://'.$host.'/Front/admin.html');
					exit;
				} else if ($account_type == 2) {
					header('Location: http://'.$host.'/Front/user.html');
					exit;
				}
			} else {
				$bad_password = 1;
			}
		}
	}
?>