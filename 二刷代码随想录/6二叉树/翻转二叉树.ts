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

  const invertTree = (root: TreeNode | null) => {
    if (!root) return null;
    let helpStack: TreeNode[] = [];
    helpStack.push(root);

    while (helpStack.length > 0) {
      for (let i = 0; i < helpStack.length; i++) {
        let curNode = helpStack.pop()!;
        let tempNode = curNode?.left;
        curNode.left = curNode.right;
        curNode.right = tempNode;

        if (curNode.left !== null) helpStack.push(curNode.left);
        if (curNode.right !== null) helpStack.push(curNode.right);
      }
    }
    return root;
  };
}
