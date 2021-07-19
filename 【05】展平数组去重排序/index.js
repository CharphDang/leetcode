const arr = [2, 3, 6, 1, [5, 6, 9, [1, 2], 3], 3, [1, 2], 10]

// 展平数组 和 去重 -> 排序
for (const [index, item] of arr.entries()) {
  if (Array.isArray(item)) {
    for (const key of item) {
      arr.push(key)
    }
    arr.splice(index, 1)
  }
}

const newArrSet = [...new Set(arr)]

newArrSet.sort((pre, next) => {
  return pre - next
})

console.log(newArrSet) // Charph-log

// * es6 中 flat方法
const arr2 = [2, 3, 6, 1, [5, 6, 9, [1, 2], 3], 3, [1, 2], 10]
console.log(arr2.flat(1)) // *只展平一层 Charph-log
console.log(arr2.flat(Infinity)) // *无论多少层都展开 Charph-log
