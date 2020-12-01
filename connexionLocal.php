<?php
$host="localhost";
$user="root";
$pass="";
$db="aggregation_de_vote";
try {
	$con = 'mysql:host='.$host.';dbname='.$db;
	$dbh = new PDO($con, $user, $pass,array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION)); 
} 
catch(PDOException $e) {
	die('Connexion impossible à la base de données !'.$e->getMessage());
}
?> 