//用于向http服务器提交请求并发送数据的模块文件代码
//Domain对象的add方法的使用示例一起使用error.js中
// var http = require('http');
// var options = {
// 	hostname:'localhost',
// 	port:1337,
// 	path:'/',
// 	method:'POST'
// };
// var req = http.request(options,function(res) {
// 	res.setEncoding('utf8');
// 	res.on('data',function(chunk) {
// 		console.log('响应内容：'+chunk);
// 	});
// });
// req.write('你好');
// req.end('再见');







//接受并解压HTTP服务器返回的压缩数据的HTTP客户端
//服务器端代码在crypotf.js文件中
var zlib = require('zlib');
var http = require('http');
var fs = require('fs');
var request = http.get({
	host:'localhost',
	path:'/',
	port:1337,
	headers:{'accept-encoding':'gzip,deflate'}
});
request.on('response',function(response) {
	var output = fs.createWriteStream('./test/test3.text');
	switch(response.headers['content-encoding']) {
		case 'gzip':
		response.pipe(zlib.createGunzip()).pipe(output);
		break;
		case 'deflate':
		response.pipe(zlib.createInflate()).pipe(output);
		break;
		default:
		response.pipe(output);
		break;
	}
});