var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send("我是游戏相关的接口！");
});

router.get('/lol', function(req, res) {
  res.send("我是lol游戏相关的接口！");
});

router.post('/', function(req, res){
	res.send("post接口！");
})

router.put('/up', function(req, res){
	res.send("put接口！");
})

router.delete('/up', function(req, res){
	res.send("delete接口！");
})

module.exports = router;