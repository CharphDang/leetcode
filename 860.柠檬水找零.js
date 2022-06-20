/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
// 顾客给5， 直接进帐
// 给10， 找5
// 给20，找 10+5 或者5+5+5
// 在20的情况下，小小的使用贪心算法，先找最大的10，如果没有再找5
var lemonadeChange = function (bills) {
  let fiveNumber = 0;
  let tenNumber = 0;
  for (let i = 0; i < bills.length; i++) {
    const money = bills[i];
    if (money === 5) {
      fiveNumber += 1;
    } else if (money === 10) {
      if (fiveNumber > 0) {
        fiveNumber -= 1;
        tenNumber += 1;
      } else {
        return false;
      }
    } else {
      // 顾客给20
      if ((tenNumber > 0) & (fiveNumber > 0)) {
        tenNumber -= 1;
        fiveNumber -= 1;
      } else if (fiveNumber > 2) {
        fiveNumber -= 3;
      } else {
        return false
      }
    }
  }
  return true;
};
// @lc code=end
