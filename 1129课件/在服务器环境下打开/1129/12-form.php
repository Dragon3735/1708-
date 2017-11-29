<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<?php
			$userName = $_GET["userName"];
			$password = $_GET["password"];
			$password1 = $_GET["password1"];
			
			
			echo "您提交的数据请核对！<br />";
			echo "用户名是{$userName}<br />";
			echo "密码是{$password}<br />";
			echo "重复密码是{$password1}<br />";
		?>
	</body>
</html>



