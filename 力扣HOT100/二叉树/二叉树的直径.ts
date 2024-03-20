const tree = (root: TreeNode | null) => {
    if (root === null) {
        return 0;
    }
    
    let depth = 0;
    const recur = (root: TreeNode | null) => {
        if (root === null) {
            return 0;
        }

        let leftMax = recur(root.left);
        let right = recur(root.right);

        depth = Math.max(depth, leftMax + right);

        return Math.max(leftMax, right) + 1;
    }
    recur(root);

    return depth;
}