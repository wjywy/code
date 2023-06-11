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
   * 二叉树的所有路径
   * @param node
   */
  const allRoute = (node: TreeNode | null): string[] => {
    if (node === null) return [];

    let helpStack: TreeNode[] = [];
    helpStack.push(node);
    let routeArr: string[] = [];
    routeArr.push(String(node.value));
    let result: string[] = [];

    while (helpStack.length > 0) {
      let curNode: TreeNode = helpStack.shift()!;
      let route: string = routeArr.shift()!;

      if (curNode.left === null && curNode.right === null) {
        result.push(route);
      }

      if (curNode.left !== null) {
        helpStack.push(curNode.left);
        routeArr.push(`${route} ->${curNode.left.value}`);
      }
      if (curNode.right !== null) {
        routeArr.push(`${route} -> ${curNode.right.value}`);
      }
    }

    return routeArr;
  };
}
