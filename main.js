// var Hello = require('./hello');
// hello = new Hello();
// hello.setName('陆天飞');
// hello.sayHello();



var server = require("./server");
var router = require("./router");
 
server.start(router.route);