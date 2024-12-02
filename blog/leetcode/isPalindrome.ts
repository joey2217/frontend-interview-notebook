class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function isPalindrome(head: ListNode | null): boolean {
  const valList: number[] = []
  while (head !== null) {
    valList.push(head.val)
    head = head.next
  }
  for (let i = 0, j = valList.length - 1; i < j; ++i, --j) {
    if (valList[i] !== valList[j]) {
      return false;
    }
  }
  return true
};