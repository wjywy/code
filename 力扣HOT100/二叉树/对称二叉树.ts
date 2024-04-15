/**
 * 给你一棵二叉树的根节点root，检查它是否轴对称
 */
const isSymmetric = (root: TreeNode | null) => {
    if (root === null) {
        return true;
    }

    let helpStack: TreeNode[] = [];
    helpStack.push(root.left!);
    helpStack.push(root.right!);

    while(helpStack.length) {
        const left = helpStack.shift();
        const right = helpStack.shift();

        if (left === null && right === null) {
            continue;
        }

        if (left === null || right === null || left?.val !== right?.val) {
            return false;
        }

        helpStack.push(left?.left!);
        helpStack.push(right?.right!);
        helpStack.push(left?.right!);
        helpStack.push(right?.left!);
    }

    return true;
}
