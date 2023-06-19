/**
 * 给定二叉搜索树的根节点和一个值。你需要在BST中找到节点值等于给定值的节点。返回以该节点为根的子树。如果节点不存在，则返回NULL
 */

namespace A {
  class TreeNode {
    public value: number;
    public left: TreeNode | null;
    public right: TreeNode | null;

    constructor(value: number, left: TreeNode | null, right: TreeNode | null) {
      this.value = value === undefined ? 0 : value;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

  const searchTree = (root: TreeNode | null, val: number): TreeNode | null => {
    if (root === null) return null;
    let helpNode: TreeNode[] = [];
    const recur = (node: TreeNode | null, target: number) => {
      if (node === null) return null;

      recur(node.left, target);
      if (node.value === target) helpNode.push(node);
      recur(node.right, target);
    };
    recur(root, val);
    return helpNode[0] === undefined ? null : helpNode[0];
  };
}
