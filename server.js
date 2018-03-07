// var http = require("http");
// var url = require("url");
 
// function start(route) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("Request for " + pathname + " received.");
 
//     route(pathname);
 
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
//   }
 
//   http.createServer(onRequest).listen(8888);
//   console.log("Server has started.");
// }
 
// exports.start = start;





//用于发送数据的HTTP客户端
//与http.js用于接收数据的HTTP服务器
//一起使用
var http = require('http');
var options = {
  hostname: 'localhost',
  port: 1337,
  path:'/',
  method:'POST'
};
var req = http.request(options,function(res) {
  res.on('data',function(chunk) {
    console.log('客户端接受到数据'+chunk);
  });
  res.on('end',function() {
    console.log('Trailer头信息：%j',res.trailers);
  });
});
req.write('你好');
req.end('再见');