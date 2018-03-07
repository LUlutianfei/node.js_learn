// var http = require('http');
// var server = http.createServer(function(req,res) {
// 	res.write("hello");
// 	res.end();
// }).listen(1337,'127.0.0.1');
// server.on('listening',function() {
// 	console.log('服务器端开始监听');
// 	//server.close();
// });
// server.on('connection',function(socket) {
// 	console.log('客户端链接已建立');
// })
// server.on('error',function(e) {
// 	if(e.code='EADDRINUSE') {
// 		console.log('服务器地址已经端口已被占用')
// 	}
// })
// server.on('close',function() {
// 	console.log('服务器已被关闭');
// });
// server.setTimeout(10*1000,function(socket) {
// 	console.log('服务器超时');
// 	console.log(socket);
// })




//在文件中保存客户端请求信息
// var http = require('http');
// var fs = require('fs');
// var url = require("url");
// var server = http.createServer(function(req,res) {
// 	if(req.url!=="/favicon.ico") {
// 		var out = fs.createWriteStream('./request.log');
// 		out.write('客户端请求所用方法为：'+req.method+'\r\n');
// 		out.write('客户端请求所用url字符串为：'+req.url+'\r\n');
// 		out.write('客户端请求头对象为：'+JSON.stringify(req.headers)+'\r\n');
// 		out.end('客户端请求所用http版本为：'+req.httpVersion);
// 	}
// 	res.write(url.parse(req.url).href);
// 	res.end();
// }).listen(1337,'127.0.0.1');





//data事件与end事件回调函数的使用示例
// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function(req,res) {
// 	if(req.url!=='/favicon.ico') {
// 		var out = fs.createWriteStream('./request.log');
// 		out.write('客户端请求所用方法为：'+req.method+'\r\n');
// 		out.write('客户端请求所用url字符串为：'+req.url+'\r\n');
// 		out.write('客户端请求头对象为：'+JSON.stringify(req.headers)+'\r\n');
// 		out.end('客户端请求所用http版本为：'+req.httpVersion);
// 		req.on('data',function(data) {
// 			console.log('服务器端接收到数据'+decodeURIComponent(data));
// 		});
// 		req.on('end',function() {
// 			console.log('客户端请求数据已经全部接收完毕。');
// 		});
// 	}
// 	res.write("submit success");
// 	res.end();
// }).listen(1337,'127.0.0.1');




//使用parse方法解析url地址字符串
// var http = require('http');
// var url = require('url');
// var server = http.createServer().listen(1337,'localhost');
// server.on('request',function(req,res) {
// 	if(req.url!=='favicon.ico') {
// 		res.write('<html><head><meta charset="utf-8"/></head>');
// 		var url_parts = url.parse(req.url);
// 		switch(url_parts.pathname) {
// 			case '/':
// 			case '/index.html':
// 			res.write('<body>你当前正在访问网站首页</body></html>');
// 			break;
// 			default:
// 			res.write('<body>你当前正在访问的页面为：'+url_parts.pathname+'</body></html>');

// 		}
// 	}
// 	res.end();
// });






//使用http.ServerResponse对象的writeHead方法设置响应头信息
//以及使用headersSent属性查看使用writeHead方法时响应头的发送时机
// var http = require('http');
// var server = http.createServer(function(req,res) {
// 	if(req.url!='favicon.ico') {
// 		if(res.headersSent) console.log('响应头已发送');
// 		else console.log('响应头未发送');
// 		res.writeHead(200,{'Content':'text/plain',
// 		'Access-Control-Allow-Origin':'*'});
// 		if(res.headersSent) console.log('响应头已发送');
// 		else console.log('响应头未发送');
// 		res.write('<html><head><meta charset="utf-8"/></head>');
// 		res.write("你好");
// 	}
// 	res.end();
// }).listen(1337,"localhost");






//以及使用headersSent属性查看使用setHead方法时响应头的发送时机
// var http = require('http');
// var server = http.createServer(function(req,res) {
// 	if(req.url!='/favicon.ico') {
// 		res.setHeader('Content-Type','text/html');
// 		if(res.headersSent) console.log('响应头已发送');
// 		else console.log('响应头未发送');
// 		res.write('<html><head><meta charset="utf-8"/></head>');
// 		if(res.headersSent) console.log('响应头已发送');
// 		else console.log('响应头未发送');
// 		res.write("你好");
// 	}
// 	res.end();
// }).listen(1337,"localhost");




//sendDate属性与statusCode属性的使用示例
// var http = require('http');
// var server = http.createServer(function(req,res) {
// 	if(req.url!='/favicon.ico') {
// 		res.statusCode = 404;
// 		res.sendDate = false;
// 		res.setHeader('Content-Type','text/html');
// 		res.write('<html><head><meta charset="utf-8" /></head>');
// 		res.write('你好');
// 	}
// 	res.end();
// }).listen(1337,'localhost');




//setTimeout方法使用示例
// var http = require('http');
// var server = http.createServer(function(req,res) {
// 	if(req.url!='/favicon.ico') {
// 		res.setTimeout(1000);
// 		res.on('timeout',function() {
// 			console.log('响应超时');
// 		});
// 		setTimeout(function() {
// 			res.setHeader("COntent-Type","text/html");
// 			res.write("<html><head><meta charset='utf-8' /></head>");
// 			res.write("你好");
// 			res.end();
// 		},2000)
// 	}
// }).listen(1337,'localhost');




//http.ServerResponse对象的close事件的使用示例
// var http = require('http');
// var server = http.createServer(function(req,res) {
// 	if(req.url!='/favicon.ico') {
// 		res.on('close',function(){
// 			console.log("连接中断");
// 		})
// 		setTimeout(function() {
// 			res.setHeader("COntent-Type","text/html");
// 			res.write("<html><head><meta charset='utf-8' /></head>");
// 			res.write("你好");
// 			res.end();
// 		},2000)
// 	}
// }).listen(1337,'localhost');





//使用request方法向其他网站请求数据
// var http = require('http');
// var fs = require('fs');
// var options = {
// 	hostname:'jwxt.imu.edu.cn',
// 	port:80,
// 	path:'/',
// 	method:'GET'
// };
// var req = http.request(options,function(res) {
// 	console.log('状态码：'+res.statusCode);
// 	console.log('响应头：'+JSON.stringify(res.headers));
// 	res.setEncoding('utf8');
// 	res.on('data',function(chunk) {
// 		console.log('响应内容：'+chunk);
// 		var out = fs.createWriteStream('./test/input.txt');
// 		out.write(chunk);
// 	});
// });
// req.setTimeout(1000,function() {
// 	req.abort();
// });
// req.on('error',function(err) {
// 	if(err.code === "ECONNRESET") {
// 		console.log('socket端口超时');
// 	} else {
// 		console.log('在请求数据过程中发生错误，错误代码为'+err.code);
// 	}
// });
// req.end();





//使用get方法向其他网站请求数据
// var http = require('http');
// var fs = require('fs');
// var options = {
// 	hostname:'jwxt.imu.edu.cn',
// 	port:80,
// 	path:'/',
// };
// var req = http.get(options,function(res) {
// 	console.log('状态码：'+res.statusCode);
// 	console.log('响应头：'+JSON.stringify(res.headers));
// 	res.setEncoding('utf8');
// 	res.on('data',function(chunk) {
// 		console.log('响应内容：'+chunk);
// 		var out = fs.createWriteStream('./test/input.txt');
// 		out.write(chunk);
// 	});
// });
// req.setTimeout(1000,function() {
// 	req.abort();
// });
// req.on('error',function(err) {
// 	if(err.code === "ECONNRESET") {
// 		console.log('socket端口超时');
// 	} else {
// 		console.log('在请求数据过程中发生错误，错误代码为'+err.code);
// 	}
// });





//用于接收数据的HTTP服务器
// var http = require('http');
// var server = http.createServer(function(req,res) {
// 	if(req.url !== "/favicon.ico") {
// 		req.on('data',function(data) {
// 			console.log('服务器端接受到数据'+data);
// 			res.write('确认数据'+data);
// 		});
// 		req.on('end',function() {
// 			res.addTrailers({'COntent-MD5':'7895bf4b8828b55ceaf'});
// 			res.end();
// 		})
// 	}
// }).listen(1337,"localhost");





//代理服务器制作示例，在服务器上才可正常运行
// var http = require('http');
// var url = require('url');
// var server = http.createServer(function(sreq,sres) {
// 	var url_parts = url.parse(sreq.url);
// 	var opts = {
// 		host:'www.baidu.com',
// 		port:80,
// 		path: url_parts.pathname,
// 		headers:sreq.headers
// 	};
// 	var creq = http.get(opts,function(cres) {
// 		sres.writeHead(cres.statusCode,cres.headers);
// 		cres.pipe(sres);
// 	});
// 	sreq.pipe(creq);
// });
// server.listen(1337,'localhost');







//