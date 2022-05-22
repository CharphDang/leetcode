const { arr } = require('./array.js');

// 归并排序
// 时间复杂度：O(n * log2n)

// 概念：
// 归并排序（Merge sort）是建立在归并操作上的一种有效的排序算法。
// 该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。
// 作为一种典型的分而治之思想的算法应用，归并排序的实现由两种方法：
// 1. 自上而下的递归（所有递归的方法都可以用迭代重写，所以就有了第 2 种方法）；
// 2. 自下而上的迭代；
// 代价是需要额外的内存空间。

// 算法步骤：
// 1. 申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列；
// 2. 设定两个指针，最初位置分别为两个已经排序序列的起始位置；
// 3. 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置；
// 4. 重复步骤 3 直到某一指针达到序列尾；
// 5. 将另一序列剩下的所有元素直接复制到合并序列尾。

// 采用自上而下的递归方法
function mergeSort(arr) {  
  let len = arr.length;
  if(len === 1) {
      return arr;
  }
  let middle = Math.floor(len / 2),
      left = arr.slice(0, middle),
      right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

// Left and right are two ordered/sorted arrays
function merge(left, right)
{
  let result = [];

  while (left.length && right.length) {
      if (left[0] <= right[0]) {
          result.push(left.shift());
      } else {
          result.push(right.shift());
      }
  }

  while (left.length)
      result.push(left.shift());

  while (right.length)
      result.push(right.shift());

  return result;
}

console.log(mergeSort(arr)); // Charph-log
