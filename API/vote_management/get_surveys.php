<?php

header('Content-Type: application/json');

function get_surveys(){
	include("../BDD/connexionLocal.php");
	$sql = "SELECT * FROM survey";
	$result = $dbh->query($sql)->fetchAll();

	$surveys = array();
	$i = 0;
	foreach ($result as $survey){
		// survey infos
		$surveys[$i]['id_survey'] = $survey['id_survey'];
		$surveys[$i]['name'] = $survey['name'];
		$surveys[$i]['description'] = $survey['description'];

		// choices infos
		$sql = "SELECT `name` FROM choice WHERE id_survey = 2";
		$choices = $dbh->query($sql)->fetchAll();
		print_r($choices);
		$surveys[$i]["choices"] = array();
		//$surveys[$i]["choices"] = $choices;
		$i ++;
	}
	return $survey;
}

print_r (get_surveys());
//echo json_encode(get_surveys());


?>