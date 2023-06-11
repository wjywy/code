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
   * 节点A的左孩子不为空，且左孩子的左右孩子都为空（说明是叶子节点），那么A节点的左孩子为左叶子节点
   * @param node
   */
  const sumLeft = (root: TreeNode | null): number => {
    if (root === null) return 0;

    let sum: number = 0;
    let helpStack: TreeNode[] = [];
    helpStack.push(root);

    while (helpStack.length > 0) {
      let length: number = helpStack.length;

      for (let i = 0; i < length; i++) {
        let cur: TreeNode = helpStack.pop()!;
        if (
          cur.left !== null &&
          cur.left.left === null &&
          cur.left.right === null
        ) {
          sum = sum + cur.left.value;
        }

        if (cur.left !== null) {
          helpStack.push(cur.left);
        }
        if (cur.right !== null) {
          helpStack.push(cur.right);
        }
      }
    }

    return sum;
  };
}
