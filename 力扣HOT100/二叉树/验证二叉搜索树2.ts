class TreeNode {
    public left: TreeNode | null
    public right: TreeNode | null
    public val: number

    constructor( val: number, left?: TreeNode, right?: TreeNode,) {
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
        this.val = val === undefined ? 0 : val
    }
}

const isValidBST = (root: TreeNode) => {
    const ans: number[] = []
    const recur = (node: TreeNode) => {
        if (node === null) return

        if (node.left) {
            recur(node.left)
        }

        ans.push(node.val)

        if (node.right) {
            recur(node.right)
        }
    }

    recur(root)

    for (let i = 1; i < ans.length; i++) {
        if (ans[i] < ans[i - 1]) {
            return false
        }
    }

    return true
}