<?php
	
	$str = "hello world";
	
	echo md5($str);
	
	echo "<br />";
	
	echo md5(md5($str));
?>