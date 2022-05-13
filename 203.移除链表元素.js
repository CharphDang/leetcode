/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
//  常规链表的循环遍历操作
// 小技巧： 设置一个哨兵元素，可以安全的操作，不用去head是不是会被移除了。
// 哨兵=>1=>2=>3 
// return 哨兵.next

// 时间复杂度：O(n), 其中 n 是链表的长度, 需要遍历链表一次。
// 空间复杂度：O(1)
// var removeElements = function(head, val) {
//     let ele = {
//         next: head
//     }
//     let p = ele;
//     while(p.next){
//         if(p.next.val === val ) {
//             p.next = p.next.next
//         } else {
//             p = p.next;
//         }
//     }
//     return ele.next;
// };

// 递归方式
// 时间复杂度：O(n)，其中 n 是链表的长度。递归过程中需要遍历链表一次。
// 空间复杂度：O(n)，其中 n 是链表的长度。空间复杂度主要取决于递归调用栈，一般的递归算法就要有O(n)的空间复杂度了,因为每次递归都要存储返回信息
var removeElements = function(head, val) {
  if(head === null) {
      return head;
  }
  head.next = removeElements(head.next, val);
  return head.val === val ? head.next: head;
};

// @lc code=end

