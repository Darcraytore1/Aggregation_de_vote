<?php

$json = file_get_contents("format.json");
$parsed_json = json_decode($json);

$tableauResult = array();

// Le nombre de choix possibles 

$count = count($parsed_json[0]);

// Methode Condorcet



?>