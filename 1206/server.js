//导入模块
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken'); // 用来创建和确认用户信息

//导入config
var config = require('./config');

//导入路由文件
var categoryRouter = require('./app/routes/category');
var userRouter = require('./app/routes/user');
var loginRouter = require('./app/routes/login');
var blogRouter = require('./app/routes/blog');

//配置文件
var port = process.env.PORT || 8080; //设置端口，如果你不传递端口，那么8080
mongoose.connect(config.database); //连接数据库

//用body parser 来解析post和url信息中的参数
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// 使用 morgan 将请求日志打印到控制台
app.use(morgan('dev'));


//外部路由设置
app.use('/category',categoryRouter);
app.use('/user',userRouter);
app.use('/login',loginRouter);
app.use('/blog',blogRouter);


app.listen(port);
console.log('正常启动了~');