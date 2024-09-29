
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

    // 思路一：层序遍历(广度优先遍历)
    const maxDepth = (root: TreeNode | null) => {
        if (root === null) {
            return 0;
        }

        let maxDepth = 0;
        let helpStack: TreeNode[] = [];
        helpStack.push(root);

        while(helpStack.length) {
            const length = helpStack.length;
            for (let i = 0; i < length; i++) {
                let cur = helpStack.shift();
                if (cur?.left) {
                    helpStack.push(cur.left);
                }
                if (cur?.right) {
                    helpStack.push(cur.right);
                }
            }
            maxDepth++;
        }
        return maxDepth;
    }

    // 思路二: 递归
    const maxDepth2 = (root: TreeNode | null) => {
        if (root === null) {
            return 0;
        }

        let depth = 0;
        let count = 0;
        const recur = (root: TreeNode | null, count: number) => {
            if (root === null) {
                depth = depth > count ? depth : count;
                return;
            }

            recur(root?.left, count +  1);
            recur(root?.right, count + 1);
        }

        recur(root, count);
        return depth;
    }

}