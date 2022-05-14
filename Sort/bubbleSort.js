const { arr } = require('./array.js');

// 冒泡
// 时间复杂度：O(n^2)
const bubbleSort = arr => {
  const len = arr.length;

  for (let j = 0; j < len; j++) {
    for (let i = 0; i < len - j; i++) {
      // if(arr[i] > arr[i+1]) {
      //   let temp = arr[i+1];
      //   arr[i+1] = arr[i];
      //   arr[i] = temp;
      //   temp = null;
      // }
      arr[i] > arr[i + 1] && ([arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]);
    }
  }

  return arr;
};

console.log(bubbleSort(arr)); // Charph-log