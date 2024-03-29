<?php

// méthode par moyenne de note

//header('Content-Type: application/json');

$file_path = $_FILES['vote_list']['tmp_name'];

// It's not a very good idea to pass by the name of the file, and even I don't know how to manage the errors with one API
$name_file = $_FILES['vote_list']['name'];
if ((new SplFileInfo($name_file))->getExtension() != "json") {
	return -1;
}

$json = file_get_contents("$file_path");
$parsed_json = json_decode($json);

$tableauResult = array();

// Voir si des tableaux associatifs ne sont pas utilisables

foreach ($parsed_json as $vote){
    foreach ($vote as $choix){
        $tableauResult["$choix->choice"] = 0;
    }
}


// Calcule le nombre de choix 

$count = count($parsed_json);


// moyenne des notes

// Additionne chacune des notes des choix 

foreach ($parsed_json as $vote){
    foreach ($vote as $choix){
        $tableauResult["$choix->choice"] += $choix->grade;
    }
}

// Divise par le nombre de vote

foreach ($tableauResult as $i => $value){
    $tableauResult[$i] /= $count;
}


// Fonction de triage de tableau par ordre décroissant

arsort($tableauResult);

// Création de la liste qui donne le ranking des choix

$ranking = [];
$i = 0;
foreach ($tableauResult as $key => $value){
    $ranking[$i] = $key;
    $i ++;
}

// J'essaie de coller à l'exemple donné par le prof
$i = 0;
foreach ($tableauResult as $key => $value){
    $tableauResult[$key] = array($i => $value);
	$i ++;
}

// Création du format de rendu en json

$result = array();
$result['agregator'] = "grade-average";
$result['details'] = $tableauResult;
$result['ranking'] = $ranking;

//return json_encode($result);
return $result;
?>

