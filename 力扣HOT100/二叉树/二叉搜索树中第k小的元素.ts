const kthSmallest = (root: TreeNode | null, k: number) => {
    const res: number[] = [];
    const recur = (root: TreeNode | null) => {
        if (root === null) return;

        recur(root.left);
        res.push(root.val);
        recur(root.right);
    }
    recur(root);
    return res[k - 1];
}
