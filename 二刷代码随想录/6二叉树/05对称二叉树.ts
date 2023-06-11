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
   * 判断是否是对称二叉树。判断左节点和右节点的对应关系
   */
  const similar = (node: TreeNode | null): Boolean => {
    if (node === null) return false;

    let helpQueue: TreeNode[] = [];
    helpQueue.push(node.left!);
    helpQueue.push(node.right!);

    while (helpQueue.length > 0) {
      let leftCur: TreeNode = helpQueue.shift()!;
      let rightCur: TreeNode = helpQueue.shift()!;

      if (leftCur === null && rightCur === null) return true;
      if (leftCur === null || rightCur === null) return false;
      if (leftCur.value !== rightCur.value) return false;

      helpQueue.push(leftCur.left!);
      helpQueue.push(rightCur.right!);
      helpQueue.push(leftCur.right!);
      helpQueue.push(rightCur.left!);
    }
    return true;
  };
}
