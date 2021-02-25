// https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev = null 
  let cur = head
  let next = null
  while (cur) {
    next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}
