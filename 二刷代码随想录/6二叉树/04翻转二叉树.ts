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
   * 运用层序遍历，交换每一个节点的左右节点
   * @param node
   * @returns
   */
  const reverse = (node: TreeNode | null): TreeNode | null => {
    if (node === null) return null;

    let helpStack: TreeNode[] = [];
    helpStack.push(node);

    while (helpStack.length > 0) {
      let length: number = helpStack.length;
      for (let i = 0; i < length; i++) {
        let curNode: TreeNode = helpStack.pop()!;
        let tempNode: TreeNode | null = curNode.left;
        curNode.left = curNode.right;
        curNode.right = tempNode;
        if (curNode.left !== null) {
          helpStack.push(curNode.left);
        }
        if (curNode.right !== null) {
          helpStack.push(curNode.right);
        }
      }
    }
    return node;
  };

  /**运用递归方法：前序遍历 */
  const every = (node: TreeNode | null): TreeNode | null => {
    if (node === null) return null;

    let tempNode: TreeNode | null = node.left;
    node.left = node.right;
    node.right = tempNode;

    every(node.left);
    every(node.right);

    return node;
  };
}
