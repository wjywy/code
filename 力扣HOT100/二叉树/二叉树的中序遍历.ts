class TreeNode {
    public val: number;
    public left: TreeNode | null;
    public right: TreeNode | null;
    
    constructor(val: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

/**
 * 
 * @param root 
 * @returns 
 * 思路：中序遍历遍历规则：左中右
 */
const intervalTraversal = (root: TreeNode | null) => {
    if (root === null) {
        return [];
    }
    const result: number[] = [];
    const recur = (root: TreeNode | null) => {
        if (root === null) {
            return;
        }

        recur(root.left);
        result.push(root.val);
        recur(root.right);
    }
    recur(root);
    return result;
}