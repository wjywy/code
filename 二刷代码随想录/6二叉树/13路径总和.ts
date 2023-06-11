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
   * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
   */

  const sumRoute = (root: TreeNode | null, targetSum: number): boolean => {
    if (root === null) return false;

    let helpStack: TreeNode[] = [];
    helpStack.push(root);
    let routeArr: number[] = [];
    routeArr.push(root.value);

    while (helpStack.length > 0) {
      let cur: TreeNode = helpStack.shift()!;
      let route: number = routeArr.shift()!;

      if (cur.left === null && cur.right === null) {
        if (route === targetSum) return true;
      }
      if (cur.left !== null) {
        helpStack.push(cur.left);
        routeArr.push(route + cur.left.value);
      }
      if (cur.right !== null) {
        helpStack.push(cur.right);
        routeArr.push(route + cur.right.value);
      }
    }

    return false;
  };
}
