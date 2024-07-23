var os = require("os");
var fs = require("fs");
var notes = require('./notes.js');
var _ = require("lodash");
const { log } = require("console");
// var user=os.userInfo();
// const userstring=JSON.stringify(user);
// fs.appendFile('greeting.txt',"hello"+userstring,()=>{console.log("file created")});
// fs.readFile('greeting.txt',(err,data)=>{
//     if(err){throw err};
//     console.log(data);
// })

const arr=[3,1,2,3,2,5,"hello","hello"];
const filtered=_.uniq(arr);
console.log(_.isString("123"));
console.log(filtered);
// notes.greeting();
// console.log(notes.age);

var jsonstring='{"name":"raghav","age":24}'
console.log(jsonstring);
// const jsonstring=JSON.stringify(obj);
// console.log(jsonstring);
const jsonobj=JSON.parse(jsonstring);
console.log(jsonobj);
