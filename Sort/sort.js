const { arr, objArr } = require('./array.js');

const arr1 = arr.slice();
const arr2 = arr.slice();
const arr3 = objArr.slice();

// 如果没有指明 compareFunction ，那么元素会按照转换为的字符串的诸个字符的Unicode位点进行排序
arr1.sort();
console.log(arr1, 'number array after sort by no compare function'); // Charph-log

// 如果指明了 compareFunction ，那么数组会按照调用该函数的返回值排序
// compareFunction(a, b) < 0 , a 会被排列到 b 之前
// compareFunction(a, b) > 0 , a 会被排列到 b 之后 （即交换a,b顺序）
// compareFunction(a, b) = 0 , a 和 b 的相对位置不变
arr2.sort((pre, next) => pre - next);
console.log(arr2, 'number array after sort'); // Charph-log

// 如果数据内部是对象，可以根据某一个key的值来进行排序
arr3.sort((pre, next) => pre.age - next.age);
console.log(arr3, 'object array after sort'); // Charph-log
