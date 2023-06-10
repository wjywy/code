/**
 * 给定两个数组，编写一个函数来计算它们的交集
 */

const calGether = (nums1: number[], nums2: number[]): number[] => {
  let res = new Set(nums1);
  let result: number[] = [];
  nums2.forEach((item, index) => {
    res.has(item) ? result.push(item) && res.delete(item) : res.add(item);
  });
  return result;
};
calGether([4, 9, 5], [9, 4, 9, 8, 4]);
