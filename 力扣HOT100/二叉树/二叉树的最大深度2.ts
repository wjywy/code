const maxDepth = (root: TreeNode | null) => {
  if (root === null) {
    return 0;
  }

  let depth = 0;
  let count = 0;

  const recur = (node: TreeNode | null, count: number) => {
    if (node === null) {
      depth = depth > count ? depth : count;
      return;
    }

    recur(node?.left, count + 1);

    recur(node?.right, count + 1);
  };

  recur(root, count);

  return depth;
};
