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
   * 某个节点两边子树高度加这个节点本来的高度1
   * @param root
   * @returns
   */
  /**
   * @param {TreeNode} root
   * @return {number}
   */
  /**
   * @param {TreeNode} root
   * @return {number}
   */
  var diameterOfBinaryTree = function (root) {
    let maxDiameter = 0;
    const dfs = (root) => {
      // 访问到空节点了，返回0
      if (root == null) return 0;
      // 左子树为根的子树的的深度
      let leftMax = dfs(root.left);
      let rightMax = dfs(root.right);
      maxDiameter = Math.max(maxDiameter, leftMax + rightMax);
      // 返回该节点为根的子树的的深度
      return Math.max(leftMax, rightMax) + 1;
    };
    dfs(root);
    return maxDiameter;
  };
}
