/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//  复杂度：
//  时间复杂度：O(n^2)，数组长度是n，算法大概执行了多少次
//  空间复杂度 O(1)，i 和 j都是一个普通的数字
//  暴力求解，双层遍历
// var twoSum = function(nums, target) {
//  for(let i = 0; i<nums.length; i++) {
//      for(let j= 0; j<nums.length; j++) {
//          if (i !==j && nums[i] + nums[j] === target) {
//              return [i,j]
//          }
//      }
//  }
// };

// 复杂度：
// 时间复杂度：O(n)
// 空间复杂度 O(n),obj本身是一个哈希表，是O(n)，for循环中的num,n等变量都是常量，每次循环后没有引用，后面就会被垃圾处理机制回收干掉，所以每次声明都是O(1)，每次又被干掉。i 变量是一个变量，存储普通的数字，每次循环都更改它的值，属于O(1)
// 制作一个登记表：obj, 每个数字来的时候，把自己的需求存到表中，需要n，所以就是obj[n]=i;把自己的联系方式留下来，当另一个数字来的时候，发现自己被需要，num in obj，就可以凑成一对了，i 和 obj[num] 两个联系方式。
var twoSum = function(nums, target) {
  var obj = {};
  for(let i = 0; i<nums.length; i++) {
      let num = nums[i];
      let n = target - num;
      if (num in obj){
          return [i, obj[num]];
      } else {
          obj[n] = i;
      }
  }
 };
 
// @lc code=end

