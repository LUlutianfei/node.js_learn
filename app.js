// const foo = require('./foo.js');



//指定服务器地址及端口被占用时需要执行的处理
// var net = require('net');
// var server = net.createServer(function(socket) {
// 	console.log('客户端与服务端链接已建立');
// });
// server.listen(8431,'localhost');
// server.on('error',function(e) {
// 	if(e.code=='EADDRINUSE') {
// 		console.log('服务器地址及端口被占用')
// 	}
// })



//使用adress方法查看TCP服务器监听的地址信息
// var net = require('net');
// var server = net.createServer(function(socket) {
// 	console.log('客户端与服务端链接已建立');
// });
// server.listen(8431,'localhost',function(){
// 	var address = server.address();
// 	console.log('被监听的地址信息为%j',address);
// });



//使用getConnections方法查询当前存在的客户端连接数并设置最大连接数
//使用close方法拒绝新的客户端链接请求
// var net = require('net');
// var server = net.createServer(function(socket){
// 	server.getConnections(function(err,count){
// 		if(err) console.log('发生错误'+err);
// 		console.log('当前存在%d个客户端链接',count);
// 		server.maxConnections = 2;
// 		console.log('TCP服务器的最大连接数%d',server.maxConnections);
// 		if(count==2) {
// 			server.close(function(){
// 		console.log('服务器被关闭');
// 	});
// 		}
// 	});
	
// });
// server.listen(8431,'localhost');
// console.log('TCP服务器被创建');




//process.stdin对象与process.stdout对象的使用示例
//运行后输入任意字符
// process.stdin.resume();
// process.stdin.on('data',function(chunk) {
// 	process.stdout.write('进程收到数据'+chunk);
// })





//遍历process.argv属性值数组
//输入node app.js 1 2 3 
// process.argv.forEach(function(val,index,array) {
// 	console.log(index + ":"+val );
// })





//使用nextTick方法指定一个函数在一个同步方法执行完毕时被调用
// var fs = require('fs');
// var finish = function() {
// 	console.log('文件读取完毕');
// }
// process.nextTick(finish);
// console.log(fs.readFileSync('./app.js').toString());





//hrtime方法的使用示例
// var fs = require('fs');
// var time = process.hrtime();
// var data = fs.readFileSync('./app.js');
// var diff = process.hrtime(time);
// console.log("文件操作耗时%d秒",diff[0]*1e9+diff[1]);

