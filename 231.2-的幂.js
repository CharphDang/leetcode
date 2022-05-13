/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */

// 利用二进制的思维
// 凡是2的x次方，化为二进制一定为'10000000...000'，记为a
// 相应的2的x次方-1，化为二进制则为'0111111111...111'，记为b
// a&b=0, 这样来判断
// 2的x次方一定是>0的，所以输入的n的边界>0
var isPowerOfTwo = function(n) {
  return n>0 && (n&n-1) === 0;
};

// @lc code=end

