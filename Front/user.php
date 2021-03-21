<?php
	session_start();
	$host = $_SERVER['HTTP_HOST'];
	if (!isset($_SESSION['user'])) {
		header('Location: http://'.$host.'/Front/index.php');
		exit;
	}
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset='utf-8'>
	<meta http-equiv='X-UA-Compatible' content='IE=edge'>
	<title>User</title>
	<meta name='viewport' content='width=device-width, initial-scale=1'>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel='stylesheet' type='text/css' media='screen' href='styles/styles.css'>
</head>
<body>
	<div class="mid-header">
		<div class="container">
			<nav id="site-navigation" class="main-navigation" role="navigation">
				<ul>
					<a href="info.html">
						INFO
					</a>
					<a href="">
						VOTE
					</a>
				</ul>
			</nav>
		</div>
	</div>
</body>
</html>