/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 贪心算法
// * ture的条件： cover >= nums.length - 1
// ? for 循环的条件： i<= cover， 而不是 i<nums.length - 1
// * 因为需要用cover来代表到底可以跳到哪个数字上，nums.length -1 这个位置并不一定可以循环到
var canJump = function (nums) {
  let cover = 0;
  for (let i = 0; i <= cover; i++) {
    cover = Math.max(cover, i + nums[i]);
    if (cover >= nums.length - 1) {
      console.log(i, nums[i]) // Charph-log
      return true;
    }
  }
  return false;
};
// @lc code=end
