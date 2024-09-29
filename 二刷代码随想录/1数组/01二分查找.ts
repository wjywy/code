/**
 * 给定一个n个元素有序的整型数组nums和一个目标值target，写一个函数搜索nums中的target，如果目标值存在返回下标，否则返回-1
 */

const middleSearch = (nums: number[], target: number): number => {
  let left = 0;
  let right = nums.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (left < right) {
    if (target > nums[middle]) {
      left = middle;
    } else if (nums[middle] === target) {
      return middle;
    } else {
      right = middle;
    }
    middle = Math.floor((left + right) / 2);
  }
  return -1;
};
console.log(middleSearch([1], 1));
