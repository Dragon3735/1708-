<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<?php
			$age = $_GET["age"];
			
			if( $age > 30){
				$str = "赶紧结婚吧~";
			}else{
				$str = "开心的单身~";
			}
			
			echo $str;
		?>
	</body>
</html>



