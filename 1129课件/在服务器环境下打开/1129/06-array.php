<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<?php	
			$a = array("哈哈","嘻嘻","呵呵","思密达");
		?>
		
		<ul>
			<?php	
				for($i = 0; $i < count($a); $i++ ){
					echo "<li>" . $a[$i] . "</li>";
				}
			?>
		</ul>
		
		
	</body>
</html>