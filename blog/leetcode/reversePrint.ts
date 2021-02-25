class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function reversePrint(head: ListNode | null): number[] {
  if (!head) {
    return []
  }
  const list = []
  while (head) {
    list.unshift(head.val)
    head = head.next
  }
  return list
}
