var http = require("http");
http.createServer(function(request,response){
	response.writeHead(200,{'Content_Type':'text/plain'});
	response.write('<div style=" width:100px; height:100px; background:#ff0000; " >dfbdb</div>')
	response.end('hello\n');
}).listen(8888);
console.log("Server running at http://127.0.0.1:8888/");



// //引入events模块
// var events = require('events');
// //创建eventEmitter对象
// var eventEmitter = new events.EventEmitter();

// //创建事件处理程序
// var connectHandler = function connected(){
// 	console.log("连接成功");

// 	//触发data_received事件
// 	eventEmitter.emit('data_received');
// }

// //绑定connection事件处理程序
// eventEmitter.on('connection',connectHandler);

// //使用匿名函数绑定data_received事件
// eventEmitter.on('data_received',function(){
// 	console.log('数据接收成功');
// });

// //触发connection 事件
// eventEmitter.emit('connection');

// console.log('程序执行完毕');


// var EventEmitter = require('events').EventEmitter;
// var event = new EventEmitter();
// event.on('some_event',function(){
// 	console.log('some_event事件触发成功');
// });
// setTimeout(function(){
// 	event.emit('some_event');
// },1000);


// var events = require('events');
// var emitter = new events.EventEmitter();
// emitter.on('someEvent',function(arg1,arg2){
// 	console.log('listenerl',arg1,arg2);
// });
// emitter.on('someEvent', function(arg1,arg2) {
// 	console.log("listener2",arg1,arg2);
// 	/* Act on the event */
// });
// emitter.emit('someEvent','arg1参数','arg2 参数');


// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// //监听器1
// var listener1 = function listener1(){
// 	console.log('1执行');
// }

// //监听器2
// var listener2 = function listener2(){
// 	console.log('2执行');
// }

// //绑定connection 事件，处理函数为listener1
// eventEmitter.addListener('connection',listener1);

// //绑定connection 事件，处理函数为listener2
// eventEmitter.on('connection',listener2);

// var eventListeners = eventEmitter.listenerCount(eventEmitter,'connection');
// console.log(eventListeners+'个监听器监听连接事件');

// //处理connection事件
// eventEmitter.emit('connection');

// //移除监听绑定的listener1事件
// eventEmitter.removeListener('connection',listener1);
// console.log('listener1不在受监听');

// //触发连续事件
// eventEmitter.emit('connection');

// eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
// console.log(eventListeners+'个监听器监听事件');

// console.log('程序执行完毕');


//写入缓冲区
// buf = new Buffer(256);
// len = buf.write("www.runoob.com");

// console.log("写入字节数 : "+  len);


//写入缓冲区
// var buf = new Buffer(26);
// for(var i=0;i<26;i++){
// 	buf[i]=i+97;
// }

// console.log(buf.toString('ascii'));
// console.log(buf.toString('ascii',0,5));
// console.log(buf.toString('utf-8',0,6));
// console.log(buf.toString(undefined,0,6));


//转换为json输出
// var buf = new Buffer("www.runoob.com");
// var json = buf.toJSON(buf);
// console.log(json);


//连接
// var buffer1 = new Buffer("菜鸟教程");
// var buffer2 = new Buffer('www.runoob.com');
// var buffer3 = Buffer.concat([buffer1,buffer2]);
// console.log(buffer3.toString());


//比较
// var buffer1 = new Buffer('123');
// var buffer2 = new Buffer('1234');
// var result = buffer1.compare(buffer2);

// if(result<0){
// 	console.log(buffer1+'在'+buffer2+"之前");
// }else if(result==0){
// 	console.log(buffer1+'在'+buffer2+"相同");
// }else{
// 	console.log(buffer1+'在'+buffer2+"之后");
// }


//复制
// var buffer1 = new Buffer('ABC');
// var buffer2 = new Buffer(3);//3为长度
// buffer1.copy(buffer2);
// console.log('buffer2 content:'+buffer2.toString());


//裁剪
// var buffer1 = new Buffer('runoob');
// var buffer2 = buffer1.slice(1,3);
// console.log('buffer2 '+buffer2.toString());


//长度
// var buffer = new Buffer('lutianfeiai');
// console.log("buffer length "+buffer.length);


// var fs = require("fs");
// var data = '';

// //创建可读流
// var readerStream = fs.createReadStream('input.txt');

// //设置编码utf8
// readerStream.setEncoding('UTF8');

// //处理流事件-->data,end,and error
// readerStream.on('data',function(chunk){
// 	data+=chunk;
// });

// readerStream.on('end',function(){
// 	console.log(data);
// });

// readerStream.on('error',function(err){
// 	console.log(err.stack);
// });

// console.log("程序执行完毕");


// var fs = require("fs");
// var data = 'lulu';

// //创建一个可以写入的流，写到文件output.txt中
// var writerStream = fs.createWriteStream('output.txt');

// //使用utf8编码写入数据
// writerStream.write(data,'UTF8');

// //标记文件末尾
// writerStream.end();

// //处理流事件-->data,end,and error
// writerStream.on('finish',function(){
// 	console.log('写入完成');
// });

// writerStream.on('error', function(err) {
// 	console.log(err.stack);
// 	/* Act on the event */
// });

// console.log("程序执行完毕");


// var fs = require('fs');

// //创建一个可读流
// var readerStream = fs.createReadStream('input.txt');

// //创建一个可写流
// var writerStream = fs.createWriteStream('output.txt');

// //管道读写操作
// //读取input.txt写入output.txt
// readerStream.pipe(writerStream);

// console.log('程序执行完毕');


// var fs = require('fs');
// var zlib = require('zlib');

// //压缩input.txt文件为input.txt.gz
// fs.createReadStream('input.txt')
// 	.pipe(zlib.createGzip())
// 	.pipe(fs.createWriteStream('input.txt.gz'));

// console.log('文件压缩完成');


// var fs = require('fs');
// var zlib = require('zlib');

// //解压input.txt.gz为input.txt
// fs.createReadStream('input.txt.gz')
// 	.pipe(zlib.createGunzip())
// 	.pipe(fs.createWriteStream('inpu.txt'));

// console.log('文件解压完成');


// //返回当前正在执行的脚本的文件名
// console.log(__filename);
// //表示当前执行脚本所在的目录。
// console.log(__dirname);

// function printHello(){
// 	console.log('hello');
// }
// // 两秒后执行以上函数
// var t = setTimeout(printHello, 2000);
// // 清除定时器
// clearTimeout(t);
// setInterval(printHello,2000);


// // 输出到终端
// process.stdout.write("Hello World!" + "\n");
// // 通过参数读取
// process.argv.forEach(function(val, index, array) {
//    console.log(index + ': ' + val);
// });
// // 获取执行路径
// console.log(process.execPath);
// // 平台信息
// console.log(process.platform);
// // 输出当前目录
// console.log('当前目录: ' + process.cwd());
// // 输出当前版本
// console.log('当前版本: ' + process.version);
// // 输出内存使用情况
// console.log(process.memoryUsage());


/*
var http = require("http");
var fs = require("fs");

var server = new http.Server();
server.listen(8000);

server.on("request",function (request, response) {
	var  url = require("url").parse(request.url);

	if(url.pathname === "/test/delay"){
		var delay = parseInt(url.query)||2000;

		response.writeHead(200,{"Content-Type":"text/plain; charset=UTF-8"});
		response.write("Sleep for"+delay+" milliseconds...");

		setTimeout(function () {
			response.write("done");
			response.end();
		},delay);
	}
	else if(url.pathname === "/test/lu"){
		response.writeHead(200,{"Content-Type":"text/plain; charset=UTF-8"});

		response.write(request.method+" "+ request.url + " HTTP/" + 
			request.httpVersion + "\r\n");

		for(var h in request.headers){
			response.write(h + ": " + request.headers[h] + "\r\n");
		}
		response.write("\r\n");

		request.on("data",function(chunk){ response.write(chunk);});

		response.on("end",function(chunk){ response.end();});
	}
	else{
		var filename = url.pathname.substring(1);
		var type;
		switch(filename.substring(filename.lastIndexOf(".")+1)){
			case "html":
			case "htm":type = "text/html; charset=UTF-8";break;
			case "js": type = "application/javascript; charset=UTF-8";break;
			case "css": type = "text/css; charset=UTF-8";break;
			case "txt": type = "text/plain; charset=UTF-8";break;
			default: type = "application/octet-stream";break;
		}

		fs.readFile(filename, function(err,content){
			if(err){
				response.writeHead(404,
					{'Content_Type':"text/plain; charset=UTF-8"})
				response.write(err.message);
				response.end();
			}
			else{
				response.writeHead(200,{"Content-Type":type});
				response.write(content);
				response.end();
			}
		});
	}
});
*/


// var http = require("http");

// http.createServer(function(req,res){
// 	res.writeHead(200,{'Content-Type':'text/html'});
// 	res.write("<h1>Node,js</h1>");
// 	res.write("<h1>Node,js</h1>");
// 	res.end('<p>hello world</p>');
// }).listen(3000);
// console.log("http srever is listening at port 3000");





// let util = require("util");

// function Person() {
// 	this.name = "ltf";

// 	this.toString = function() {
// 		return this.name;
// 	};
// }

// let obj = new Person();

// console.log(util.inspect(obj));
// console.log(util.inspect(obj,true,null,true));




/*
const events = require("events");

let emitter = new events.EventEmitter();
var z = function (arg1,arg2) {
	console.log("listener2",arg1,arg2);
};

emitter.once('someEvent',function(arg1,arg2) {
	console.log("listener",arg1,arg2);
});

emitter.on('someEvent',z)
emitter.removeListener('someEvent',z);
emitter.emit('someEvent','byvoid',"zxc");
emitter.removeAllListeners();

emitter.emit('someEvent','byvoid',"2");
*/



/*
const fs = require('fs');
fs.readFile('output.txt','utf-8',function(err,data) {
	if(err) {
		console.error(err);
	} else {
		console.log(data);
	}
});
*/




// const http = require('http');
// const url = require('url');
// const util = require('util');

// http.createServer(function(req,res) {
// 	res.writeHead(200,{"Content-Type":"text/plain"});
// 	res.end(util.inspect(url.parse(req.url,true)));
// }).listen(3000);