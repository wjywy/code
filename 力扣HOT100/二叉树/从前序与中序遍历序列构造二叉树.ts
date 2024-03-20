/**
 * 
 * @param preorder 
 * @param inorder 
 * @returns 
 * 思路： https://programmercarl.com/0106.%E4%BB%8E%E4%B8%AD%E5%BA%8F%E4%B8%8E%E5%90%8E%E5%BA%8F%E9%81%8D%E5%8E%86%E5%BA%8F%E5%88%97%E6%9E%84%E9%80%A0%E4%BA%8C%E5%8F%89%E6%A0%91.html#%E7%AE%97%E6%B3%95%E5%85%AC%E5%BC%80%E8%AF%BE
 */
const createTree = (preorder: number[], inorder: number[]) => {
    const rootval = preorder.shift()!;
    const rootIndex = inorder.indexOf(rootval);
    const node = new TreeNode(rootval);
    node.left = createTree(preorder.slice(0, rootIndex), inorder.slice(0, rootIndex));
    node.right = createTree(preorder.slice(rootIndex), inorder.slice(rootIndex + 1));

    return node;
}