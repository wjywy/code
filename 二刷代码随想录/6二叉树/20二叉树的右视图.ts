/**
 * 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值
 * 层次遍历秒了
 */
namespace A {
    class TreeNode {
        public val: number;
        public left: TreeNode | null;
        public right: TreeNode | null;
    
        constructor(val: number, left: TreeNode | null, right: TreeNode | null) {
          this.val = val === undefined ? 0 : val;
          this.left = left === undefined ? null : left;
          this.right = right === undefined ? null : right;
        }
      }

      const rightSideView = (root: TreeNode | null): number[] => {
        let helperQueue: TreeNode[] = [];
        let resArr: number[] = [];
        let tempNode: TreeNode;
        if (root !== null) helperQueue.push(root);
        while (helperQueue.length > 0) {
            for (let i = 0, length = helperQueue.length; i < length; i++) {
                tempNode = helperQueue.shift()!;
                if (i === length - 1) resArr.push(tempNode.val);
                if (tempNode.left !== null) helperQueue.push(tempNode.left);
                if (tempNode.right !== null) helperQueue.push(tempNode.right);
            }
        }
        return resArr;
      }
}