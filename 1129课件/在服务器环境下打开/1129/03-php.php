<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<?php	
			$a = 300;
			
			//php作用域
			function fun(){
				
				global $a; //需要用一个关键字，把变量导入让下面输出echo 可以得到
				
				echo $a;  //这里找不到$a变量
			}
			
			fun();
			
		?>
		
	</body>
</html>