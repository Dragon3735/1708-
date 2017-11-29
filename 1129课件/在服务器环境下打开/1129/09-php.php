<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<?php	
				for($i=0;$i<100;$i++){
		?>
		
		<p><input type="<?php if($i % 5 == 0){echo 'radio';}else{echo 'text';} ?>" /></p>
		
		<?php	
				}
		?>
	</body>
</html>