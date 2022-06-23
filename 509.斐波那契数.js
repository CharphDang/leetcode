/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // * 递归
  // if (n < 2) {
  //   return n;
  // }

  // return fib(n-1) + fib(n-2)
  // * 动态规划（递推）
  // 确认dp[i]是什么 ?
  // dp[i]的推导公式是什么？
  // dp[i]的初始值是什么？
  // const dp = [0,1];
  // for (let i = 2; i <=n; i++) {
  //   dp[i] = dp[i-1] + dp[i-2]
  // }
  // return dp[n]
  // * 递推优化, 使用两个变量来递推，空间复杂度的优化
  let a = 0;
  let b = 1;
  let result;
  if (n === 0) return a;
  if (n === 1) return b;
  for (let i = 2; i <= n; i++) {
    result = a + b;
    a = b;
    b = result;
  }
  return result
};
// @lc code=end
