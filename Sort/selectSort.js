const { arr } = require('./array.js');

// 选择排序 - 和冒泡算法对比，选择排序减少了交换次数
// 时间复杂度：O(n²)

// 概念：
// 选择排序（Selection sort）是一种简单直观的排序算法。
// 它的工作原理是：第一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，
// 然后再从剩余的未排序元素中寻找到最小（大）元素，然后放到已排序的序列的末尾。
// 以此类推，直到全部待排序的数据元素的个数为零。 选择排序是不稳定的排序方法。

// 算法步骤：
// 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。
// 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
// 重复第二步，直到所有元素均排序完毕。


const selectSort = arr => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
};

console.log(selectSort(arr)); // Charph-log
