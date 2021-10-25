const greeting = require("./3-module");
require("./3.1-module-invoke"); // showNumber() in that module because it invoked there
console.log(greeting);
greeting("Sandy");
