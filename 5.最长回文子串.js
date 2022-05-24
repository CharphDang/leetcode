/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function (s) {
  if (s.length <= 1) {//边界条件
      return s;
  }

  let start = 0;//最长回文子串开始的索引
  let maxLength = 1;//初始化最大回文子串长度

  function expandString(left, right) {
      //当s[left]，和 s[right]想等时，不断向外扩展回文字符串的长度
      while (left >= 0 && right < s.length && s[left] === s[right]) {
          if (right - left + 1 > maxLength) {
              maxLength = right - left + 1;//更新最大回文子串的长度
              start = left;//更新start的位置
          }
          left--;
          right++;
      }
  }

  for (let i = 0; i < s.length; i++) {
      expandString(i - 1, i + 1);//回文子串是奇数
      expandString(i, i + 1);//回文子串是偶数
  }

  return s.substring(start, start + maxLength);
};

// @lc code=end

