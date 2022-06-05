/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // double pointers
  // left = 0
  // right = len -1
  // while condition: left < right
  // area = (right - left) * Math.min(height[left], height[right])
  // maxArea = area < maxArea ? maxArea : area
  // height[left] - height[right] > 0 ? right-- : left++
  // return maxArea
  let left = 0;
  let right = height.length - 1;
  let maxAreaNum = 0;
  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right]);
    maxAreaNum = area < maxAreaNum ? maxAreaNum : area;
    height[left] - height[right] > 0 ? right-- : left++;
  }
  return maxAreaNum;
};

maxArea([1, 99, 100, 2, 5, 4, 8, 3, 7]);
// @lc code=end
