<?php 
include("../BDD/connexionLocal.php");

// Type of request in survey_creation_request

$json = file_get_contents("survey_creation_request.json");
$parsed_json = json_decode($json,true);

/*Cela doit remplir deux choses, une ligne pour le vote associé 
donc posséder une description et un nom. */

// Possibilité d'augmenter la sécurité comparé au nombre de caractères

if ($parsed_json['name'] != "" and $parsed_json['description'] != "") {
	$id_account = $parsed_json['id_account'];
	$name = $parsed_json['name'];
	$description = $parsed_json['description'];
} else {
	// return error (invalidParameter)
}

/* Cela doit également posséder des choix pour ce vote, si il y a moins
de trois choix ce vote est invalide et doit renvoyer une erreur */

// Vérifier si il y a bien trois choix et qu'ils sont bien set
// return error (invalidParameter) or (inferiorTo3Choices)

$choices = $parsed_json['choices'];

if (count($choices) < 3){
	// return error inferiorTo3Choices
}

foreach ($choices as $choice){
	if ($choice == ""){
		// return error invalidParameter
	}
}

// Si tout est bon on peut ajouter les infos dans la bdd

$sql = 'INSERT INTO `survey`(`id_account`,`name`, `description`) VALUES ('.$id_account.',"'.$name.'","'.$description.'")';
$stmt = $dbh->prepare($sql);
$stmt->execute();

// Problem how to know the id_votes of this vote, because few votes can have the name and description
$sql = 'SELECT id_choice FROM choice WHERE name = "'.$name.'" AND description = "'.$description.'"';
$stmt = $dbh->query($sql)->fetch();
$id_vote = $stmt['id_choice'];
foreach ($choices as $choice){
	$dbh->prepare('INSERT INTO choice(`id_survey`,`name`) VALUES ('.$id_vote.',"'.$choice.')')->execute();
}

// return un message de réussite

?>