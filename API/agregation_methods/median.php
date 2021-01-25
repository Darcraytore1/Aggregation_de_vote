<?php

// méthode par moyenne de note

header('Content-Type: application/json');

$json = file_get_contents("format.json");
$parsed_json = json_decode($json);

$tableauResult = array();

// Voir si des tableaux associatifs ne sont pas utilisables

foreach ($parsed_json as $vote){
    foreach ($vote as $choix){
        $tableauResult["$choix->choice"] = array();
    }
}


// Calcule le nombre de choix 

$count = count($parsed_json);


// médiane des notes

// Mets toutes les notes dans un tableau associé à chaque choix

foreach ($parsed_json as $vote){
    foreach ($vote as $choix){
        array_push($tableauResult["$choix->choice"],$choix->grade);
    }
}

// Trie les tableaux notes par ordre croissant

foreach ($tableauResult as $key => $value){
	sort($tableauResult[$key]);
}

// Si $count n'est pas pair choisir le (n + 1)/2 elem 
// Sinon faire la moyenne des deux elems du milieu

if ($count % 2 == 0 ){
	$num = ($count / 2) - 1;
	foreach ($tableauResult as $key => $value) {
		$median = ($tableauResult[$key][$num] + $tableauResult[$key][$num+1]) / 2;
		$tableauResult[$key] = $median;
	}
} else {
	$numSelectedElem = (($count + 1) / 2) - 1;
	foreach ($tableauResult as $key => $value){
		$tableauResult[$key] = $tableauResult[$key][$numSelectedElem];
	}
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

foreach ($tableauResult as $key => $value){
    $tableauResult[$key] = array("median" => $value);
}

// Création du format de rendu en json

$result = array();
$result['agregator'] = "grade-median";
$result['details'] = $tableauResult;
$result['ranking'] = $ranking;

//print json_encode($result);
return $result;
?>

