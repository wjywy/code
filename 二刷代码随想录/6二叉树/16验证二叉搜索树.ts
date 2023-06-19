/**
 * 验证二叉搜索树:给定一个二叉树，判断其是否是一个有效的二叉搜索树
 */

namespace A {
  class TreeNode {
    public value: number;
    public left: TreeNode | null;
    public right: TreeNode | null;
    constructor(
      value: number,
      left?: TreeNode | null,
      right?: TreeNode | null
    ) {
      this.value = value === undefined ? 0 : value;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

  const confirmTree = (root: TreeNode): boolean => {
    if (root === null) return false;

    let res: number[] = [];
    const recur = (node: TreeNode | null, res: number[]) => {
      if (node === null) return false;
      recur(node.left, res);
      res.push(node.value);
      recur(node.right, res);
    };
    recur(root, res);

    for (let i = 1; i < res.length; i++) {
      if (res[i] <= res[i - 1]) {
        return false;
      }
    }

    return true;
  };
}
