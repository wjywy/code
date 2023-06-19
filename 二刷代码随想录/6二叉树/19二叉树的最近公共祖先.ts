namespace A {
  /**
   * 给定一个二叉树，找到该树中两个指定节点的最近公共祖先
   */
  class TreeNode {
    public val: number;
    public left: TreeNode | null;
    public right: TreeNode | null;

    constructor(val: number, left: TreeNode | null, right: TreeNode | null) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

  const minDistance = (
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
  ) => {
    if (root === null || root === p || root === q) {
      return root;
    }

    /** 后序遍历
     * 如果两个节点位于同一层级，则它们的祖先节点为他两的根节点；
     * 如果不位于同一层级但在同一边，则祖先节点为上面的节点；
     * 如果不位于同一层级且分别在两边，则祖先节点为上面节点的根节点 */
    let left = minDistance(root.left, p, q);
    let right = minDistance(root.right, p, q);
    if (left !== null && right !== null) {
      return root;
    }
    if (left !== null) return left;
    if (right !== null) return right;
  };
}
