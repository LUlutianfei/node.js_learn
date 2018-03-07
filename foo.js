// console.log(module.id);
// module.id = "foo";
// console.log(module.id);
// console.log(module.filename);
// console.log(module.loaded);
// console.log(module.parent);
// console.log(module.children);

var buffer = new Buffer('v的辅导班');
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder();
console.log(decoder.write(buffer));