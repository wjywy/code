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
   * 递归的话更多是用前序遍历的方式，如果采用迭代法的更多还是采用层序遍历会好一点
   * @param node
   * @returns
   */
  const maxDepth = (node: TreeNode | null): number => {
    if (node === null) return 0;
    let count: number = 0;
    let res: number = 0;
    const depth = (root: TreeNode | null, count: number) => {
      if (root === null) {
        res = res >= count ? res : count;
        return;
      }

      depth(root.left, count++);
      depth(root.right, count++);
    };
    depth(node, count);
    return res;
  };
}
