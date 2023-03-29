<?php
	include('connection.php');
	
	//Funcion que cuenta los estados que se encuentran registrados en la base de datos
	function search_user($username){
		global $pdo;

		$sql = "SELECT * FROM usuarios WHERE username='$username'";
		$statement = $pdo->prepare($sql);
		$statement->execute();
		$results=$statement->fetchAll();

		return $results;
	}
?>

