<?php

header('Content-Type: application/json');

$json = file_get_contents("format.json");
$parsed_json = json_decode($json);

$tableauResult = array();

// Le nombre de choix possibles 

$count = count($parsed_json[0]);

// Methode Condorcet

// A contre B 
// On pacourt le tableau pour récupérer combien de fois on été faite chaque composition de vote
$i = 0;

foreach ($parsed_json as $vote){
    $array = array();
    foreach ($vote as $choix){
        array_push($array,$choix->choice);
    }
    $tableauResult[$i]['composition'] = $array;
    $tableauResult[$i]['voteNbr'] = 1;
    $i ++;
}



print_r($tableauResult);

?>