// https://leetcode-cn.com/problems/remove-duplicate-node-lcci/
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeDuplicateNodes(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null
  }
  const nodeSet = new Set()
  nodeSet.add(head.val)
  let node = head
  while (node.next) {
    let curNode = node.next
    if (nodeSet.has(curNode.val)) {
      node.next = curNode.next
    } else {
      nodeSet.add(curNode.val)
      node = curNode
    }
  }
  return head
}
