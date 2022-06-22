/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// * 田忌赛马,贪心
// 1. 先两对数组分别进行排序
// 2. 两边从最大的开始遍历，尽可能把最大的饼干给胃口最大的且能吃饱的孩子

var findContentChildren = function (g, s) {
  const sortedG = g.sort((pre, next) => pre - next);
  const sortedS = s.sort((pre, next) => pre - next);
  let index = sortedS.length - 1;
  let result = 0;
  for (let i = sortedG.length - 1; i >= 0; i--) {
    if (sortedG[i] <= sortedS[index] && index >= 0) {
      result++;
      index--;
    }
  }
  return result;
};
// @lc code=end
