const levelOrder = (root: TreeNode) => {
    if (root === null) return []

    const ans: number[][] = []
    const helpStack: TreeNode[] = []
    helpStack.push(root)

    while(helpStack.length > 0) {
        const len = helpStack.length
        const res: number[] = []
        for (let i = 0; i < len; i++) {
            const cur = helpStack.shift()!
            res.push(cur?.val)
            if (cur?.left) {
                helpStack.push(cur.left)
            }

            if (cur?.right) {
                helpStack.push(cur.right)
            }
        }
        ans.push(res)
    }

    return ans
}