<?php

header('Content-Type: application/json');

$all_methods = array();

$borda = include("borda_method.php");
$average = include("average_method.php");
$median = include("median.php");

$all_methods[0] = $borda;
$all_methods[1] = $average;
$all_methods[2] = $median;

echo json_encode($all_methods);
?>