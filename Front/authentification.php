<!-- Page for redirections, normaly just to the user page or the admin page 
	admin : account_type = 1
	user : account_type = 2
-->

<?php 
	include "../API/BDD/connexionLocal.php";

	session_start();

	if (isset($_POST['username']) and isset($_POST['password'])){
		if ($_POST['username'] == "" and $_POST['password'] == "") {
			$any_words = 1;
		} else {
			$username = $_POST['username'];
			$password = $_POST['password'];

			// Penser à crypter le mot de passe 
			$req = $dbh->query("SELECT id_account,account_type,`password` FROM account WHERE `login` = '$username'");

			if ($req->rowCount() != 0) {
				$line = $req->fetch();
				if (!password_verify($password,$line['password'])) {
					$bad_password = 1;
				} else {
					
					$account_type = $line['account_type'];
					$_SESSION['id_account'] = $line['id_account'];

					$host = $_SERVER['HTTP_HOST'];
					if ($account_type == 1) {
						$_SESSION['admin'] = 1;
						header('Location: http://'.$host.'/Front/admin.php');
						exit;
					} else if ($account_type == 2) {
						$_SESSION['user'] = 1;
						header('Location: http://'.$host.'/Front/user.php');
						exit;
					}
				}
			} else {
				$bad_password = 1;
			}
		}
	}
?>