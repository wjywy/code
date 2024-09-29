/**
 * 思路：后序遍历，分为两种情况：
 *      1. 不偷当前节点，左右子节点都可以偷或者不偷，取最大值
 *      2. 偷当前节点，左右子节点只能不偷
 */

const robPlusMax = (root: TreeNode) => {
    const recur = (node: TreeNode) => {
        if (node === null) return [0, 0]

        const left = recur(node.left)

        const right = recur(node.right)

        // 不偷当前节点，左右子节点都偷或者不偷，取最大值即可
        const doNot = Math.max(left[0], left[1]) + Math.max(right[0], right[1])

        // 偷当前节点，左右子节点只能不偷
        const doing = node.val + left[0] + right[0]

        return [doNot, doing]
    }

    const res = recur(root)

    return Math.max(...res)
}