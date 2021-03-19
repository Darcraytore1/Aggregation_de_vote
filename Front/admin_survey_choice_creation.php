<!DOCTYPE html>
<html>
<head>
	<meta charset='utf-8'>
	<meta http-equiv='X-UA-Compatible' content='IE=edge'>
	<title>Choice creation</title>
	<meta name='viewport' content='width=device-width, initial-scale=1'>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel='stylesheet' type='text/css' media='screen' href='styles/styles.css'>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-12 text-center">
				<h1>
					Choice creation
				</h1>
				<br>
				<h3>
				<?php
					$survey_name = $_GET['survey_name'];
					$survey_description = $_GET['survey_description'];

					echo $survey_name;
				?>
				</h3>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<br>
				Choice :
				<input type="text" id="inputChoice">
				<button class="btn btn-primary" id="add">
					ADD
				</button>
				<br>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<p id="choiceNumber">
					Number of choice : 
				</p>
				<p id="choiceList">
					Choice list : 
				</p>
				<input list="choices" class="hidden" name="survey_choices">
				<datalist id="choices">
					
				</datalist>
			</div>
		</div>
	</div>
	<script src="scripts/survey_creation.js"></script>
</body>
</html>