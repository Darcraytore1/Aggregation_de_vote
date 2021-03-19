<?php
	include "../API/BDD/connexionLocal.php";

	$survey_name = $_GET['survey_name'];
	$survey_description = $_GET['survey_description'];
	$survey_choices = $_GET['survey_choices'];
	$id_account = 1;

	print_r($survey_choices);
	// We must know the id of the account who create this survey, for the moment I put a default value

	$stmt = $dbh->prepare("INSERT INTO survey(`id_account`,`name`,`description`) VALUES ($id_account,'$survey_name','$survey_description')");
 	$stmt->execute();

	$req = $dbh->query("SELECT id_survey FROM survey WHERE id_account = $id_account AND `name` = 'survey_name'");
	
	/*
	foreach ($survey_choices as &$choice) {
		$req = $dbh->prepare("INSERT INTO choice(`id_survey`,`name`) VALUES (?,$choice)");
		$req->execute();
	}
	*/
?>