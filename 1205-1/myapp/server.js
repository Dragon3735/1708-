//导入模块
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken'); // 用来创建和确认用户信息

//导入config和User的内容
var config = require('./config');
var User = require('./app/models/user');

//配置文件
var port = process.env.PORT || 8080; //设置端口，如果你不传递端口，那么8080
mongoose.connect(config.database); //连接数据库
app.set('superSecret',config.secret);  //设置app的超级密码--用来加密生成token

//用body parser 来解析post和url信息中的参数
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// 使用 morgan 将请求日志打印到控制台
app.use(morgan('dev'));


//路由
//================

app.get('/',function(req,res){
	res.send('我是基础路由的内容！');
})

app.get('/setup',function(req,res){
	
	var nick = new User({
		name: '鹏涛',
		password: 'pt123456',
		admin: true
	});
	
	nick.save(function(err){
		if(err) throw err;
		
		console.log('数据存入！请查收~');
		res.json({success: true});
	});
	
});
//================
//API路由
var router = express.Router();

router.get('/',function(req,res){
	res.json({message:"天气很冷！多加衣服~~"});
})

router.get('/users',function(req,res){
	
	User.find({},function(err,result){
		res.json(result);
	})
	
})

//应用router，前缀加上/api
app.use('/api',router);

//================

app.listen(port);
console.log('正常启动了~');