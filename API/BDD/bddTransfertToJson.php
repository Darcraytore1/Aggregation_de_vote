<?php
include('connexionLocal.php');

$requete = $dbh->prepare("SELECT * FROM `choix` NATURAL JOIN votes");
$requete->execute();

$result = $requete->fetchAll();

echo json_encode($result);