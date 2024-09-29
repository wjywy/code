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

  const everyTree = (root: TreeNode | null) => {
    if (root === null) return null;

    let helpStack: TreeNode[] = [];
    helpStack.push(root);
    let result: number[][] = [];

    while (helpStack.length > 0) {
      let someResult: number[] = [];
      const length = helpStack.length;
      for (let i = 0; i < length; i++) {
        let curNode = helpStack.shift()!;
        someResult.push(curNode.value);
        if (curNode.left !== null) helpStack.push(curNode.left);
        if (curNode.right !== null) helpStack.push(curNode.right);
      }
      result.push(someResult);
    }
    return result;
  };
}
