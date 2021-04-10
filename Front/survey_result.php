<?php

	session_start();
	$host = $_SERVER['HTTP_HOST'];
	if ((!isset($_SESSION['admin'])) and (!isset($_SESSION['user']))) {
		header('Location: http://'.$host.'/Front/index.php');
		exit;
	}

	if ($_FILES['vote_list']['tmp_name'] == "") {
		header('Location: http://'.$host.'/Front/result_survey_json.php');
		exit;
	}

	// Chercher une methode pour gerer plus simplement les differents noms 
	if (!isset($_POST['average_method']) and !isset($_POST['borda_method']) and !isset($_POST['median_method'])) {
		header('Location: http://'.$host.'/Front/result_survey_json.php');
		exit;
	}

	// On the survey_creation.html page, you must put options for the user choose the different aggregation methods that he wants use
	if (isset($_POST['average_method'])){
		
		$curl = curl_init();

		$opts = [
			CURLOPT_URL => 'www.google.fr',
			CURLOPT_RETURNTRANSFER => true,
		];

		curl_setopt_array($curl, $opts);

		$response = curl_exec($curl);
		curl_close($curl);
		`http://127.0.0.1:8000/survey?json=[[{"choice": "toto", "grade": 0.94}, {"choice": "titi", "grade": 0.70}, {"choice": "tata", "grade": 0.5}],
		[{"choice": "tata", "grade": 0.91}, {"choice": "toto", "grade": 0.50}, {"choice": "titi", "grade": 0.15}],
		[{"choice": "titi", "grade": 1.0}, {"choice": "toto", "grade": 0.25}, {"choice": "tata", "grade": 0.0}],
		[{"choice": "titi", "grade": 1.0}, {"choice": "toto", "grade": 0.25}, {"choice": "tata", "grade": 0.0}]]`;
    	$raw = file_get_contents($url);
		echo $raw;
		//$survey_result = include("../API/aggregation_methods/average_method.php");
	} else if (isset($_POST['borda_method'])){
		$survey_result = include("../API/aggregation_methods/borda_method.php");
	} else if (isset($_POST['median_method'])) {
		$survey_result = include("../API/aggregation_methods/median.php");
	}

	if ($survey_result == -1) {
		// We can explain on this page the reason of the fail attempt of the user
		header('Location: http://'.$host.'/Front/result_survey_json.php');
		exit;
	}

	//$survey_result = include("../API/aggregation_methods/average_method.php");
	//print_r($survey_result);
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset='utf-8'>
	<meta http-equiv='X-UA-Compatible' content='IE=edge'>
	<title>Survey result</title>
	<meta name='viewport' content='width=device-width, initial-scale=1'>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel='stylesheet' type='text/css' media='screen' href='styles/styles.css'>
</head>
<body>
	<div class="container-fluid">
		<div class="row">
			<div class="col-12 text-center margin-top">
				<h1>
					Résultat
				</h1>
			</div>
		</div>
		<div class="row">
			<div class="col-12 text-center">
				<div class="row">
					<div class="col-12">
						<br>
						Method = <?php echo $survey_result['agregator']; ?>
						<br>
						<br>
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						Ranking : 
						<br>
						<br>
						<?php 
							for ($i = 0; $i < count($survey_result['ranking']); $i++) {
								$player = $survey_result['ranking'][$i];
								echo ($i+1). ' place = '. $player . ' | '. $survey_result["details"]["$player"][$i];
								echo "<br>";
							}
						?>
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						<br>
						<br>
						<a href="result_survey_json.php">
							<button class="btn btn-primary">
								Another Survey ?
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>

<!-- I must add a error management if the json is not valid -->