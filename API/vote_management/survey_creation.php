<?php 
include("../BDD/connexionLocal.php");

// Type of request : 
/*

*/

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


if (count($choices) >= 3){

} else {
	// return error inferiorTo3Choices
}

foreach ($choices as $choice){
	if ($choice == ""){
		// return error invalidParameter
	}
}

// Si tout est bon on peut ajouter les infos dans la bdd

$sql = 'INSERT INTO `votes`(`name`, `description`) VALUES ('.$name.','.$description.')';
$stmt = $dbh->prepare($sql);
$stmt->execute();

// Problem how to know the id_votes of this vote, because few votes can have the name and description
$sql = 'SELECT id_votes FROM votes WHERE name = "'.$name.'" AND description = "'.$description.'"';
$stmt = $dbh->query($sql)->fetch();
$id_vote = $stmt['id_votes'];
foreach ($choices as $choice){
	$dbh->prepare('INSERT INTO choix(`id_votes`,`name`,`number`) VALUES ('.$id_vote.','.$choice.',0)')->execute();
}

// return un message de réussite

?>