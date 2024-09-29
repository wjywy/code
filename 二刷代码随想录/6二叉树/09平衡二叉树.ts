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
   * 给你一颗二叉树，判断它们是否是高度平衡的二叉树
   * 一棵高度平衡二叉树定义为：一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1
   * @param node
   */
  /**
   * 思路：首先有一个公共function:计算二叉树的最大深度，然后运用遍历方法遍历每一个节点调用这个方法，如果左与右的差的绝对值大于1则return false
   */
  const balanceTree = (root: TreeNode | null): Boolean => {
    if (root === null) return true;
    const maxDepth = (node: TreeNode | null) => {
      if (node === null) return 0;
      let pre: number = 0;
      let count: number = 0;
      const recur = (root: TreeNode | null, count: number) => {
        if (root === null) {
          pre = pre > count ? pre : count;
          return pre;
        }
        recur(root.left, count + 1);
        recur(root.right, count + 1);
      };
      recur(node, count);

      return pre;
    };

    let helpStack: TreeNode[] = [];
    helpStack.push(root);

    while (helpStack.length > 0) {
      let curNode: TreeNode = helpStack.shift()!;
      console.log(maxDepth(curNode.left) - maxDepth(curNode.right));
      if (
        maxDepth(curNode.left) - maxDepth(curNode.right) > 1 ||
        maxDepth(curNode.left) - maxDepth(curNode.right) < -1
      ) {
        console.log(111);
        return false;
      }
      if (curNode.left !== null) {
        helpStack.push(curNode.left);
      }
      if (curNode.right !== null) {
        helpStack.push(curNode.right);
      }
    }

    return true;
  };
}
