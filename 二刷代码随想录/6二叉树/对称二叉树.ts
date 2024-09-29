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

  const isSymmetric = (root: TreeNode | null) => {
    if (root === null) return false;

    let helpQueue: TreeNode[] = [];
    helpQueue.push(root.left!);
    helpQueue.push(root.right!);

    while (helpQueue.length > 0) {
      let curLeft = helpQueue.shift()!;
      let curRight = helpQueue.shift()!;

      if (curLeft === null && curRight === null) return true;
      if (curLeft === null || curRight === null) return false;
      if (curLeft.value !== curRight.value) return false;
      //   if (curLeft.left === curRight.right) {
      helpQueue.push(curLeft.left!);
      helpQueue.push(curRight.right!);
      helpQueue.push(curLeft.right!);
      helpQueue.push(curRight.left!);
      //   }
    }

    return true;
  };
}
