<?php
	include "../API/BDD/connexionLocal.php";

	$username = $_POST['username'];
	$mail = $_POST['mail'];
	$password = $_POST['password'];

	$password_crypted = password_hash($password,PASSWORD_DEFAULT);

	// account_type for user = 2

	$sql = "INSERT INTO `account`(`login`, `password`, `mail`, `account_type`) VALUES ('$username','$password_crypted','$mail',2)";
	$req = $dbh->prepare($sql);
	$req->execute();
?>