/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) {
    return false;
  }
  const stack = [];
  const obj = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for (const str of s) {
    if (str in obj) {
      stack.push(obj[str]);
    } else {
      if (str !== stack.pop()) {
        return false;
      }
    }
  }
  return !stack.length;
};

// 时间复杂度 O(n)
// 空间复杂度 O(n)
// @lc code=end
