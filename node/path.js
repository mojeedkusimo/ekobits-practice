const path = require("path");

console.log(path.normalize("node/models/.."));

console.log(path.join("node/models","path1","path2"));

console.log(path.resolve("../data.txt"));

console.log(path.extname("main.ppt"));