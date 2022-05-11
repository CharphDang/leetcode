/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// 时间复杂度: O(n)
// 空间复杂度: O(n)
// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = [];
  const childPathArr = path.split('/');
  const excludeStringArr = ['', '.', '..'];
  
  for (const childPath of childPathArr) {
    !excludeStringArr.includes(childPath) && stack.push(childPath);
    childPath === '..' && stack.pop();
  }

  const correctPath = '/' + stack.join('/');
  
  return correctPath;
};
// @lc code=end
