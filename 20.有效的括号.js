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
  const arr = []
  const obj = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  for (const str of s) {
    if (str in obj) {
      arr.push(obj[str])
    } else {
      if (str !== arr.pop()) {
        return false
      }
    }
  }
  return arr.length === 0
}

// 时间复杂度 O(n)
// 空间复杂度 O(n)
// @lc code=end

