<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			table,tr,td{
				border: 1px solid red;
			}
			td{
				width: 120px;
				height: 120px;
			}
			.orange{
				background: orange;
			}
		</style>
	</head>
	<body>
		<!--<table>
			<?php	
				for($i = 0;$i < 20; $i++){
			?>
			
			<tr <?php if($i  % 2 == 0){echo "class='orange'";} ?> >
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			
			
			<?php	
				}
			?>
		</table>-->
		
		
		<?php
			echo "<table>";
				
			for($i=0;$i<10;$i++){
				$class = '';
				if($i % 2 == 0){
					$class = "orange";
				}
			echo "<tr class={$class}>
					<td>world</td>
					<td>world</td>
					<td>world</td>
					<td>world</td>
					<td>world</td>
					<td>world</td>
					<td>world</td>
				</tr>";
				
			}
				
			echo "</table>";
			
		?>
		
		
	</body>
</html>