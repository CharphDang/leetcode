/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  let num = 0;
  let len = columnTitle.length - 1;
  // 思路解析： 十进制的思想 423 => 3 * 10 ^ 0 + 2 * 10 ^ 1 + 4 * 10 ^ 2
  // 我们这块为26进制
  for (var i = len; i >= 0; i--) {
    num = num + (columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1) * Math.pow(26, len - i);
  }
  return num;
};
// @lc code=end

