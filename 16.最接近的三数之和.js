/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // 1. sort
  // 2. loop
  // 3. double pointer
  // 3.1 | nums[i] + nums[left] + nums[right] - target |
  // 3.2 every time compare current result with previous result, update min result with

  if (nums.length < 4) return nums.reduce((pre, next) => pre + next);
  nums.sort((pre, next) => pre - next);
  let minResult = null;
  let minAbsResult = null;
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      // if has no minResult, keep pointers, save newResult
      // else has minResult, compare newAbsResult with minResult,
      // * newAbsResult < minResult, real value > 0, right--
      // * newAbsResult >= minResult, real value < 0, left++
      const newResult = nums[i] + nums[left] + nums[right] - target;
      const newAbsResult = Math.abs(newResult);
      if (minAbsResult === null) {
        minAbsResult = Math.abs(newResult);
        minResult = newResult + target;
      } else {
        if (newAbsResult < minAbsResult) {
          minResult = newResult + target;
          minAbsResult = newAbsResult;
        }

        if (newResult > 0) {
          right--;
        } else if (newResult < 0) {
          left++;
        } else {
          return newResult + target;
        }
      }
    }
  }
  return minResult;
};

threeSumClosest([1, 1, 1, 0], -100);
// @lc code=end
