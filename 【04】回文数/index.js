const isPalindrome = number => {
  const str = number + '';
  const newStr = str
    .split('')
    .reverse()
    .join('');
  return str === newStr;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-454));

const isPalindrome2 = number => {
  const str = number + '';
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return str === newStr;
};

console.log(isPalindrome2(121));
console.log(isPalindrome2(-454));

// 时间复杂度：O(log以10为底n)，对于每次迭代，我们会将输入除以 1010，因此时间复杂度为 O(\log n)O(logn)。
const isPalindrome3 = number => {
  // 特殊情况：
  // 如上所述，当 x < 0 时，x 不是回文数。
  // 同样地，如果数字的最后一位是 0，为了使该数字为回文，
  // 则其第一位数字也应该是 0
  // 只有 0 满足这一属性

  if (number < 0 || (number % 10 === 0 && number !== 0)) return false;
  let revertedNumber = 0;
  while (number > revertedNumber) {
    revertedNumber = revertedNumber * 10 + (number % 10);
    number = parseInt(number / 10);
  }
  // 当数字长度为奇数时，我们可以通过 revertedNumber/10 去除处于中位的数字。
  // 例如，当输入为 12321 时，在 while 循环的末尾我们可以得到 x = 12，revertedNumber = 123，
  // 由于处于中位的数字不影响回文（它总是与自己相等），所以我们可以简单地将其去除。

  return number === revertedNumber || number === parseInt(revertedNumber / 10);
};

console.log(isPalindrome3(121));
console.log(isPalindrome3(-454));
console.log(isPalindrome3(0));
console.log(isPalindrome3(10));
