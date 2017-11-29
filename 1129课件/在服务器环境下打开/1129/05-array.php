<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<?php	
			
			$a = array("东","南","西","北");
			
			//打印数组全貌
//			print_r($a);
			//打印数组详细全貌
//			var_dump($a);
			
			//让print_r展示的数组更加清楚
			echo "<pre>";
			print_r($a);
			echo "</pre>";
			
			echo "<br />";
			
			
			//数组长度
			echo count($a);
			
			//有了数组长度，有for循环，遍历数组
			echo "<ul>";
				
			for($i = 0;$i<count($a);$i++){
				echo "<li>
						<h3>{$i}</h3>
						<span>{$a[$i]}</span>
					  </li>";
			}
				
			echo "</ul>";
			
		?>
	</body>
</html>