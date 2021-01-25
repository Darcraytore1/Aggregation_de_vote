<?php

header('Content-Type: application/json');

function get_surveys(){
	include("../BDD/connexionLocal.php");
	$sql = "SELECT * FROM votes";
	$result = $dbh->query($sql)->fetchAll();
	$survey = array();
	$survey['surveys'] = $result;
	return $survey;
}

print_r (get_surveys());
//echo json_encode(get_surveys());


?>