//一个简单的express示例应用程序
// var express = require('express');
// var http = require('http');
// var app = express();
// app.get('/index.html',function(req,res) {
// 	res.writeHead(200,{'Content-Type':'text/html'});
// 	res.write('<head><meta charset="utf-8"/></head>');
// 	res.end('你好index\n');
// });
// //send方法的使用示例
// app.get('/send',function(req,res) {
// 	res.send('你好send')
// })
// app.listen(1337,"127.0.0.1");





//在路由中使用参数
// var express = require('express');
// var http = require('http');
// var app = express();
// app.get('/index/:id?/:name?',function(req,res) {
// 	var str='';
// 	for(key in req.params) {
// 		if(str!='') str+="<br/>";
// 		str+="参数名："+key;
// 		str+=String.fromCharCode(9)+'参数值:'+req.params[key];
// 	}
// 	res.send(str);
// });
// app.get('/a*',function(req,res) {
// 	var str='';
// 	for(key in req.params) {
// 		if(str!='') str+="<br/>";
// 		str+="参数名："+key;
// 		str+=String.fromCharCode(9)+'参数值:'+req.params[key];
// 	}
// 	res.send(str);
// });
// app.listen(1337,'127.0.0.1');





//next方法的使用示例
// var express = require('express');
// var http = require('http');
// var app = express();
// app.get('/index/:id(\\d+)',function(req,res,next) {
// 	if(req.params.id>10)
// 		next();
// 	else
// 		res.send('id参数值必须大于10');
// });
// app.get('/index/:id(\\d+)',function(req,res) {
// 	res.send('你好'+req.params.id);
// });
// app.listen(1337,'127.0.0.1');





//post方法使用示例
//打开127.0.0.1:1337/index.html
// var express = require('express');
// var fs = require('fs');
// var querystring = require('querystring');
// var app =express();
// var mysql = require('mysql');
// var pool = mysql.createPool({
// 	host:'localhost',
// 	port:3306,
// 	database:'mysql',
// 	user:'root',
// 	password:'@lulu022351'
// });
// app.get('/index.html',function(req,res) {
// 	// res.writeHead(200,{'Content-Type':'text/html'});
// 	// res.write('<head><meta charset="utf-8"/><title>使用post方法向服务器端提交数据</title></head>');
// 	// var file = fs.createReadStream('index.html');
// 	// file.pipe(res);
// 	res.sendFile(__dirname+'/index.html');
// });
// app.post('/index.html',function(req,res) {
// 	req.on('data',function(data) {
// 		var obj = querystring.parse(data.toString());
// 		pool.getConnection(function(err,connection) {
// 			if(err) console.log('fail');
// 			else {
// 				var str;
// 				connection.query('INSERT INTO users SET ?',
// 					{username:obj.username,firstname:obj.firstname},
// 					function(err,result) {
// 						if(err) str = '插入数据失败';
// 						else str = '成功';
// 						connection.release();
// 						res.send(str);
// 					})
// 			}
// 		})
// 	})
// })
// app.listen(1337);






//put方法的使用示例
// var express = require('express');
// var fs = require('fs');
// var app =express();
// var mysql = require('mysql');
// var pool = mysql.createPool({
// 	host:'localhost',
// 	port:3306,
// 	database:'mysql',
// 	user:'root',
// 	password:'@lulu022351'
// });
// app.get('/index',function(req,res) {
// 	res.sendFile(__dirname+'/index.html');
// });
// app.put('/index',function(req,res) {
// 	req.on('data',function(data) {
// 		var obj = JSON.parse(data.toString());
// 		pool.getConnection(function(err,connection) {
// 			if(err) res.send('fail');
// 			else {
// 				var str;
// 				connection.query('insert into users set ?',
// 					{useiirname:obj.username,firstname:obj.firstname},
// 					function(err,result) {
// 						if(err) str = 'fail2';
// 						else str = 'success';
// 						connection.release();
// 						res.send(str);
// 					})
// 			}
// 		})
// 	})
// })
// app.listen(1337);







//static中间件可以使客户端直接访问网站中的所有静态文件
//static中间件的使用示例
// var express = require('express');
// var app = express();
// var mysql = require('mysql');
// var pool = mysql.createPool({
// 	host:'localhost',
// 	port:3306,
// 	database:'mysql',
// 	user:'root',
// 	password:'@lulu022351'
// });
// app.use(express.static(__dirname));
// app.post('/',function(req,res) {
// 	req.on('data',function(data) {
// 		var obj = JSON.parse(data.toString());
// 		pool.getConnection(function(err,connection) {
// 			if(err) console.log('fail');
// 			else {
// 				var str;
// 				connection.query('insert into users set ?',
// 					{username:obj.username,firstname:obj.firstname},
// 					function(err,result) {
// 						if(err) str = 'fail';
// 						else str = 'success';
// 						connection.release();
// 						res.send(str);
// 					})
// 			}
// 		})
// 	})
// })
// app.listen(1337);




//ejs模板引擎应用示例
var express = require('express');
var routes = require('./routes');
var app =express();
app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));
app.get('/',routes.index);
app.get('/form',routes.form);
app.get('/create',routes.create);
app.listen(1337);