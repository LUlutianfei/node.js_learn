//使用Interface对象读取用户输入行数据
// var readline = require('readline');
// var r1= readline.createInterface({
// 	input:process.stdin,
// 	output:process.stdout
// });
// r1.on('line',function(line) {
// 	if(line=='exit'||line=='quit'||line=='q')
// 		r1.close();
// 	else
// 		console.log('输入了'+line);
// });




//使用completer属性实现tab补全功能
// var readline = require('readline');
// function completer(line) {
// 	var completions = 'help error quite aaa bbb ccc'.split(' ');
// 	var hits = completions.filter(function(c) {
// 		return c.indexOf(line)==0
// 	});
// 	return [hits.length?hits:completions,line];
// }
// var r1 = readline.createInterface({
// 	input:process.stdin,
// 	output:process.stdout,
// 	completer:completer
// });
// r1.on('line',function(line) {
// 	if(line=='exit'||line=='quit'||line=='q')
// 		r1.close();
// 	else
// 		console.log('输入了'+line);
// });





//使用Interface对象逐行读取文件
// var readline = require('readline');
// var fs = require('fs');
// var file = fs.createReadStream('./test/message.txt');
// var out = fs.createWriteStream('./test/anotherMessage.txt');
// var index =1;
// out.write("line"+index.toString()+":");
// index+=1;
// var r1 = readline.createInterface({
// 	input:file,
// 	output:out,
// 	terminal:true
// });
// r1.on('line',function(line) {
// 	out.write("line"+index.toString()+":");
// 	index+=1;
// });






//Interface对象的pause方法和resume方法使用示例
// var readline = require('readline');
// var r1 = readline.createInterface({
// 	input:process.stdin,
// 	output:process.stdout
// });
// r1.on('line',function(line) {
// 	if(line=='exit'||line=='quit'||line=='q')
// 		r1.close();
// 	else if(line=='pause') {
// 		r1.pause();
// 		setTimeout(function() {
// 			r1.resume();
// 		},10000);
// 	}
// 	else
// 		console.log('输入了：'+line);
// });
// r1.on('resume',function() {
// 	console.log('恢复数据读取');
// })
// r1.on('pause',function() {
// 	console.log('暂停读取数据10秒');
// })
// r1.on('close',function() {
// 	console.log('行数据读取操作被终止。');
// });






//Interface对象的write方法使用示例
// var readline = require('readline');
// var fs = require('fs');
// var file = fs.createReadStream('./test/message.txt');
// var out = fs.createWriteStream('./test/anotherMessage.txt');
// var index = 1;
// out.write('line'+index.toString()+':');
// index+=1;
// var r1 = readline.createInterface({
// 	input:file,
// 	output:out,
// 	terminal:true
// });
// r1.on('line',function(line) {
// 	out.write('line'+index.toString()+':');
// 	index++;
// });
// file.on('end',function() {
// 	var buf = new Buffer('文件创建时间：'+(new Date()).toLocaleString());
// 	r1.removeAllListeners('line');//移除所有监听事件，避免最后一行写入行号
// 	r1.write('\r\n');
// 	r1.write(buf);
// });






//定制并显示命令提示符
// var readline = require('readline');
// var r1 = readline.createInterface({
// 	input:process.stdin,
// 	output:process.stdout
// });
// r1.setPrompt('请输入：',7);
// r1.prompt();
// r1.on('line',function(line) {
// 	if(line=='exit'||line=='quit'||line=='q')
// 		r1.close();
// 	else
// 		console.log('输入了：'+line);
// 	r1.prompt();
// });
// r1.on('close',function() {
// 	console.log('\r\n行数据读取操作被终止');
// });





//question方法的使用示例
// var readline = require('readline');
// var r1 = readline.createInterface({
// 	input:process.stdin,
// 	output:process.stdout
// });
// r1.question('What do you think of node.js     ',function(answer) {
// 	console.log('谢谢你的回到，你的评价为：',answer);
// 	r1.close();
// })





//Inteface对象的SIGINT事件回调函数使用示例
var readline = require('readline');
var r1= readline.createInterface({
	input:process.stdin,
	output:process.stdout
});
r1.on('line',function(line) {
	if(line=='exit'||line=='quit'||line=='q')
		r1.close();
	else
		console.log('输入了'+line);
});
r1.on('SIGINT',function() {
	r1.question('Are you sure you want to exit?',function(answer) {
		if(answer.match(/^y(es)?$/i))
			r1.pause();
	});
})
r1.on('close',function() {
	console.log('行数据读取操作被终止。');
	process.exit();
});