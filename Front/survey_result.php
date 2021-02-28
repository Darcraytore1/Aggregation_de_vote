<?php

	// On the survey_creation.html page, you must put options for the user choose the different aggregation methods that he wants use

	$survey_result = include("../API/aggregation_methods/average_vote.php");
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
	<link rel='stylesheet' type='text/css' media='screen' href='styles.css'>
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
						echo ($i+1). ' place = '. $player . ' with '. $survey_result["details"]["$player"]["average"]. ' average notation';
						echo "<br>";
					}
				?>
			</div>
		</div>
	</div>
</body>
</html>