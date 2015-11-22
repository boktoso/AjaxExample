<?php
	$choice = $_GET["first"];
	switch($choice){
		case "first":
		echo '["1st", "Place", "Number One"]';
			break;
		case "second":
			echo '["Place", "Amendment", "Chance"]';
			break;
		case "third":
			echo '["Movement", "Gear", "Ring"]';
			break;
		default:
			echo "[]";
			break;
	}
?>
