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
   * Definition for a binary tree node.
   * function TreeNode(val) {
   *     this.val = val;
   *     this.left = this.right = null;
   * }
   */
  /**
   * @param {TreeNode} root
   * @return {number}
   */
  var maxDepth = function (root) {
    if (!root) {
      return 0;
    } else {
      const left = maxDepth(root.left);
      const right = maxDepth(root.right);
      return Math.max(left, right) + 1;
    }
  };
}
