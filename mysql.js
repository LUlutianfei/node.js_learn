//与数据库之间建立连接与关闭链接
// var mysql = require('mysql');
// var connection = mysql.createConnection({
// 	host:'localhost',
// 	port:3306,
// 	database:'mysql',
// 	user:'root',
// 	password:'@lulu022351'
// });
// connection.connect(function(err) {
// 	if(err) console.log('与MySQL数据库建立连接失败');
// 	else {
// 		console.log('与MySQL数据库建立连接成功');
// 		connection.end(function(err) {
// 			if(err) console.log('关闭MySQL数据库操作失败');
// 			else console.log('关闭MySQL数据库成功');
// 		})
// 	}
// })






//指定与数据库服务器之间丢失时的处理
// var mysql = require('mysql');
// var connection = mysql.createConnection({
// 	host:'localhost',
// 	port:3306,
// 	database:'mysql',
// 	user:'root',
// 	password:'@lulu022351'
// });
// var pool = mysql.createPool({
// 	host:'localhost',
// 	port:3306,
// 	database:'mysql',
// 	user:'root',
// 	password:'@lulu022351'
// });
// function handleDisconnect() {
// 	connection.connect(function(err) {
// 		if(err) console.log('与MySQL数据库建立连接失败');
// 		else {
// 			console.log('与MySQL数据库建立连接成功');
// 		}
// 	})
// }
// connection.on('error',function(err) {
// 	if(err.code === 'PROTOCOL_CONNECTION_LOST') {
// 		console.log('与MySQL数据库之间的链接别丢失');
// 		setTimeout(function() {
// 			handleDisconnect();
// 		},1000);
// 	}
// 	else throw err;
// });
// handleDisconnect();







//在MySQL数据库中插入与查询数据
// var mysql = require('mysql');
// var connection = mysql.createConnection({
// 	host:'localhost',
// 	port:3306,
// 	database:'mysql',
// 	user:'root',
// 	password:'@lulu022351'
// });
// connection.connect(function(err) {
// 	if(err) throw err;
//  	else {
// 		console.log('与MySQL数据库建立连接成功');
// 		connection.query('INSERT INTO users SET ?',
// 			{username:'x',firstname:'z'},function(err,result) {
// 				if(err) throw err;
// 				else {
// 					connection.query('SELECT * FROM ??',['users'],function(err,result) {
// 						if(err) console.log('数据查询失败');
// 						else {
// 							console.log(result);
// 							connection.end();
// 						}
// 					})
// 				}
// 			})
// 	}
// })





//使用result参数值对象的insertId属性值获取插入数据的主键值
// var mysql = require('mysql');
// var connection = mysql.createConnection({
// 	host:'localhost',
// 	post:3306,
// 	user:'root',
// 	password:'@lulu022351',
// 	database:'mysql'
// });
// connection.connect(function(err) {
// 	if(err) throw err;
// 	else {
// 		console.log('与数据库建立连接成功');
// 		connection.query('INSERT INTO users SET ?',
// 			{username:'t',firstname:'l'},function(err,result) {
// 				if(err) throw err;
// 				else {
// 					console.log('插入数据的ID值为%d',result.insertId);
// 					connection.end();
// 				}
// 			})
// 	}
// })






//使用multipleStatements属性值同时执行多条语句
//插入三条数据，修改第二条，删除第三条
// var mysql = require('mysql');
// var tableName = 'users';
// var connection = mysql.createConnection({
// 	host:'localhost',
// 	port:3306,
// 	multipleStatements:true,
// 	user:'root',
// 	password:'@lulu022351',
// 	database:'mysql'
// });
// connection.connect(function(err) {
// 	if(err) throw err;
// 	else {
// 		insertData();
// 	}
// });
// function insertData() {
// 	var sqlStr = '';
// 	for(var i = 1;i<4;i++)
// 		sqlStr += "INSERT INTO "+tableName+"(username,firstname) values("+connection.escape(i.toString())+","+connection.escape(i.toString())+");";
// 	connection.query(sqlStr,function(err,result) {
// 		if(err) throw err;
// 		else
// 			updateData();
// 	})
// }
// function updateData() {
// 	connection.query("update "+tableName+" set firstname =? where username=?",["100","2"],function(err,result) {
// 		if(err) throw err;
// 		else deleteData();
// 	})
// }	
// function deleteData() {
// 	connection.query("delete from "+tableName+" where username=?",["3"],function(err,result) {
// 		if(err) throw err;
// 		else 
// 			queryData();
// 	})
// }
// function queryData() {
// 	connection.query("SELECT * FROM "+tableName,function(err,result) {
// 		if(err) throw err;
// 		else {
// 			console.log(result);
// 			connection.end();
// 		}
// 	})
// }







//COnnection对象的query方法返回对象使用示例
// var fs = require('fs');
// var mysql = require('mysql');
// var connection = mysql.createConnection({
// 	host:'localhost',
// 	port:3306,
// 	multipleStatements:true,
// 	user:'root',
// 	password:'@lulu022351',
// 	database:'mysql'
// });
// var out = fs.createWriteStream('./test/message.txt');
// out.on('err',function(err) {
// 	console.log("写文件操作失败"+err.message);
// 	process.exit();
// });
// connection.connect(function(err) {
// 	if(err) console.log('fail');
// 	else {
// 		console.log('success');
// 		var query = connection.query('select * from users');
// 		query
// 		.on('error',function(err) {
// 			console.log('fail2'+err.message);
// 			process.exit();
// 		})
// 		.on('fields',function(fields) {
// 			var str = '';
// 			fields.forEach(function(fields) {
// 				if(str!='')
// 					str+=String.fromCharCode(9);
// 				str+=fields.name;
// 			});
// 			out.write(str+'\r\n');
// 		})
// 		.on('result',function(row) {
// 			connection.pause();
// 			out.write(row.id+String.fromCharCode(9)+row.username
// 				+String.fromCharCode(9)+row.firstname+'\r\n',function(err) {
// 					connection.resume();
// 				});
// 		})
// 		.on('end',function() {
// 			console.log('success2');
// 			connection.end();
// 		})
// 	}
// })







//创建并使用连接池对象
// var mysql = require('mysql');
// var pool = mysql.createPool({
// 	host:'localhost',
// 	port:3306,
// 	user:'root',
// 	password:'@lulu022351',
// 	database:'mysql'
// });
// pool.getConnection(function(err,connection) {
// 	if(err) console.log('fail');
// 	else {
// 		console.log('success');
// 		connection.query('select * from users',function(err,rows) {
// 			if(err) console.log('fail2');
// 			else {
// 				console.log(rows);
// 				pool.end();
// 			}
// 		})
// 	}
// })