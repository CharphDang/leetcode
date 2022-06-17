/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let len = nums.length;
  let mid = Math.floor(len / 2);

  if (len === 1) return 0;
  if (len === 2) {
    return nums[0] > nums[1] ? 0 : 1;
  }

  if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
    return mid;
  }

  if (nums[mid] < nums[mid + 1]) {
    return mid + findPeakElement(nums.slice(mid));
  }

  if (nums[mid] < nums[mid - 1]) {
    return findPeakElement(nums.slice(0, mid));
  }

  return 0;
};
// @lc code=end
