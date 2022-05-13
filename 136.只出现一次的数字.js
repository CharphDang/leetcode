/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

//  异或：如果a、b两个值不相同，则异或结果为1。如果a、b两个值相同，异或结果为0。
// 101011100 a
// 111001101 b
// 010010001 result
// result = a ^ b
var singleNumber = function(nums) {
  let result = 0;
  nums.forEach(num=>{
      result ^= num;
  })
  return result;
};

// @lc code=end

