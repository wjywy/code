/**
 * 给你一个数组nums和一个值val，你需要原地移除所有数值等于val的元素，并返回移除后数组的新长度
 */

const removeItem = (nums: number[], val: number): number => {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  nums.length = k;
  return k;
};
console.log(removeItem([0, 1, 2, 2, 3, 0, 4, 2], 2));
