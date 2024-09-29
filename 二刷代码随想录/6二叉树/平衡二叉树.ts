/**
 * 给你一棵树，判断是否是高度平衡的二叉树
 * 高度平衡二叉树的定义：一颗二叉树每个节点的左右两个子树的高度差的绝对值不超过1
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

  const judgeTree = (root: TreeNode | null) => {
    if (root === null) return true;

    // 二叉树的最大高度
    const maxDepth = (root: TreeNode | null) => {
      const recur = (root: TreeNode | null, count: number) => {
        if (root === null) return 0;

        let left: number = recur(root.left, count + 1);
        let right: number = recur(root.right, count + 1);
        return Math.max(left, right) + 1;
      };
      return recur(root, 0);
    };

    let helpStack: TreeNode[] = [];
    helpStack.push(root);

    while (helpStack.length > 0) {
      let cur = helpStack.pop()!;
      if (Math.abs(maxDepth(cur.left) - maxDepth(cur.right)) > 1) {
        return false;
      }

      if (cur.left !== null) {
        helpStack.push(cur.left);
      }
      if (cur.right !== null) {
        helpStack.push(cur.right);
      }
    }
    return true;
  };
}
