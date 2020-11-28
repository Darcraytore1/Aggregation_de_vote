<?php
$json = file_get_contents("format.json");
$parsed_json = json_decode($json);

$choix_classement = $parsed_json->{'choixClassement'};

// Méthode condorcet 
// Un peu plus compliqué à faire plus tard 

/*
foreach ($choix_classement as $choix){
    echo $choix->number;
    foreach ($choix->positionnement as $possibilite){
        echo $possibilite;
    }
}
*/

// Méthode Bordat 

// Le nombre de choix possibles 
$count = $parsed_json->count;

$tableauResult = array();


// Voir si des tableaux associatifs ne sont pas utilisables

foreach ($choix_classement as $choix){
    foreach ($choix->positionnement as $possibilite){
        $tableauResult["$possibilite"] = 0;
    }
}

var_dump($tableauResult);


// Renvoie le tableau avec les bonnes valeurs associé, il ne reste plus qu'à faire un 
// classement avec celui qui a le plus de point comme gagnant du vote

foreach ($choix_classement as $choix){
    $count = $parsed_json->count;
    foreach ($choix->positionnement as $possibilite){
        
        $tableauResult["$possibilite"] += $count;
        $count --;
    }
}

var_dump($tableauResult);

// le vote alternatif 



