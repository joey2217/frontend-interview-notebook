// https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isSymmetric(root: TreeNode | null): boolean {
  return root == null ? true : recur(root.left, root.right);
}

function recur(L: TreeNode | null, R: TreeNode | null): boolean {
  if (L == null && R == null) return true;
  if (L == null || R == null || L.val != R.val) return false;
  return recur(L.left, R.right) && recur(L.right, R.left);
}
