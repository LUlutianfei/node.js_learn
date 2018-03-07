//inspect方法使用示例
// var util = require('util');
// function testFunction(msg1,msg2) {
// 	return msg1+msg2;
// }
// var parent = new Object();
// parent.name = 'parent';
// parent.func=testFunction;
// var child1 = new Object();
// child1.name = 'child1';
// parent.child = child1;
// var child2 = new Object();
// child2.name = 'child2';
// child1.child = child2;
// var child3 = new Object();
// child3.name = 'child3';
// child2.child = child3;
// util.inspect.styles.string = 'red';
// console.log(util.inspect(parent));
// console.log(util.inspect(parent,{showHidden:true}));
// console.log(util.inspect(parent,{showHidden:true,depth:3}));
// console.log(util.inspect(parent,{showHidden:true,depth:3,colors:true}));





//自定义inspect方法使用示例
// var util = require('util');
// function testFunction(msg1,msg2) {
// 	return msg1+msg2;
// }
// var parent = new Object();
// parent.name = 'parent';
// parent.func=testFunction;
// var child1 = new Object();
// child1.name = 'child1';
// parent.child = child1;
// var child2 = new Object();
// child2.name = 'child2';
// child1.child = child2;
// var child3 = new Object();
// child3.name = 'child3';
// child2.child = child3;
// // parent.inspect = function() {
// // 	return this.name;
// // };
// child2.inspect = function() {
// 	return util.inspect(this,{colors:true,customInspect:false});
// };
// console.log(util.inspect(parent,{customInspect:true,depth:4})); 





//自定义inspect方法的depth参数使用示例
// var util = require('util');
// function testFunction(msg1,msg2) {
// 	return msg1+msg2;
// }
// var parent = new Object();
// parent.name = 'parent';
// parent.func=testFunction;
// var child1 = new Object();
// child1.name = 'child1';
// parent.child = child1;
// var child2 = new Object();
// child2.name = 'child2';
// child1.child = child2;
// var child3 = new Object();
// child3.name = 'child3';
// child2.child = child3;
// child2.inspect = function(depth) {
// 	return util.inspect(this,{depth:depth-2,customInspect:false});
// };
// console.log(util.inspect(parent,{customInspect:true,depth:4}));






//inherit方法的使用示例
// var util = require('util');
// function Vehicle() {

// }
// Vehicle.prototype = {
// 	accerelate:function() {
// 		console.log('accerelate');
// 	}
// }
// function Bike() {

// }
// util.inherits(Bike,Vehicle);
// var bike = new Bike();
// bike.accerelate();





//eval属性值使用示例
// var repl = require('repl');
// var vm = require('vm');
// var self = this;
// var flag = true;
// repl.start({
// 	eval:function(cmd,context,file,callback) {
// 		var err,result;
// 		try{
// 			if(self.useGlobal) {
// 				if(!flag) {
// 					console.log('输入命令：'+cmd.replace('\n',''));
// 					flag = true;
// 				}
// 				result = vm.runInThisContext(cmd,file);
// 				console.log("运行结果：");
// 			} else {
// 				if(!flag) {
// 					console.log('输入命令：'+cmd.replace('\n',''));
// 					flag = true;
// 				}
// 				else flag = false;
// 				result = vm.runInThisContext(cmd,context,file);
// 				console.log('运算结果：');
// 			}
// 		}
// 		catch(e) {
// 			err = e;
// 		}
// 		if(err&&process.domain ) {
// 			process.domain.emit('error',err);
// 			process.domain.exit();
// 		} else {
// 			callback(err,result);
// 		}
// 	}
// })