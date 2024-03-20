/**
 * 这是一道典型的LCA问题，
 * 参考资料: https://www.cnblogs.com/RioTian/p/13149608.html;;;https://www.cnblogs.com/yoke/p/6949838.html
 * @param root 
 * @param p 
 * @param q 
 * 独特的解法: https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/solutions/2402113/gong-shui-san-xie-yun-yong-dfs-qiu-jie-l-htd9/?envType=study-plan-v2&envId=top-100-liked
 */
const nearestTree = (root: TreeNode | null, p: TreeNode | null, q: TreeNode | null) => {
// 使用递归的方法
    // 需要从下到上，所以使用后序遍历
    // 1. 确定递归的函数
    const travelTree = function(root,p,q) {
        // 2. 确定递归终止条件
        if(root === null || root === p || root === q) {
            return root;
        }
        // 3. 确定递归单层逻辑
        let left = travelTree(root.left,p,q);
        let right = travelTree(root.right,p,q);
        if(left !== null && right !== null) {
            return root;
        }
        if(left === null) {
            return right;
        }
        return left;
    }
   return  travelTree(root,p,q);
}