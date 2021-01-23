<?php 
include("../BDD/connexionLocal.php");

// Test bdd
/*
$request =  $dbh->query("SELECT * FROM votes");
$result = $request->fetchAll();
print_r($result);
*/

/*Cela doit remplir deux choses, une ligne pour le vote associé 
donc posséder une description et un nom. */

// Possibilité d'augmenter la sécurité comparé au nombre de caractères

if ($_POST['name'] != "" and $_POST['description'] != "") {
	$name = $_POST['name'];
	$description = $_POST['description'];
} else {
	// return error (invalidParameter)
}

/* Cela doit également posséder des choix pour ce vote, si il y a moins
de trois choix ce vote est invalide et doit renvoyer une erreur */

// Vérifier si il y a bien trois choix et qu'ils sont bien set
// return error (invalidParameter) or (inferiorTo3Choices)


// Si tout est bon on peut ajouter les infos dans la bdd

$sql = 'INSERT INTO `votes`(`name`, `description`) VALUES ("test","toast")';
$stmt = $dbh->prepare($sql);
$stmt->execute();

// return un message de réussite

?>