// 先将数字转换为字符串，然后从后到前进行遍历newStr += str[i]得到新的字符串
// 新字符串重新partInt变为整数，根据原始值的正负添加符号
// 最后一步判断边界，如果溢出则结果变为0
// 时间复杂度为O(n)
const revertInteger = number => {
  const str = number + '';
  const len = str.length;
  let newStr = '';

  for (let i = len - 1; i >= 0; i--) {
    newStr += str[i];
  }
  let result = number > 0 ? parseInt(newStr) : -parseInt(newStr);
  if (-Math.pow(2, 31) > result || result > Math.pow(2, 31) - 1) {
    result = 0;
  }
  return result;
};

console.log(revertInteger(123));
console.log(revertInteger(-456));
console.log(revertInteger(1534236469));

// 位运算中的位或
// result * 10 + x % 10 取出末位 x % 10（负数结果还是负数，无需关心正负），拼接到 result 中。
// x / 10 去除末位，| 0 强制转换为32位有符号整数。
// 通过 | 0 取整，无论正负，只移除小数点部分（正数向下取整，负数向上取整）。
// result | 0 超过32位的整数转换结果不等于自身，可用作溢出判断。

const reverse = function(x) {
  let result = 0;
  while (x !== 0) {
    result = result * 10 + (x % 10);
    x = (x / 10) | 0;
  }
  return (result | 0) === result ? result : 0;
};
console.log(reverse(123));
console.log(reverse(-456));
console.log(reverse(1534236469));
