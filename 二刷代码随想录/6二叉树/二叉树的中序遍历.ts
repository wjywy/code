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

  const middle = (node: TreeNode | null) => {
    if (node === null) return null;
    const recur = (root: TreeNode | null, result: number[]) => {
      if (root === null) return;
      if (root.left) recur(root.left, result);
      result.push(root.value);
      if (root.right) recur(root.right, result);
    };
    let result: number[] = [];
    recur(node, result);
  };
}
