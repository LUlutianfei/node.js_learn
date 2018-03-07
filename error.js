// console.time('all');
// let n = 0;
// for (let i = 0; i < 1000000; i++) {
//     n += i;
// }
// console.log(n);
// console.timeEnd('all');






//使用try--catch机制尝试捕捉异步方法中抛出的错误
// var http = require('http');
// try{
// 	var server = http.createServer(function(req,res) {
// 		if(req.url!='/favicon.ico') {
// 			noneexit();//错误函数
// 			res.writeHead(200,{'COntent-Type':'text/html'});
// 			res.write('<html><head><meta charset="utf-8" /></head');
// 			res.end('你好');
// 		}
// 	}).listen(1337,'127.0.0.1');
// }
// catch(e) {
// 	console.log('接受客户端请求时发生如下错误：');
// 	console.log(e.code);
// }





//使用uncaughtException事件来捕获任何未被处理的错误
// var http = require('http');
// var server = http.createServer(function(req,res) {
// 		if(req.url!='/favicon.ico') {
// 			noneexit();//错误函数
// 			res.writeHead(200,{'COntent-Type':'text/html'});
// 			res.write('<html><head><meta charset="utf-8" /></head');
// 			res.end('你好');
// 		}
// 	}).listen(1337,'127.0.0.1');
// process.on('uncaughtException',function(err) {
// 	console.log('接收客户端请求时发生以下错误：');
// 	console.log(err);
// })







//使用domain模块来处理未被处理的错误
// var http = require('http');
// var domain = require('domain');
// http.createServer(function(req,res) {
// 	var d = domain.create();

// 	d.on('error',function(err) {
// 		res.writeHead(200,{'Content-Type':'text/html'});
// 		res.write('<head><meta charset="utf-8" /></head>');
// 		res.write('服务器接收到客户端请求时发生如下错误：');
// 		res.end(err.message);
// 	});
// 	d.run(function() {
// 		if(req.url!=='/favicon.ico') {
// 			noneexit();
// 			res.writeHead(200,{'Content-Type':'text/html'});
// 			res.write('<head><meta charset="utf-8" /></head>');
// 			res.end('你好');
// 		}
// 	});
// }).listen(1337,'127.0.0.1');







//使用Domain对象捕获错误
// var domain = require('domain');
// var fs = require('fs');
// var d = domain.create();
// d.name = 'd1';
// d.on('error',function(err) {
// 	console.log('%s捕获到错误！',d.name,err);
// });
// d.run(function(){
// 	process.nextTick(function() {
// 		setTimeout(function() {
// 			fs.open('noe file','r',function(err,fd) {
// 				if(err) throw err;
// 			});
// 		},1000);
// 	});
// });






//Domain对象的add方法的使用示例
//提交请求的代码在client.js文件中
// var http = require('http');
// var domain = require('domain');
// http.createServer(function(req,res) {
// 	var reqd = domain.create();
// 	reqd.add(req);
// 	reqd.add(res);
// 	reqd.on('error',function(err) {
// 		res.writeHead(200);
// 		res.write('服务器接收到客户端请求时发生如下错误：');
// 		res.end(err.message);
// 	});
// 	res.writeHead(200);
// 	req.on('data',function(data) {
// 		//noneexit();
// 		console.log('接受到客户端的数据'+data.toString());
// 		res.write('你好');
// 		res.end();
// 	});
// }).listen(1337,'127.0.0.1');






//bind方法的使用示例
// var fs = require('fs');
// var domain = require('domain');
// var d = domain.create();
// fs.readFile('./test.txt',d.bind(function(err,data) {
// 	if(err) throw err;
// 	else console.log(data);
// }));
// d.on('error',function(err) {
// 	console.log('发生以下错误：');
// 	console.log(err);
// });





//intercept方法的使用示例
// var fs = require('fs');
// var domain = require('domain');
// var d = domain.create();
// fs.readFile('./test.txt',d.intercept(function(err,data) {
// 	//if(err) throw err;与bind方法相比，不需要抛出错误，会自动拦截
// 	console.log(data);
// }));
// d.on('error',function(err) {
// 	console.log('发生以下错误：');
// 	console.log(err);
// });




//观察domain堆栈中的内容
// var domain = require('domain');
// var d1 = domain.create();
// d1.name = 'd1';
// var d2 = domain.create();
// d2.name = 'd2';
// console.log('原始堆栈');
// console.log(domain._stack);
// d1.run(function() {
// 	console.log('d1对象');
// 	console.log(d1);
// 	console.log('运行d1对象后的内容');
// 	console.log(domain._stack);
// });
// d2.run(function() {
// 	console.log('d2对象');
// 	console.log(d2);
// 	console.log('运行d2对象后的内容');
// 	console.log(domain._stack);
// });





