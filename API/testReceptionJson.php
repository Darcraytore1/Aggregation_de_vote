<?php
// Voici ce que j'avais comme json avant le message du prof
/*
{
    "success": true,
    "message": "Votre échange c'est bien passé",
    "description": "C'est pour voter un maire",
    "vote": {
        "A": "Michel",
        "B": "Bernard"
    },
    "count":3,
    "rankingChoice": [
        {
            "number" : 30,
            "ranking": [
                "A",
                "B",
                "C"
            ]
        },
        {
            "number" : 30,
            "ranking": [
                "A",
                "B",
                "C"
            ]
        }
    ],

    "choixNote": {
        "A": 4,
        "B": 18
    }

    
},
*/

$json = file_get_contents("format.json");
$parsed_json = json_decode($json);

//$ranking_choice = $parsed_json->{'rankingChoice'};

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


// le vote alternatif 


?>

