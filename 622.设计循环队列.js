/*
 * @lc app=leetcode.cn id=622 lang=javascript
 *
 * [622] 设计循环队列
 */
// 循环队列就是将 队列 存储空间的最后一个位置绕到第一个位置，
// 形成逻辑上的环状空间，供队列循环使用。
// 在循环队列结构中，当存储空间的最后一个位置已被使用而再要进入队运算时，只需要存储空间的第一个位置空闲，
// 便可将元素加入到第一个位置，即将存储空间的第一个位置作为队尾。
// [1] 循环队列可以更简单防止伪溢出的发生，但队列大小是固定的。
// 在循环队列中，当队列为空时，有front=rear，而当所有队列空间全占满时，也有front=rear。
// 为了区别这两种情况，规定循环队列最多只能有MaxSize-1个队列元素，当循环队列中只剩下一个空存储单元时，队列就已经满了。
// 因此，队列判空的条件是front=rear，而队列判满的条件是front=（rear+1)%MaxSize。

// @lc code=start
/**
 * @param {number} k
 */

// Solution: 1, condition: 当循环队列中只剩下一个空存储单元时，队列就已经满了。
// var MyCircularQueue = function (k) {
//   this.queue = new Array(k);
//   this.capacity = k;
//   this.head = 0;
//   this.tail = 0;
// };

// /**
//  * @param {number} value
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.enQueue = function (value) {
//   if (this.isFull()) {
//     return false;
//   } else {
//     this.queue[this.tail] = value;
//     this.tail = (this.tail + 1) % this.capacity;
//     return true;
//   }
// };

// /**
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.deQueue = function () {
//   if (this.isEmpty()) {
//     return false;
//   } else {
//     this.queue[this.head] = undefined;
//     this.head = (this.head + 1) % this.capacity;
//     return true;
//   }
// };

// /**
//  * @return {number}
//  */
// MyCircularQueue.prototype.Front = function () {
//   return this.isEmpty() ? -1 : this.queue[this.head];
// };

// /**
//  * @return {number}
//  */
// MyCircularQueue.prototype.Rear = function () {
//   return this.isEmpty() ? -1 : this.queue[(this.tail + this.capacity -1) % this.capacity];
// };

// /**
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.isEmpty = function () {
//   return this.head === this.tail;
// };

// /**
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.isFull = function () {
//   return (this.tail + 1) % this.capacity === this.head;
// };

// Solution: 2, condition: 存储满才算队列满， 和solution1不同之处在于判断isEmpty,isFull的条件不同
var MyCircularQueue = function (k) {
  this.queue = new Array(k);
  this.capacity = k;
  this.head = 0;
  this.tail = 0;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) {
    return false;
  } else {
    this.queue[this.tail] = value;
    this.tail = (this.tail + 1) % this.capacity;
    return true;
  }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) {
    return false;
  } else {
    this.queue[this.head] = undefined;
    this.head = (this.head + 1) % this.capacity;
    return true;
  }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.isEmpty() ? -1 : this.queue[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  return this.isEmpty() ? -1 : this.queue[(this.tail + this.capacity - 1) % this.capacity];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.head === this.tail && !this.queue[this.head];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.head === this.tail && !!this.queue[this.head];
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end
