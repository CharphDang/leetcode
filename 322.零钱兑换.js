/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 动态规划 （递推思想）
// [1,2,5] 11  硬币个数：dp[11]
// 10 + 1, 硬币个数：dp[10] + 1
// 9 + 2, 硬币个数：dp[9] + 1
// 5 + 6, 硬币个数：dp[5] + 1
// dp[n] = dp[n-coins[i]] + 1
var coinChange = function (coins, amount) {
  if (amount === 0) return 0;
  // amount + 1 的原因是因为需要求的是dp[n]，那么dp的实际长度就应该是n+1
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < coins.length; i++) {
    // 针对每一种硬币开启一层循环
    for (let j = coins[i]; j <= amount; j++) {
      // 由硬币coins[i]来单独拼amount，推算出dp[amount]的时候，
      // 是Infinity 还是 real number

      // * 非第一层循环的时候，如果dp[j]小于第一层中算出来的，会覆盖掉，取二者较小的值存入
      dp[j] = Math.min(dp[j-coins[i]] + 1, dp[j]);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
// @lc code=end
