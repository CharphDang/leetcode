/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 深度优先遍历 -> 回溯 + 状态重置
// [1,2,3]
// temp -> [1]
//   backTrack
//     temp -> [1,2]
//       backTrack
//         temp -> [1,2,3]
//           backTrack
//             return result.push([1,2,3])
//       temp.pop()
//     temp -> [1,3]
//       backTrack
//         temp -> [1,3,2]
//           backTrack
//           return result.push([1,3,2])
//   temp.pop()
// temp -> [2]
//   backTrack
//     ...
//   temp.pop()
// temp -> [3] 
//   backTrack
//     ...

function backTrack(result, temp, nums) {
  if(temp.length === nums.length) {
    return result.push([...temp])
  }
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if(temp.includes(item)) {continue;}
    temp.push(item);
    backTrack(result, temp, nums);
    temp.pop();
  }
}

var permute = function (nums) {
  const result = [];
  backTrack(result, [], nums);
  return result;
};

// @lc code=end
