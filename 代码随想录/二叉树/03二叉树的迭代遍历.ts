namespace A {
  class TreeNode {
    public val: number;
    public left: TreeNode | null;
    public right: TreeNode | null;

    constructor(val: number, left: TreeNode | null, right: TreeNode | null) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

  // 前序遍历的迭代
  function frontTraver(node: TreeNode | null): number[] {
    if (node === null) return [];
    let helpStack: TreeNode[] = [];
    let curNode: TreeNode = node;
    let res: number[] = [];
    helpStack.push(curNode);

    while (helpStack.length > 0) {
      curNode = helpStack.pop()!;
      res.push(curNode.val);
      if (curNode.left !== null) helpStack.push(curNode.left);
      if (curNode.right !== null) helpStack.push(curNode.right);
    }
    return res;
  }

  // 中序遍历（迭代法）
  function inorderTraversal(root: TreeNode | null): number[] {
    let helperStack: TreeNode[] = [];
    let res: number[] = [];
    if (root === null) return res;
    let curNode: TreeNode | null = root;
    while (curNode !== null || helperStack.length > 0) {
      if (curNode !== null) {
        helperStack.push(curNode);
        curNode = curNode.left;
      } else {
        curNode = helperStack.pop()!;
        res.push(curNode.val);
        curNode = curNode.right;
      }
    }
    return res;
  }

  // 后序遍历（迭代法）
  function postorderTraversal(root: TreeNode | null): number[] {
    let helperStack: TreeNode[] = [];
    let res: number[] = [];
    let curNode: TreeNode;
    if (root === null) return res;
    helperStack.push(root);
    while (helperStack.length > 0) {
      curNode = helperStack.pop()!;
      res.push(curNode.val);
      if (curNode.left !== null) helperStack.push(curNode.left);
      if (curNode.right !== null) helperStack.push(curNode.right);
    }
    return res.reverse();
  }
}
