// var fs = require("fs");
// fs.readFile('input.txt',function(err,data){
// 	if(err)return console.error(err);
// 	console.log("异步读取"+data.toString());
// });

// var data = fs.readFileSync('input.txt');
// console.log('同步读取:'+data.toString());

// console.log("程序执行完毕");

// fs.stat("output.txt", function(err,stats){
// 	if (err) {
//        return console.error(err);
//    }
//    console.log(stats);
//    console.log("读取文件信息成功！");

//    // 检测文件类型
//    console.log("是否为文件(isFile) ? " + stats.isFile());
//    console.log("是否为目录(isDirectory) ? " + stats.isDirectory());    
// });



// var fs = require("fs");

// console.log("准备写入文件");
// fs.writeFile('input.txt',"我是通过写入的文件内容",function(err){
// 	if(err){
// 		return console.error(err);
// 	}
// 	console.log('数据写入成功'); 
// 	console.log('---------我是分割线------------');
// 	console.log("读取写入的数据");
// 	fs.readFile('input.txt',function(err,data){
// 		if(err){
// 			console.error(err);
// 		}
// 		console.log("异步读取文件数据："+data.toString());
// 	});
// });



// var fs = require('fs');
// var buf = new Buffer(1024);
// console.log("准备写入文件");
// fs.writeFile('input.txt',"我是通过写入的文件内容",function(err){
// 	if(err){
// 		return console.error(err);
// 	}
// 	console.log('数据写入成功'); 
// 	console.log('---------我是分割线------------');
// });
// console.log('准备打开已存在的文件');
// fs.open('input.txt', 'r+', function(err, fd) {
// 	if(err){
// 		return console.error(err);
// 	}
// 	console.log('文件打开成功，准备读取');
// 	fs.read(fd, buf, 0, buf.length, 0, function(err, bytes,data){
// 		if(err){
// 			console.error(err);
// 		}
// 		console.log(bytes+'字节被读取');
// 		console.log(data.slice(0, bytes).toString());
// 		if(bytes > 0){
// 			console.log(buf.slice(0, bytes).toString());
// 		}
// 	});
// 		// 截取文件
// 		fs.ftruncate(fd, 10, function(err){
// 			if (err){
// 				console.log(err);
// 			} 
// 			console.log("文件截取成功。");
// 			console.log("读取相同的文件"); 
// 			fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
// 				if (err){
// 					console.log(err);
// 				}

//         // 仅输出读取的字节
//         if(bytes > 0){
//          	console.log(buf.slice(0, bytes).toString());
//        }
//      });
//         // 关闭文件
//         fs.close(fd, function(err){
//          	if (err){
//          		console.log(err);
//          	} 
//          	console.log("文件关闭成功！");
//         });
//    	});
// });

// console.log("删除文件");
// fs.unlink('input.txt',function(err){
// 	if(err){
// 		console.error(err);
// 	}
// 	console.log("删除成功")
// })




// var fs = require('fs');

// console.log("创建目录");
// fs.mkdir('D:/Sublime Text 3/node.js/test/',function(err){
// 	if(err){
// 		console.error(err);
// 	}
// 	console.log("目录创建成功")
// });
// console.log("查看目录");
// fs.readdir("D:/Sublime Text 3/node.js/",function(err, files){
//    if (err) {
//        return console.error(err);
//    }
//    files.forEach( function (file){
//        console.log( file );
//    });
// });
// console.log("准备删除目录 ");
// fs.rmdir("D:/Sublime Text 3/node.js/test/",function(err){
//    if (err) {
//        return console.error(err);
//    }
//    console.log("已删除");
// });



// var fs = require("fs");
// var buf = new Buffer("我爱编程");
// fs.open('./message','w',function(err,fd) {
//   fs.write(fd,buf,0,9,function(err,written,buffer) {
//     if(err) console.log("失败");
//     console.log('成功')
//      fs.fsync(fd);
//   fs.close(fd);
//   });

// })


// //查看文件信息
// var fs = require("fs");
// fs.stat("D://迅雷下载/靉/比赛/24H.docx",function(err,stats) {
//   console.log(stats);
// })
// //读取绝对路径
// fs.realpath('./test',function(err,resolvePath) {
//   console.log(resolvePath);
// })
// //修改文件的访问时间以及修改事件
// fs.utimes('./test',new Date(),new Date(),function(err) {
//   if(err) console.error('错误');
//   else console.log("成功");
// })
// fs.chmod('./message.txt',0600,function(err) {
//   if (err) {
//     console.log("文件修改失败");
//   } else {
//     console.log("成功");
//   }
// })



// var fs = require('fs');
//移动文件并重命名
// var files = fs.rename('./message.txt','./test/test.txt',function(err){
// 	if(err)console.log('失败');
// 	else console.log('成功');
// })
//截取文件
// fs.truncate('./test/test.txt',4,function(err) {
// 	if(err) console.log('错误');
// 	else {
// 		fs.stat('./test/test.txt',function(err,stats) {
// 			console.log("文件尺寸为："+stats.size);
// 		})
// 	}
// })
//监听文件的改变
// fs.watchFile('./test/test.txt',function(curr,prev) {
// 	if(Date.parse(prev.ctime)==0)
// 		console.log('创建');
// 	else if(Date.parse(curr.ctime)==0)
// 		console.log('删除');
// 	else if(Date.parse(curr.mtime)!=Date.parse(prev.mtime))
// 		console.log('修改');
// })
// var watcher = fs.watch('./test/test.txt',function(event,filename) {
// 	console.log(event);
// 	console.log(filename);
// 	watcher.close();
// })



//使用createReadStream方法读取文件
// var fs = require("fs");
// var file = fs.createReadStream('./test/test.txt',{start:2,end:10});
// file.on('open',function(fd) {
// 	console.log("开始读取");
// })

// file.on('data',function(data) {
// 	console.log('读取到数据');
// 	console.log(data.toString())
// })
// file.on('close',function(){
// 	console.log("文件被关闭");
// } )
// file.on('error',function(err){
// 	console.log("读取失败");
// })




//暂停并恢复文件的读取
// var fs = require('fs');
// var readStream = fs.createReadStream('./test/test.txt',{encoding:'utf8'});
// readStream.pause();
// readStream.on('data',function(data) {
// 	console.log(data);
// })
// setTimeout(function() {
// 	readStream.resume();
// },2000);




//使用createWriteStream方法写入文件
// var fs = require('fs');
// var file = fs.createReadStream('./test/test.txt');
// var out = fs.createWriteStream('./test/anotherTest.txt');
// file.on('data',function(data) {
// 	out.write(data);
// });
// out.on('open',function(fd) {
// 	console.log('需要被写入的文件已经打开');
// });
// file.on('end',function() {
// 	out.end('再见',function() {
// 		console.log('文件已写入完毕');
// 		console.log('共写入%d字节数据',out.bytesWritten);
// 	});
// });





//观察WriteStream对象的write方法的返回结果并监听drain事件
var fs = require('fs');
var out = fs.createWriteStream('./test/test1.txt');
for(var i=1;i<=10000;i++) {
	var flag = out.write(i.toString());
	console.log(flag);
}
out.on('drain',function() {
	console.log('操作系统缓缓存区的数据已经全部输出');
	var out = fs.createWriteStream('./test/test2.txt');
	for(var i=1;i<=10;i++) {
		var flag = out.write(i.toString());
		console.log(flag);
	}
	out.on('drain',function() {
		console.log('操作系统缓缓存区的数据已经全部输出');
	});
});