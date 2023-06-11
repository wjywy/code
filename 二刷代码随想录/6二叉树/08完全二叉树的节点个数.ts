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

  /**
   * 给出一个完全二叉树，求出该树的节点个数
   * @param node
   */
  /**递归法，前序遍历 */
  const allTree = (root: TreeNode | null): number => {
    if (root === null) return 0;

    let count: number = 0;

    const recur = (root: TreeNode | null) => {
      if (root === null) {
        return;
      }
      count++;
      recur(root.left);
      recur(root.right);
    };
    recur(root);

    return count;
  };

  /**迭代法，额基本没啥变动，可以前序遍历层序遍历等等，就不写了 */
}
