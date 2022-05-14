const { arr, objArr } = require('./array.js');

console.log(
  arr.sort((pre, next) => pre - next),
  'js sort'
); // Charph-log

console.log(objArr); // Charph-log
console.log(
  objArr.sort((pre, next) => pre.age - next.age),
  'js sort'
); // Charph-log
