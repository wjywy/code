/**
 * 给你二叉树的根节点,请你将它展开为一个单链表
 * 思路：将数据转到数组中，然后遍历数组，将数据依次连接
 */
const traverseList = (root: TreeNode | null) => {
    const helper = (root: TreeNode | null) => {
        if (!root) {
            return
        }
        res.push(root)
        helper(root.left)
        helper(root.right)
    }
    let res: TreeNode[] = []
    helper(root)
    for (let i = 0; i < res.length - 1; i++) {
        console.log(res[i])
        res[i].left = null
        res[i].right = res[i + 1]
    }
}
