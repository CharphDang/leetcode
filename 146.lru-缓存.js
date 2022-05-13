/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
  this.cache = new Map();
  this.capacity = capacity;
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if(this.cache.has(key)) {
      // 每次被get访问用到的节点，需要删除其在链表的原位置，提到顶端的位置去，意味着，它被常常使用。在Map结构中，我们和实际的链表刚好相反，我们提到末尾去。
      let val = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key,val);
      return val;
  } 
  return -1;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if(this.cache.has(key)){
      this.cache.delete(key);
  } else {
      if(this.cache.size >= this.capacity) {
          // 呼应上面的注释，我们把最常用的放在了Map的尾部，那么最不常用的，就在Map的首部，所以，再超过capacity的时候，我们需要重首部移除最不常用的节点，然后尾部add新节点
          this.cache.delete(this.cache.keys().next().value)
      } 
  }
  this.cache.set(key,value);
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/

// @lc code=end

