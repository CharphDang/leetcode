// 时间复杂度O(n)
const twoSum = (nums, target) => {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (map.has(item)) {
      return [map.get(item), i];
    }
    map.set(target - item, i);
  }
};

// local test code
const arr = [2, 7, 11, 15];
const target = 9;
const result = twoSum(arr, target);
console.log(result);
