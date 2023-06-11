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
   * 思路：层序遍历是遍历每一层，所以我们可以将每一层的长度计算出来，比如第一层就是:stack[node]这个头结点装入数组的长度
   *       然后当这个数组的长度小于或等于0的时候就可以跳出循环了，但是我们在循环当前这一层的时候，也需要将下一层的长度给计算出来，
   *       即可以使用for循环，将这一层循环的节点的左右子节点push进数组
   * @param node
   * @returns
   */
  const everyReverse = (node: TreeNode | null): number[][] => {
    if (node === null) return [];

    let helpStack: TreeNode[] = [];
    let result: number[][] = [];
    let curNode: TreeNode;
    helpStack.push(node);

    while (helpStack.length > 0) {
      let shift: number[] = [];
      for (let i = 0; i < helpStack.length; i++) {
        curNode = helpStack.shift()!;
        shift.push(curNode.value);
        if (curNode.left !== null) {
          helpStack.push(curNode.left);
        }
        if (curNode.right !== null) {
          helpStack.push(curNode.right);
        }
      }
      result.push(shift);
    }

    return result;
  };
}
