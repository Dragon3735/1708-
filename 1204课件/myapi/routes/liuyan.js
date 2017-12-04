var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password: 'root',
	database : 'myapi'
})
connection.connect();

router.get('/', function(req, res, next) {
	
	connection.query("SELECT * FROM liuyan",function(error,result){
		
		res.send({
			code: 0,
			message: "所有留言信息",
			data: result
		})
	})
	
	
});
router.get('/remove',function(req,res){
	
	console.log(req.query.userid);
	
//	DELETE FROM `liuyan` WHERE  userid=2
	connection.query("DELETE FROM `liuyan` WHERE  userid=" +req.query.userid ,function(error,result){
		
		res.send({
			code: 0,
			message: "删除成功"
		})
		
	})
	
})
router.get('/add', function(req, res, next) {
	console.log(req.query);
	
	
//	"INSERT INTO `liuyan`(`userid`, `title`, `content`) VALUES (NULL,'" +req.query.title+ "','" +req.query.content+ "')"
	connection.query("INSERT INTO `liuyan`(`userid`, `title`, `content`) VALUES (NULL,'" +req.query.title+ "','" +req.query.content+ "')",function(error,result){
		
		res.send({
			code: 0,
			message: "留言成功",
			data: result
		})
		
	})
	
	
});

module.exports = router;
