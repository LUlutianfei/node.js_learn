//创建Socket.Io服务器
// var http = require('http');
// var sio = require('socket.io');
// var fs = require('fs');
// var server = http.createServer(function(req,res) {
// 	res.writeHead(200,{'Content-type':'text/html'});
// 	res.end(fs.readFileSync('./index.html'));
// });
// server.listen(1337);
// var socket = sio.listen(server);
// socket.on('connection',function(socket) {
// 	console.log('客户端建立连接');
// 	socket.send('你好');
// 	socket.on('message',function(msg) {
// 		console.log('接受到一个消息：',msg.toString());
// 	});
// 	socket.on('disconnect',function() {
// 		console.log('断开连接');
// 	})
// })






//在服务器端与客户端之间相互发送事件
// var http = require('http');
// var sio = require('socket.io');
// var fs = require('fs');
// var server = http.createServer(function(req,res) {
// 	res.writeHead(200,{'Content-type':'text/html'});
//  	res.end(fs.readFileSync('./index.html'));
// });
// server.listen(1337);
// var socket = sio.listen(server);
// socket.on('connection',function(socket) {
// 	socket.emit('news',{hello:'你好'});
// 	socket.on('my other event',function(data) {
// 		console.log('服务器端接受到数据：%j',data);
// 	})
// })







//在发送事件时指定回调函数
// var http = require('http');
// var sio = require('socket.io');
// var fs = require('fs');
// var server = http.createServer(function(req,res) {
// 	res.writeHead(200,{'Content-type':'text/html'});
//  	res.end(fs.readFileSync('./index.html'));
// });
// server.listen(1337);
// var socket = sio.listen(server);
// socket.on('connection',function(socket) {
// 	socket.emit('setName','张三',function(data1,data2) {
// 		console.log(data1);
// 		console.log(data2);
// 	});
// })








//在Express框架中使用Socket.Io类库
// var http = require('http');
// var fs = require('fs');
// var sio = require('socket.io');
// var express = require('express');
// var app =express();
// var server = http.createServer(app);
// app.get('/',function(req,res) {
// 	res.sendFile(__dirname+'/index.html');
// });
// server.listen(1337);
// var socket = sio.listen(server);
// socket.on('connection',function(socket) {
// 	socket.emit('news',{hello:'你好'});
// 	socket.on('my other event',function(data) {
// 		console.log('服务器端收到数据:%j',data);
// 	})
// })







//向所有客户端广播消息
// var http = require('http');
// var express = require('express');
// var sio = require('socket.io');

// var app = express();
// var server = http.createServer(app);
// app.get('/',function(req,res) {
// 	res.sendFile(__dirname+'/index.html');
// });
// server.listen(1337);
// var io = sio.listen(server);
// var names = [];
// io.sockets.on('connection',function(socket) {
// 	socket.emit('login',names);
// 	socket.on('login', function(name) {
// 		names.push(name);
// 		io.sockets.emit('login',names);
// 	})
// })





//命名空间的定义示例
var http = require('http');
var sio = require('socket.io');
var express = require('express');
var app = express();
var server = http.createServer(app);
app.get('/',function(req,res) {
	res.sendFile(__dirname+'/index.html');
})
server.listen(80);
var io = sio.listen(server);
var chat = io.of('/chat').on('connection',function(socket) {
	socket.send('欢迎访问chat空间');
	socket.on('message',function(msg) {
		console.log('chat命名空间接收到信息：',msg);
	});
});
var news = io.of('/news').on('connection',function(socket) {
	socket.send('欢迎访问news空间');
	socket.on('message',function(msg) {
		console.log('news命名空间接收到信息：',msg);
	});
});
