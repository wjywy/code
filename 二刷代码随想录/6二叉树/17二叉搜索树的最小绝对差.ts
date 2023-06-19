/**
 * 二叉搜索树的最小绝对差：
 * 给你一颗所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值
 */

/**
 * 关键就是二叉搜索树
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

  const min = (root: TreeNode | null): number => {
    if (root === null) return 0;
    let helpNumber: number[] = [];
    let res = Infinity;
    const recur = (node: TreeNode | null) => {
      if (node === null) return 0;
      recur(node.left);
      helpNumber.push(node.value);
      if (helpNumber.length === 2) {
        let one: number = helpNumber.shift()!;
        let two: number = helpNumber.shift()!;
        res = res > two - one ? two - one : res;
        helpNumber.push(two);
      }
      recur(node.right);
    };
    recur(root);
    return res;
  };
}
