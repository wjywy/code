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
   * 前序遍历
   * @param node
   * @returns
   */
  const frontReverse = (node: TreeNode | null) => {
    if (node === null) return false;
    let helpStack: TreeNode[] = [];
    let result: number[] = [];
    helpStack.push(node);

    while (helpStack.length > 0) {
      let cur = helpStack.pop()!;
      result.push(cur.value);
      if (cur.left !== null) {
        helpStack.push(cur.left);
      }
      if (cur.right !== null) {
        helpStack.push(cur.right);
      }
    }

    return result;
  };

  // const middleReverse = (node: TreeNode | null) => {
  //   if (node === null) return false;

  //   let helpStack: TreeNode[] = [];
  //   let result: number[] = [];
  //   let curNode: TreeNode | null = node;

  //   while (helpStack.length > 0 || curNode !== null) {
  //     if (curNode !== null) {
  //       helpStack.push(curNode);
  //       curNode = curNode.left;
  //     } else {
  //       curNode = helpStack.pop()!;
  //       result.push(curNode.value);
  //       curNode = curNode.right;
  //     }
  //   }

  //   return result;
  // };

  const middle = (root: TreeNode | null) => {
    if (root === null) return null;

    let result: number[] = [];
    let helpStack: TreeNode[] = [];
    let curNode: TreeNode | null = root;

    while (helpStack.length > 0 || curNode !== null) {
      if (curNode !== null) {
        curNode = curNode.left;
      } else {
        curNode = helpStack.pop()!;
        result.push(curNode.value);
        curNode = curNode.right;
      }
    }

    return result;
  };
}
