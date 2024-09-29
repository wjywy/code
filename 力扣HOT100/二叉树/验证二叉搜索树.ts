/**
 * 验证二叉搜索树
 * 思路： 中序遍历
 */
const isValidBST = (root: TreeNode | null) => {
    if (root === null) return false;

    let res: number[] = [];
    const recur = (node: TreeNode | null, res: number[]) => {
      if (node === null) return false;
      recur(node.left, res);
      res.push(node.val);
      recur(node.right, res);
    };
    recur(root, res);

    for (let i = 1; i < res.length; i++) {
      if (res[i] <= res[i - 1]) {
        return false;
      }
    }

    return true;
}
