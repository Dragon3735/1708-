<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<?php
			//创建一个连接，连接那个数据库，用户名，密码
			$conn = mysql_connect("localhost","root","root");
			
			//选择库
			mysql_select_db("kaoladeshujuku",$conn);
			
			//设置一下语言集，mysql_query就是执行sql语句的意思
			mysql_query("SET NAMES UTF8");
			
			//执行一条sql语句，sql是操作数据库的，sql语句是独立的语言
			$result = mysql_query("SELECT * FROM xuesheng");
			
			//$result很像JS中的类数组对象，但是还不是数组
//			mysql_fetcg_array这个函数就能把$result从混沌状态解析成一条一条的内容，转为数组
			while( $row = mysql_fetch_array($result) ){
				print_r($row);
				echo "<br />";
			}
	
//			关闭数据库
			mysql_close($conn);
		?>
	</body>
</html>
