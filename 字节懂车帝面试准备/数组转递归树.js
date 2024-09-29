// namespace A {
// type Tree = {
//   name: string;
//   key: number;
//   parent: number;
//   children?: Tree[];
// };
const array = [
  { id: 1, name: 'Node 1', parentId: null },
  { id: 2, name: 'Node 2', parentId: null },
  { id: 3, name: 'Node 3', parentId: 1 },
  { id: 4, name: 'Node 4', parentId: 2 },
  { id: 5, name: 'Node 5', parentId: 2 },
  { id: 6, name: 'Node 6', parentId: 3 },
];
/**
 * 相同parent同级排列，
 * parent为0说明在顶层，parent就是父级元素的key
 * @param {*} list 
 * @returns 
 */
function buildTree(array, parentId = null) {
  const tree = [];

  for (const item of array) {
    if (item.parentId === parentId) {
      const children = buildTree(array, item.id);
      if (children.length > 0) {
        item.children = children;
      }
      tree.push(item);
    }
  }

  return tree;
}

const tree = buildTree(array);
console.log(tree);

