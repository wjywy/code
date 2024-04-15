/**
 * 给你一颗二叉树的根节点root，翻转这棵二叉树，并返回其根节点
 * 思路：确定遍历方向，中左右，所以是前序遍历，然后没当遍历到当前节点时，交换左右子节点即可
 */
const traverse = (root: TreeNode | null) => {
    if (root === null) {
        return null;
    }

    const recur = (root: TreeNode | null) => {
        if (root === null) {
            return null;
        }

        const left = root.left;
        const right = root.right;
        root.left = right;
        root.right = left;
        recur(root.left);
        recur(root.right);
    }

    recur(root);

    return root;
}
