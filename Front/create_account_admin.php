<?php
	include "../API/BDD/connexionLocal.php";

	$username = "Test";
	$mail = "damienalbisson@gmail.com";
	$password = "Toast";

	$password_crypted = password_hash($password,PASSWORD_DEFAULT);

	// account_type for user = 2

	$sql = "INSERT INTO `account`(`login`, `password`, `mail`, `account_type`) VALUES ('$username','$password_crypted','$mail',1)";
	$req = $dbh->prepare($sql);
	$req->execute();

	$host = $_SERVER['HTTP_HOST'];
	header('Location: http://'.$host.'/Front/');
	exit;
?>