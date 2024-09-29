namespace A {
  class TreeNode {
    public value: number;
    public left: TreeNode | null;
    public right: TreeNode | null;

    constructor(
      value: number,
      left?: TreeNode | null,
      right?: TreeNode | null
    ) {
      this.value = value === undefined ? 0 : value;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

  const createTree = (preTree: number[], inTree: number): TreeNode | null => {
    if (preTree.length === 0) {
      return null;
    }
  };
}
