/**
 * 给你一个按非递减顺序排序的整数数组nums,返回每个数字的平方组成的新数组，要求也按非递减顺序排序
 */

const nums2 = (nums: number[]): number[] => {
  let newNums = nums.map((item, index) => {
    return item * item;
  });
  newNums.sort((a, b) => a - b);
  return newNums;
};
console.log(nums2([-4, -1, 0, 3, 10]));
