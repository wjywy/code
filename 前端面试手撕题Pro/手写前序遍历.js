// 前序遍历
const frontTree = (root) => {
    if (root === null) {
        return [];
    }

    const ans = [];

    const recur = (root) => {
        if (root === null) {
            return;
        }
        ans.push(root.val);
        recur(root.left);
        recur(root.right);
    }

    recur(root);

    return ans;
}