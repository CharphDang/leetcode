/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 利用一个备忘录，cache来缓存已有遍历过的节点，如果后续有相同的，则证明是环形链表。
// 时间复杂度： O(n)，遍历链表长度n
// 空间复杂度: O(n)，Set和映射表一样占用内存，跟随链表长度n呈线性增长
// var hasCycle = function(head) {
//     let cache = new Set();
//     while(head) {
//         if (cache.has(head)) {
//             return true;
//         } else {
//             cache.add(head);
//         }
//         head = head.next;
//     }
//     return false;
// };

// 利用双指针，快慢指针判断，注意边界判断，fast & fast.next 存在才会进入循环。
// 时间复杂度： O(n)
// 空间复杂度：O(1)
var hasCycle = function(head) {
  let fast = head;
  let slow=head;
  while(fast && fast.next) {
      fast=fast.next.next;
      slow=slow.next;
      if(fast === slow) return true;
  }
  return false;
};

// @lc code=end

