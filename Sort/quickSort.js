const { arr } = require('./array.js');

// 快速排序

// 给数组找一个标志位，比如我，所有人都给我比个头，比我高的，站我右边
// 比我矮的，占我左边
// 时间复杂度：O(n * lgn)
// 空间复杂度：O(n * lgn)
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let flag = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > flag) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return quickSort(left).concat(flag, quickSort(right));
}

console.log(quickSort(arr)); // Charph-log

// 原地快排
// i->   <-j
// [d,a,b,c,e,f,g,h]
// i找到一个比e大的
// j找到一个比e小的
// i和j的值交换一下位置
// 到最后i和j遇见

// 空间复杂度变成了O1
function exchange(arr, start, end) {
  const init = start;
  const flag = arr[init];
  start++;
  while (start <= end) {
    while (arr[start] < flag) {
      start++;
    }
    while (arr[end] > flag) {
      end--;
    }
    if (start < end) {
      [arr[end], arr[start]] = [arr[start], arr[end]];
      start++;
      end--;
    }
  }
  // 因为在while循环结束时，start 是多自增了一次，正确的比flag小的最后一个位置在start--
  start--;
  [arr[init], arr[start]] = [arr[start], arr[init]];
  return start;
}

function quickSort1(arr, start, end) {
  if (start < end) {
    const middle = exchange(arr, start, end); // flag 标识位的下标
    quickSort1(arr, start, middle);
    quickSort1(arr, middle + 1, end); // flag 标识位的下标 + 1, 如果不 +1, 递归便会陷入死循环，因为它又会作为flag，但是它右侧的值都是比它大的
  }
  return arr;
}

console.log('原地快速排序', quickSort1(arr, 0, arr.length - 1));
