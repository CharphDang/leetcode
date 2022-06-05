/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// const isRepeat = (resultArr, currentArr) => {
//   if(!resultArr.length) return false;
//   const flagArrs = resultArr.filter(arr => {
//     const arrSet1 = new Set(arr);
//     const arrSet2 = new Set(currentArr);
//     if (arrSet1.size !== arrSet2.size) return false;

//     return [...arrSet1.values()].every(val => arrSet2.has(val));
//   });
//   return flagArrs.some(flag => flag);
// };

// var threeSum = function (nums) {
//   const len = nums.length;
//   let resultArr = [];
//   for (let i = 0; i < len; i++) {
//     const number1 = nums[i];
//     for (let j = i + 1; j < len; j++) {
//       const number2 = nums[j];
//       for (let k = j + 1; k < len; k++) {
//         const number3 = nums[k];
//         if (number1 + number2 + number3 === 0) {
//           const currentArr = [number1, number2, number3];
//           if (!isRepeat(resultArr, currentArr)) {
//             resultArr.push(currentArr);
//           }
//         }
//       }
//     }
//   }
//   return resultArr;
// };

// threeSum([-1,0,1,2,-1,-4]);

// var threeSum = function (nums) {
//   const len = nums.length;
//   const map = {};
//   const arr = [];
//   for (let i = 0; i < len; i++) {
//     const number = nums[i];
//     const newSum = 0 - number;
//     for (let j = i + 1; j < len; j++) {
//       const needNumber = newSum - nums[j];
//       if (map[needNumber] !== undefined) {
//         arr.push([nums[i], nums[j], needNumber]);
//       } else {
//         map[needNumber] = nums[j];
//       }
//     }
//   }
//   return arr;
// };

var threeSum = function (nums) {
  nums.sort((pre, next) => pre - next);
  const len = nums.length;
  const arr = [];
  for (let i = 0; i < len; i++) {
    let left = i + 1;
    let right = len - 1;
    if(i > 0 && nums[i] === nums[i-1]) {
      continue;
    }
    while (left < right) {
      if (nums[left] + nums[right] + nums[i] > 0) {
        right--;
      } else if (nums[left] + nums[right] + nums[i] < 0) {
        left++;
      } else {
        // while 中，先逻辑操作，再指针移动
        arr.push([nums[left], nums[right], nums[i]]);
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[left - 1]) {
          right--;
        }
        left++;
        right--;
      }
    }
  }
  return arr;
};
// @lc code=end
