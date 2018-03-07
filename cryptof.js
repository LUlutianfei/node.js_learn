//散列算法的使用示例
// var crypto = require('crypto');
// var fs = require('fs');
// var shasum = crypto.createHash('MD5');
// var s = fs.ReadStream('./app.js');
// s.on('data',function(d) {
// 	shasum.update(d);//创建一个摘要
// });
// s.on('end',function() {
// 	var d = shasum.digest('hex');//输出摘要内容
// 	console.log(d);
// });






//使用Gzip对象压缩文件
// var zlib = require('zlib');
// var gzip = zlib.createGzip();
// var fs = require('fs');
// var inp = fs.createReadStream('./test/input.html');
// var out = fs.createWriteStream('./test/input.html.gz');
// inp.pipe(gzip).pipe(out);





//使用Gunzip对象解压文件
// var zlib = require('zlib');
// var gunzip = zlib.createGunzip();
// var fs = require('fs');
// var inp = fs.createReadStream('./test/input.html.gz');
// var out = fs.createWriteStream('./test/input1.html');
// inp.pipe(gunzip).pipe(out);






//返回压缩数据的HTTP服务器
//客户端代码在client.js文件中
// var zlib = require('zlib');
// var http = require('http');
// var fs = require('fs');
// http.createServer(function(request,response) {
// 	var raw = fs.createReadStream('./test/test1.txt');
// 	var acceptEncoding = request.headers['accept-encoding'];
// 	if(!acceptEncoding) {
// 		acceptEncoding = '';
// 	}
// 	if(acceptEncoding.match(/\bdeflate\b/)) {
// 		response.writeHead(200,{'content-encoding':'deflate'});
// 		raw.pipe(zlib.createDeflate()).pipe(response);
// 	}
// 	else if(acceptEncoding.match(/\bgzip\b/)) {
// 		response.writeHead(200,{'content-encoding':'gzip'});
// 		raw.pipe(zlib.createGzip()).pipe(response);
// 	}
// 	else {
// 		response.writeHead(200,{});
// 		raw.pipe(response);
// 	}
// }).listen(1337);






//使用gzip方法压缩数据及使用unzip方法解压缩被压缩的数据
var zlib = require('zlib');
var fs = require('fs');
var out = fs.createWriteStream('./test/test.txt');
var inp = "sdgvhzdhfjijfkuegnrwyrgh";
zlib.gzip(inp,function(err,buffer) {
	if(!err) {
		zlib.unzip(buffer,function(err,buffer) {
			if(!err){
				console.log(buffer.toString());
				out.write(buffer.toString());
			}
		});
	}
});