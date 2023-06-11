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

function frontReverse(node: TreeNode | null) {
  const reverse = (res: TreeNode | null, arr: number[]) => {
    if (res === null) {
      return false;
    } else {
      arr.push(res.value);
      reverse(res.left, arr);
      reverse(res.right, arr);
    }
  };
  let result: number[] = [];
  reverse(node, result);
  return result;
}
