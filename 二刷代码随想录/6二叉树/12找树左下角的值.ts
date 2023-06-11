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
   * 给定一个二叉树，在树的最后一行找到最左边的值： 层序遍历
   * @param root
   * @returns
   */
  const leftBottom = (root: TreeNode | null): number => {
    if (root === null) return 0;

    let helpStack: TreeNode[] = [];
    helpStack.push(root);
    let val: number = 0;

    while (helpStack.length > 0) {
      let length = helpStack.length;
      val = helpStack[0].value; /**最后一排的最后一个 */

      for (let i = 0; i < length; i++) {
        let cur: TreeNode = helpStack.shift()!;
        if (cur.left !== null) helpStack.push(cur.left);
        if (cur.right !== null) helpStack.push(cur.right);
      }
    }
    return val;
  };
}
