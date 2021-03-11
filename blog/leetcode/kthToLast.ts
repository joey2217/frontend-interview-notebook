// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
//   }
// }

function kthToLast(head: ListNode | null, k: number): number {
  let first = head
  let second = head
  while (k>0) {
    first = first.next
    k--
  }
  while (first) {
    first = first.next
    second = second.next
  }
  return second.val 
};