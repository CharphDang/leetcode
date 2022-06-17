/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// 利用回溯的逻辑来走遍所有的可能情况
// 输入：board = [
//   ["A","B","C","E"],
//   ["S","F","C","S"],
//   ["A","D","E","E"]
// ], word = "ABCCED"
// 输出：true

var exist = function (board, word) {
  // 定义大边界
  if (board.length === 0) {
    return false;
  }

  if (word.length === 0) {
    return true;
  }

  const rows = board.length;
  const columns = board[0].length;

  for (var i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      // 每个值都可以作为起点
      // const startVal = board[i][j];
      // const count = 0;
      const isExist = find(i, j, 0);
      if (isExist) {
        return true;
      }
    }
  }
  return false;

  function find(i, j, count) {
    // 定义越界条件
    if (i < 0 || i >= rows) {
      return false;
    }
    if (j < 0 || j >= columns) {
      return false;
    }
    const currentLetter = board[i][j];
    if (currentLetter !== word[count]) {
      return false;
    }

    if (count === word.length - 1) {
      return true;
    }
    // 选择当前的字母，先定义为null,保证当前为基准的下一步find，不会找到重复的自己
    board[i][j] = null;
    // 进行下一步 有一个找到就算
    const isExist =
      find(i, j + 1, count + 1) ||
      find(i, j - 1, count + 1) ||
      find(i + 1, j, count + 1) ||
      find(i - 1, j, count + 1);
    // 回撤
    board[i][j] = currentLetter;
    return isExist;
  }
};
// @lc code=end
