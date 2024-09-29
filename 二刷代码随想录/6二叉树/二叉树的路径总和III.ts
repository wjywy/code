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
   *给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。
   *路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
   * @param root
   * @param target
   * @returns
   */
  const pathSum = (root: TreeNode | null, targetSum: number) => {
    if (!root) {
      return 0;
    }
    let ans = 0;
    function dfs(node, need) {
      if (!node) {
        return;
      }
      if (need - node.val === 0) {
        ans++;
      }
      dfs(node.left, need - node.val);
      dfs(node.right, need - node.val);
    }

    dfs(root, targetSum);

    ans += pathSum(root.left, targetSum);
    ans += pathSum(root.right, targetSum);
    return ans;
  };
}
