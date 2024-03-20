/**
 * 给你一个整数数组nums，其中元素已经按升序排列，请你将其转换为一棵平衡二叉搜索树
 * @param nums 
 * 思路： 分成左右子树，然后递归，需要注意怎么根据数据结构来创建树：new TreeNode(nums[mid])
 */
const sortTree = (nums: number[]): TreeNode | null => {
    const recur = (nums: number[], left: number, right: number) => {
        if (left > right) {
            return null;
        }
        const mid = Math.floor((left + right) / 2);
        const root = new TreeNode(nums[mid]);
        root.left = recur(nums, left, mid - 1);
        root.right = recur(nums, mid + 1, right);
        return root;
    }

    return recur(nums,  0, nums.length - 1);
}