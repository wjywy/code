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
   * 给定一个二叉树，找出其最小深度
   * @param node
   * @returns
   */
  /**迭代，层序遍历 */

  const everyMinTree = (root: TreeNode | null): number => {
    if (root === null) return 0;

    let helpStack: TreeNode[] = [];
    let count: number = 0;
    helpStack.push(root);

    while (helpStack.length > 0) {
      let length = helpStack.length;
      count++;
      for (let i = 0; i < length; i++) {
        let curNode: TreeNode = helpStack.shift()!;

        if (curNode.left === null && curNode.right === null) {
          return count;
        } else {
          if (curNode.left !== null) {
            helpStack.push(curNode.left);
          }
          if (curNode.right !== null) {
            helpStack.push(curNode.right);
          }
        }
      }
    }

    return count;
  };
}
