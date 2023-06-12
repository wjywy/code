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

  /**
   * 合并二叉树，给定两个二叉树，需要将它们合并为一个新的二叉树，如果两个节点重合，则将它们的值相加作为节点合并后的新值，否则不为NULL的节点将直接作为新二叉树的节点
   * 这里以第一棵树作为合并后的树，采用前序遍历
   */
  const mergeTree = (
    tree1: TreeNode | null,
    tree2: TreeNode | null
  ): TreeNode | null => {
    if (tree1 === null && tree2 === null) {
      return null;
    }
    if (tree1 === null) {
      return tree2;
    }
    if (tree2 === null) return tree1;

    let helpStack1: (TreeNode | null)[] = [];
    helpStack1.push(tree1);
    let helpStack2: (TreeNode | null)[] = [];
    helpStack2.push(tree2);

    while (helpStack1.length > 0 && helpStack2.length > 0) {
      let cur1: TreeNode | null = helpStack1.shift()!;
      let cur2: TreeNode | null = helpStack2.shift()!;

      cur1.value += cur2.value;

      if (cur1.left !== null && cur2.left !== null) {
        helpStack1.push(cur1.left);
        helpStack2.push(cur2.left);
      } else if (cur1.left === null) {
        cur1.left = cur2.left;
      }
      if (cur1.right !== null && cur2.right !== null) {
        helpStack1.push(cur1.right);
        helpStack2.push(cur2.right);
      } else if (cur1.right === null) {
        cur1.right = cur2.right;
      }
    }

    return tree1;
  };
}
