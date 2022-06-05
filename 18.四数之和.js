/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

// const isRepeat = (resultArr, currentArr)=>{
//   const currentArrSet = new Set(currentArr);
//   const flagArr = resultArr.map((arr)=>{
//     const arrSet = new Set(arr);
//     if(currentArrSet.size !== arrSet.size) return false;
//     return [...currentArrSet].every((val)=> arrSet.has(val))
//   })
//   return flagArr.some(flag=> flag)
// }

var fourSum = function (nums, target) {
  // double loops + double pointers
  const len = nums.length;
  if (len < 4) return [];
  if (len < 5) {
    return nums.reduce((pre, next) => pre + next) === target ? [nums] : [];
  }
  const arr = [];
  nums.sort((pre, next) => pre - next);
  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < len; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      let left = j + 1;
      let right = len - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          const currentArr = [nums[i], nums[j], nums[left], nums[right]];
          // if(!isRepeat(arr, currentArr)) {
          arr.push(currentArr);
          // }
          while (nums[left] === nums[left + 1]) {
            left++;
          }
          while (nums[right] === nums[right - 1]) {
            right--;
          }

          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return arr;
};

fourSum([2, -4, -5, -2, -3, -5, 0, 4, -2], -14);
// @lc code=end
