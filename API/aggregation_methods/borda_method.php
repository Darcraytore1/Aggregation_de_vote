<?php
// Méthode Bordat 

//header('Content-Type: application/json');

$file_path = $_FILES['vote_list']['tmp_name'];
$json = file_get_contents("$file_path");
$parsed_json = json_decode($json);

// Le nombre de choix possibles 

$count = count($parsed_json[0]);


$tableauResult = array();

// Voir si des tableaux associatifs ne sont pas utilisables

foreach ($parsed_json as $vote){
    foreach ($vote as $choix){
        $tableauResult["$choix->choice"] = 0;
    }
}


$tmpCount = $count;
foreach ($parsed_json as $vote){
    $tmpCount = $count;
    foreach ($vote as $choix){
        $tableauResult["$choix->choice"] += $tmpCount;
        $tmpCount --;
    }
}

arsort($tableauResult);

$ranking = [];
$i = 0;
foreach ($tableauResult as $key => $value){
    $ranking[$i] = $key;
    $i ++;
}

$i = 0;
foreach ($tableauResult as $key => $value){
    $tableauResult[$key] = array($i => $value);
	$i ++;
}

//var_dump($tableauResult);

$result = array();
$result['agregator'] = "bordat-method";
$result['details'] = $tableauResult;
$result['ranking'] = $ranking;

//return json_encode($result);
return $result;
?>