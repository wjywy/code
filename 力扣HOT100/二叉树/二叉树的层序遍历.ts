/**
 * 
 * @param root 
 */
const level = (root: TreeNode | null) => {
    if (root === null) return [];

    const res: number[][] = [];
    const helpStack: TreeNode[] = [];
    helpStack.push(root);

    while(helpStack.length) {
        const len = helpStack.length;
        const eve: number[] = [];

        for (let i = 0; i < len; i++) {
            let cur = helpStack.shift();
            eve.push(cur?.val!);
            if (cur?.left) {
                helpStack.push(cur.left);
            }

            if (cur?.right) {
                helpStack.push(cur.right);
            }
        }

        res.push(eve);
    }

    return res;
}