//与数据库之间建立连接及关闭数据库的代码示例
// var mongo = require('mongodb');
// var host = 'localhost';

// var server = new mongo.Server(host,27017,{auto_reconnect:true});
// var db = new mongo.Db('node-mongo-examples',server,{safe:true});

// db.open(function(err,db) {
// 	if(err) throw err;
// 	else{
// 		console.log('成功建立数据库连接');
// 		db.close();
// 	}
// });
// db.on('close',function(err,db) {
// 	if(err) throw err;
// 	else console.log('成功关闭数据库');
// })




//将user对象插入到MongoDB数据库中
// var mongo = require('mongodb');
// var host = 'localhost';

// var server = new mongo.Server(host,27017,{auto_reconnect:true});
// var db = new mongo.Db('node-mongo-examples',server,{safe:true});

// db.open(function(err,db) {
// 	db.collection('users',function(err,collection) {
// 		collection.insert({username:"天飞",firstname:"陆"},function(err,docs) {
// 			if(err) throw err;
// 			else {
// 				console.log(docs);
// 				db.close(false);
// 			}
// 		})
// 	})
// });





//查询users集合的所有数据
// var mongo = require('mongodb');
// var host = 'localhost';

// var server = new mongo.Server(host,27017,{auto_reconnect:true});
// var db = new mongo.Db('node-mongo-examples',server,{safe:true});
// db.open(function(err,db) {
// 	db.collection('users',function(err,collection) {
// 		if(err) throw err;
// 		else {
// 			collection.find({username:'天飞'}).toArray(function(err,docs) {
// 				if(err) throw err;
// 				else {
// 					console.log(docs);
// 					db.close();
// 				}
// 			})
// 		}
// 	})
// })






//同时指定多个字段值的查询条件
// var mongo = require('mongodb');
// var host = 'localhost';

// var server = new mongo.Server(host,27017,{auto_reconnect:true});
// var db = new mongo.Db('node-mongo-examples',server,{safe:true});
// var data = [{type:'food',price:11},{type:'food',price:10},
// {type:'food',price:9},{type:'book',price:10},{type:'drink',price:10}];
// db.open(function(err,db) {
// 	if(err) throw err;
// 	else {
// 		db.collection('goods',function(err,collection) {
// 			collection.insert(data,function(err,docs) {
// 				if(err) throw err;
// 				else {
//					//{$lt:10}小于10、{$in:[9,10]}等于10，9
//					//{$or:[{type:'food'},{price:{$lt:10}}]}类型为food或价格小于10
//					//{type:'food',$or:[{price:11},{price:{$lt:9}}]}类型为food并且价格等于11或者小于9
// 					collection.find({type:'food',price:{$li:10}})
// 					.toArray(function(err,docs) {
// 						if(err) throw err;
// 						else {
// 							console.log(docs);
// 							db.close();
// 						}
// 					})
// 				}
// 			})
// 		})
// 	}
// })





//在查询条件中指定子文档
// var mongo = require('mongodb');
// var host = 'localhost';
// var db = new mongo.Db('ltf',new mongo.Server(host,27017,{auto_reconnect:true}),{safe:true});
// var store1 = {name:'store1',goods:{type:'food',price:11}};
// var store2 = {name:'store2',goods:{type:'food',price:10}};
// var store3 = {name:'store3',goods:{type:'food',price:9}};
// var store4 = {name:'store4',goods:{type:'food',price:8}};
// var store5 = {name:'store5',goods:{type:'book',price:9}};
// var data = [store1,store2,store3,store4,store5];
// db.open(function(err,db) {
// 	if(err) throw err;
// 	else {
// 		db.collection('stores',function(err,collection) {
// 			//collection.insert(data,function(err,docs) {
// 				if(err) throw err;
// 				else {
// 					//collection.find({goods:{type:'food',price:8}}).toArray(function(err,docs) {
// 					collection.find({'goods.type':'food','goods.price':8}).toArray(function(err,docs) {
// 						if(err) throw err;
// 						else {
// 							console.log(docs);
// 							db.close();
// 						}
// 					})
// 				}
// 			})
// 		//})
// 	}
// })





//指定某个子数据文档的某个元素的查询条件
// var util = require('util');
// var mongo = require('mongodb');
// var host = 'localhost';
// var db = new mongo.Db('ltf',new mongo.Server(host,27017,{auto_reconnect:true}),{safe:true});
// var good1={type:'food',price:11};
// var good2={type:'food',price:8};
// var good3={type:'food',price:9};
// var good4={type:'food',price:10};
// var goods = [good1,good2,good3,good4];
// var store1 = {name:'store1',thing:goods};
// var book1={type:'book',price:11};
// var book2={type:'book',price:9};
// var book3={type:'book',price:8};
// var book4={type:'book',price:10};
// var books = [book1,book2,book3,book4];
// var store2 = {name:'store2',thing:books};
// var storesArray = [store1,store2];
// db.open(function(err,db) {
// 	if(err) throw err;
// 	else {
// 		db.collection('stores',function(err,collection) {
// 			//collection.insert(storesArray,function(err,docs) {
// 				if(err) throw err;
// 				else {
// 					//collection.find({'thing.0.type':'book'})
// 					//collection.find({'thing.price':{$lt:10}})
// 					//collection.find({'thing.0.type':'book'},{fields:{'thing.0.type':0,_id:0}})
// 					//fields值为1代表查询结果中包含该字段(名称以及值全部包含或不包含)
// 					//collection.find({},{sort:[['type',1],['price',-1]]})
// 					//collection.find({},{sort:{type:1,price:-1}})
// 					//两种方式排序，1：升序
// 					//collection.find({'thing.0.type':'book'},{limit:1,skip:1})
// 					//限制查询结果条数,跳过第几条数据
// 					.toArray(function(err,docs) {
// 						if(err) throw err;
// 						else {
// 							console.log(util.inspect(docs,{depth:3}));
// 							db.close();
// 						}
// 					})
// 				}
// 			})
// 		//})
// 	}
// })






//指定在查询时利用根据price字段创建的索引
// var mongo = require('mongodb');
// var host = 'localhost';

// var server = new mongo.Server(host,27017,{auto_reconnect:true});
// var db = new mongo.Db('node-mongo-examples',server,{safe:true});
// var data = [{type:'food',price:11},{type:'food',price:10},
// {type:'food',price:9},{type:'book',price:10},{type:'drink',price:10}];
// db.open(function(err,db) {
// 	if(err) throw err;
// 	else {
// 		db.collection('goods',function(err,collection) {
// 			//collection.insert(data,function(err,docs) {
// 				if(err) throw err;
// 				else {
// 					collection.createIndex({price:1},function(err,indexName) {
// 						if(err) throw err;
// 						else {
// 							//collection.find({type:'food'},{hint:{price:1},returnKey:true})
// 							//hint强迫使用索引进行查询returnKey是否只包含price字段值
// 							collection.find({type:'food'},{max:{price:10}})
// 							//限定price索引字段最大值为10，同理min
// 							.toArray(function(err,docs) {
// 								if(err) throw err;
// 								else {
// 									console.log(docs);
// 									db.close();
// 								}
// 							})
// 						}
// 					})
// 				}
// 			})
// 		//})
// 	}
// })






//使用explain属性查看执行find方法查询数据时的详细性能信息
// var mongo = require('mongodb');
// var host = 'localhost';

// var server = new mongo.Server(host,27017,{auto_reconnect:true});
// var db = new mongo.Db('node-mongo-examples',server,{safe:true});

// db.open(function(err,db) {
// 	db.collection('users',function(err,collection) {
// 		if(err) throw err;
// 		else {
// 			collection.find({},{explain:true}).toArray(function(err,docs) {
// 				if(err) throw err;
// 				else {
// 					console.log(docs[0]);
// 					db.close();
// 				}
// 			})
// 		}
// 	})
// });






//findOne()方法使用示例
// var mongo = require('mongodb');
// var host = 'localhost';

// var server = new mongo.Server(host,27017,{auto_reconnect:true});
// var db = new mongo.Db('node-mongo-examples',server,{safe:true});

// db.open(function(err,db) {
// 	db.collection('users',function(err,collection) {
// 		if(err) throw err;
// 		else {
// 			collection.findOne({},function(err,docs) {
// 				console.log(docs);
// 				db.close();
// 			})
// 		}
// 	})
// });






//update方法的使用示例
// var mongo = require('mongodb');
// var db =  new mongo.Db('node-mongo-examples',new mongo.Server('localhost','27017',
// 	{auto_reconnect:true}),{safe:true});
// db.open(function(err,db) {
// 	db.collection('users',function(err,collection) {
// 		if(err) throw err;
// 		else {
// 			//collection.update({},{username:'test',firstname:'test'},
// 			collection.update({},{$set:{username:'test',firstname:'test'}},{multi:true},
// 			//更新所有符合查询条件的数据
// 				function(err,result) {
// 				if(err) throw err;
// 				else {
// 					console.log('成功更新'+result+'条数据文档');
// 					collection.find({}).toArray(function(err,docs) {
// 						if(err) throw err;
// 						else {
// 							console.log('更新后的数据');
// 							console.log(docs);
// 							db.close();
// 						}
// 					})
// 				}
// 			})
// 		}
// 	})
// })







//使用upsert属性在更新数据时插入一条数据文档
//查找条件中不符合查询条件，把参数值插入到集合中
// var mongo = require('mongodb');
// var db =  new mongo.Db('node-mongo-examples',new mongo.Server('localhost','27017',
// 	{auto_reconnect:true}),{safe:true});
// db.open(function(err,db) {
// 	db.collection('users',function(err,collection) {
// 		if(err) throw err;
// 		else {
// 			//collection.update({},{username:'test',firstname:'test'},
// 			collection.update({username:'aaa'},{username:'aaa',firstname:'aaa'},{upsert:true},
// 			//更新所有符合查询条件的数据
// 				function(err,result) {
// 				if(err) throw err;
// 				else {
// 					console.log('成功更新'+result+'条数据文档');
// 					collection.find({}).toArray(function(err,docs) {
// 						if(err) throw err;
// 						else {
// 							console.log('更新后的数据');
// 							console.log(docs);
// 							db.close();
// 						}
// 					})
// 				}
// 			})
// 		}
// 	})
// })






//findAndModify方法的使用示例
//查询并更新一条数据文档
//var mongo = require('mongodb');
// var server = new mongo.Server('localhost','27017',{auto_reconnect:true});
// var db = new mongo.Db('ltf',server,{safe:true});
// var data = [{type:'food',price:11},{type:'food',price:10},
// {type:'food',price:9},{type:'food',price:8},{type:'book',price:9}];
// db.open(function(err,db) {
// 	if(err) throw err;
// 	else {
// 		db.collection('goods',function(err,collection) {
// 			if(err) throw err;
// 			else {
// 				collection.insert(data,function(err,docs) {
// 					if(err) throw err;
// 					else {
// 						collection.findAndModify({type:'food'},
// 							[['type',1],['price',-1]],{type:'food',price:100},
// 							{new:true},function(err,doc) {
// 								if(err) throw err;
// 								else {
// 									console.log(doc);
// 									db.close();
// 								}
// 							})
// 					}
// 				})
// 			}
// 		})
// 	}
// })







//remove方法使用示例
// var mongo = require('mongodb');
// var server = new mongo.Server('localhost','27017',{auto_reconnect:true});
// var db = new mongo.Db('node-mongo-examples',server,{safe:true});
// db.open(function(err,db) {
// 	if(err) throw err;
// 	else {
// 		db.collection('users',function(err,collection) {
// 			collection.remove({username:'test'},{single:true},function(err,result) {
// 				//加single指定只删除一条数据
// 				if(err) throw err;
// 				else {
// 					console.log('成功删除'+result+'条数据');
// 					collection.find({}).toArray(function(err,docs) {
// 						console.log('输出后的数据');
// 						console.log(docs);
// 						db.close();
// 					})
// 				}
// 			})
// 		})
// 	}
// })







//findAndRemove方法使用示例
// var mongo = require('mongodb');
// var server = new mongo.Server('localhost','27017',{auto_reconnect:true});
// var db = new mongo.Db('ltf',server,{safe:true});
// var data = [{type:'food',price:11},{type:'food',price:10},
// {type:'food',price:9},{type:'food',price:8},{type:'book',price:9}];
// db.open(function(err,db) {
// 	db.collection('goods',function(err,collection) {
// 		collection.insert(data,function(err,docs) {
// 			collection.findAndRemove({type:'food'},[['type',1],['price',-1]],function(err,docs) {
// 				console.log(docs);
// 				db.close();
// 			})
// 		})
// 		collection.find({}).toArray(function(err,data) {
// 			console.log(data);
// 		})
// 	})
// })







//使用mongoose类库定义数据架构,--有问题--
// var mongoose = require('mongoose'),
// Schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost:27017/ltf',function(err) {
// 	if(err)
// 		console.log('链接MongoDB数据库失败');
// });
// var goodsSchema = new Schema({ 
// 	type:String,
// 	price:Number
// });
// var storeSchema = new Schema({
// 	name:String,
// 	goods:[goodsSchema]
// });
// var store1 = {name:'store1',goods:{type:'food',price:11}};
// var store2 = {name:'store2',goods:{type:'food',price:10}};
// var store3 = {name:'store3',goods:{type:'food',price:9}};
// var store4 = {name:'store4',goods:{type:'food',price:8}};
// var store5 = {name:'store5',goods:{type:'book',price:9}};
// var docs = [store1,store2,store3,store4,store5];
// var Stores = mongoose.model('stores',storeSchema);
// Stores.create(docs,function(err,docs) {
// 	if(err) console.log('保存数据失败');
// 	else {
// 		console.log('das');
// 		Stores.find(function(err,docs) {
// 			if(err) throw err;
// 			else {
// 				console.log(docs);
// 				mongoose.disconnect();
// 			}
// 		})
// 	}
// })