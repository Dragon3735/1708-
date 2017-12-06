var express = require("express");
var router = express.Router();
var Blog = require('../models/blog');  //博客数据模型

//发布博客
router.post('/',function(req,res){
	//解构赋值
	var {title,body,author,tags,hidden,category} = req.body;
	
//	console.log(title,body,author,tags,hidden,category);
	
	if(title.length < 3){
		res.json({
			success: false,
			message: "标题长度不能小于3"
		})
	}
	
	//tags标签 格式应该是对象数组
	//把标签内容分割数组格式 node,angular,js  =》 ["node","angular","js"]
	var tagsArray = tags.split(',');
	
	//新建一个空数组，用来放对象
	var tagsObjArray = [];
	
	//通过遍历方式，把标签内容放入对象里面，通过push方式放入数组
	tagsArray.forEach(function(v){
		tagsObjArray.push( {title: v } );
//		循环中{title: node }{title: angular }{title: js }
	})
	
//	console.log(tagsObjArray);
	
	//生成实例
	var blog = new Blog({
		title: title,
		body: body,
		author: author,
		tags: tagsObjArray,
		hidden: hidden,
		category: category
	})
	//存储到数据库
	blog.save(function(err){
		if(err){
			res.json({
				success: false,
				message: "博文发布失败！"
			})
		}
		
		res.json({
				success: false,
				message: "博文发布成~！"
			})
	})
	
})

//查询博客内容
router.get('/',function(req,res){
	
	//根据分类查找
	var {category} = req.query;
	
	var whereObj = {};  //如果没有传递数据，条件为空json
	
	//通过get传递category分类数据的时候触发
	if(category){
		var re = new RegExp('^'+ category +'$'); //用这方式写正则可以拼接字符串
		whereObj = { category: re }
	}
	
	Blog.find(whereObj,function(err,result){
		if(err){
			res.json({
				success: false,
				message: "查询博文失败！"
			})
		}
		//可以通过result里面data的长度判断数据有没有获取到！
		res.json({
				success: true,
				data: result
			})
	})
})

//删除博客内容
router.delete('/',function(req,res){
	
//	通过title删除
	
})


module.exports = router;