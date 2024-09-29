/**
 * 两数之和
 * 给定一个整数数组nums和一个目标值target，请你在数组中找出和为目标值的那两个整数，并返回他们的数组下标
 */

const twoSumOne = (nums: number[], target: number) => {
  nums.forEach((item, index) => {
    let otherItem = target - item;
    for (let i = index; i < nums.length; i++) {
      if (nums[i] === otherItem) {
        console.log(index, i);
        return [index, i];
      }
    }
  });
};

const twoSum = (nums: number[], target: number): number[] => {
  let map = new Map<number, number>();
  let res: number[] = [];
  let index: number | undefined;
  for (let i = 0; i < nums.length; i++) {
    index = map.get(target - nums[i]);
    if (index !== undefined) {
      res = [i, index];
    } else {
      map.set(nums[i], i);
    }
  }
  console.log(res, "res");
  return res;
};

twoSum([2, 7, 11, 15], 9);
