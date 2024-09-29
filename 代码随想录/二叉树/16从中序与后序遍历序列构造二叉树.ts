namespace A {
  /**
   *理论知识：
   *    从中序遍历与后序遍历构造二叉树：后序数组的最后一个元素为切割点，先切中序数组，根据中序数组，反过来再切后序数组，一层一层切下去就行
   *    从前序遍历和中序遍历构造二叉树: 前序数组的第一个元素为切割点，先切中序数组，根据中序数组，反过来再切前序数组，一层一层切下去就行
   */

  class TreeNode {
    public val: number;
    public left: TreeNode | null;
    public right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

  function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (postorder.length === 0) return null;
    const rootVal: number = postorder.pop()!; /** 后序数组最后一个节点 */
    const rootValIndex: number = inorder.indexOf(rootVal);
    const rootNode: TreeNode = new TreeNode(rootVal);
    rootNode.left = buildTree(
      inorder.slice(0, rootValIndex),
      postorder.slice(0, rootValIndex)
    );
    rootNode.right = buildTree(
      inorder.slice(rootValIndex + 1),
      postorder.slice(rootValIndex)
    );
    return rootNode;
  }
}
