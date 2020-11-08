const helper = require("./helpers");
const helpers = require("./helpers");
const moreHelpers = require("./moreHelpers");
const evenMoreHelpers = require("./evenMoreHelpers");
const { first, third, second } = require("./models");

helper.sayHi();

console.log(moreHelpers.firstname);
moreHelpers.sayHello();
moreHelpers.sayGoodbye();

evenMoreHelpers();

console.log(first);
console.log(second);
console.log(third);