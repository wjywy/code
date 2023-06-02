// namespace A {
// type Tree = {
//   name: string;
//   key: number;
//   parent: number;
//   children?: Tree[];
// };
const list = [
  { name: 'A', key: 1, parent: 0 },
  { name: 'B', key: 2, parent: 0 },
  { name: 'C', key: 3, parent: 1 },
  { name: 'D', key: 4, parent: 1 },
  { name: 'E', key: 5, parent: 3 },
  { name: 'F', key: 6, parent: 5 },
  { name: 'G', key: 7, parent: 2 },
]
/**
 * 相同parent同级排列，
 * parent为0说明在顶层，parent就是父级元素的key
 * @param {*} list 
 * @returns 
 */
function reverseTree(list) {
  const res = []

  let itemMap = {}
  list.forEach(item => {
    itemMap[item.key] = { ...item, children: [] }
  })

  console.log(itemMap, 'itemmap')
  list.forEach(item => {
    const treeItem = itemMap[item.key]; //获取当前项

    if (treeItem.parent !== 0) {
      console.log(treeItem, 'pitem')
      itemMap[treeItem.parent].children.push(treeItem)
    } else {
      // console.log(pItem, 'pitem') 
      // console.log(treeItem, 'treeItem')
      // 如果没有父级说明在顶层
      res.push(treeItem)
    }
  })
  console.log(res, 'res')
  return res
}
reverseTree(list)
// }
