/**
 * 给定一个二叉树的根节点root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点
 */
const rightView = (root: TreeNode | null) => {
    if (root === null) return null;

    const helpStack: TreeNode[] = [];
    helpStack.push(root);
    const res: number[] = [];

    while(helpStack.length) {
        const len = helpStack.length;

        for (let i = 0; i < len; i++) {
            let cur = helpStack.shift()!;

            if (i === len - 1) {
                res.push(cur.val);
            }
            if (cur.left) {
                helpStack.push(cur.left);
            }
            if (cur.right) {
                helpStack.push(cur.right)
            }
        }
    }

    return res;
}