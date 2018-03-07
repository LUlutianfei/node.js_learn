//使用resolve方法解析域名
// var dns = require('dns');
// dns.resolve('www.google.com','A',function(err,addresses) {
// 	if(err) console.log(err);
// 	else console.log(addresses);
// });


//使用resolveMx方法解析域名
// var dns = require('dns');
// dns.resolveMx('google.com',function(err,addresses) {
// 	if(err) console.log(err);
// 	else console.log(addresses);
// });



//使用lookup方法获取地址
// var dns = require('dns');
// dns.lookup('www.baidu.com',4,function(err,addresses) {
// 	if(err) console.log(err);
// 	else console.log(addresses);
// });




//使用reverse方法反向解析ip地址
// var dns = require('dns');
// dns.reverse('202.165.102.205',function(err,domain) {
// 	if(err) console.log(err);
// 	else console.log(domain);
// });




// var punycode = require('punycode');
// console.log(punycode.encode('陆天飞'));
// console.log(punycode.decode('pbta4724a'));
// console.log(punycode.toASCII('www.陆天飞.com'));
// console.log(punycode.toASCII('www.ltf.com'));
// console.log(punycode.toUnicode('www.xn--rss153l7vb.com'));
// console.log(punycode.toUnicode('www.ltf.com'));
// console.log(punycode.version);




// //os模块
// os.tmpdir();
// //获取操作系统中默认的用于存放临时文件的目录
// os.endianness();
// //获取CPU的字节序
// os.hostname();
// //获取计算机名
// os.type();
// //获取操作系统类型
// os.platform();
// //获取操作系统平台
// os.arch();
// //获取cpu架构
// os.release();
// //获取操作系统版本号
// os.uptime();
// //获取操作系统的当前运行时间
// os.loadavg();
// //获取获取系统平均负载
// os.totalmem();
// //获取系统的总内存量
// os.freemem();
// //获取系统的空闲内存量
// os.cpus();
// //获取系统的CPU内核各种信息
// os.networkInterfaces();
// //获取系统中使用网络接口
// os.EOL;
// //获取操作系统中使用的换行符




