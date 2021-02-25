// https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  const nodeArr = [];
  let temp = head;
  while (temp) {
    nodeArr.push(temp);
    temp = temp.next;
  }
  if (k >= nodeArr.length) {
    return head;
  }
  const i = nodeArr.length - k
  return nodeArr[i] 
}
