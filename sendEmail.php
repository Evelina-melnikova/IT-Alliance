<?php

$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;
if ( $method === 'POST' ) {

	$project_name = trim($_POST["project_name"]);
	$admin_email  = trim($_POST["admin_email"]);

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email") {
			$message .= "
			" . ( ($c = !$c) ? '':'' ) . "
				$key
				$value
			";
		}
	}
} else if ( $method === 'GET' ) {

	$project_name = trim($_GET["project_name"]);
	$admin_email  = trim($_GET["admin_email"]);

	foreach ( $_GET as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" ) {
			$message .= "
			" . ( ($c = !$c) ? '':'' ) . "
				$key
				$value
			";
		}
	}
}

$message = "$message";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, $message, $headers );