<?php

	session_start();
	$host = $_SERVER['HTTP_HOST'];
	if ((!isset($_SESSION['admin'])) and (!isset($_SESSION['user']))) {
		header('Location: http://'.$host.'/Front/index.php');
		exit;
	}

	// On the survey_creation.html page, you must put options for the user choose the different aggregation methods that he wants use
	if (isset($_POST['average_method'])){
		$survey_result = include("../API/aggregation_methods/average_method.php");
	} else if (isset($_POST['borda_method'])){
		$survey_result = include("../API/aggregation_methods/borda_method.php");
	} else if (isset($_POST['median_method'])) {
		$survey_result = include("../API/aggregation_methods/median.php");
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
	<div class="container">
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
				<a href="survey_creation.html">
					<button class="btn btn-primary">
						Another Survey ?
					</button>
				</a>
			</div>
		</div>
	</div>
</body>
</html>

<!-- I must add a error management if the json is not valid -->