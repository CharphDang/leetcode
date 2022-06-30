/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // * 动态规划（递推）
  // [0,1,0,3,2,3]
  // [1,1,1,1,1,1]  默认值都是1
  // 设立dp数组，求dp[n]，此题中，答案为dp数组中最大的值
  // const len = nums.length;
  // const dp = Array(len).fill(1);
  // for (let i = 0; i <len; i++) {
  //   // 针对每个i，需要从第一个位置遍历，依次和current num比较，判断当前位置的最长递增子序列
  //   for (let j = 0; j <=i; j++) {
  //     // 当num[i] > nums[j]的时候，那么dp[i] 则为 dp[j] + 1，因为需要求最大的子序列，所以每次算出来的new dp[i]都需要和 old dp[i]进行比较，拿到最大的值来存放
  //     if(nums[i] > nums[j]) {
  //       dp[i] = Math.max(dp[j] + 1, dp[i])
  //     }
  //   }
  // }
  // return Math.max(...dp)
  // * 贪心 + 二分法
  // 维护一个最长递增子序列的数组arr，核心是维护这个arr增长的幅度尽可能的小
  // 当前的实现，虽然最长递增子序列的值可能维护的不对，但是长度是正确的
  // [0,1,0,3,2,3]
  // arr=[0,1,4,7]  新来一个9,比最大的7还要大，则直接push进去
  // 新来一个3，则找到第一个比3大的值（4）,进行替换
  const arr = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > arr[arr.length - 1]) {
      arr.push(nums[i]);
    } else {
      // 由于我们维护的arr是递增序列，有序的，可以使用二分查找来进行高效率的查询
      let left = 0;
      let right = arr.length - 1;
      while (left < right) {
        // 除2取整找中间值，我们的可以使用位运算，向右移动一位就是除以2
        const middle = (left + right) >> 1;
        // 如果中间值 < num[i], 说明要找的值在middle 右半区， 否则在左半区
        if (arr[middle] < nums[i]) {
          left = middle + 1;
        } else {
          right = middle;
        }
      }
      arr[left] = nums[i];
    }
  }
  return arr.length;
};
// @lc code=end
