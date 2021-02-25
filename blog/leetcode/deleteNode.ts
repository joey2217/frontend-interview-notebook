// https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function deleteNode(head: ListNode | null, val: number): ListNode | null {
  if (head == null) {
    return null
  }
  if (head.val === val) {
    return head.next
  }
  let perv = head
  let cur = head.next
  while (perv.next) {
    if (cur.val === val) {
      if (cur.next) {
        perv.next = cur.next
      } else {
        perv.next = null
      }
      break
    }
    let temp = cur
    perv = cur
    cur = temp.next
  }
  return head
}
