/**
 * 给定一个含有n个正整数的数组和一个正整数s，找出该数组中满足其和>=s的长度最小的连续子数组，并返回其长度，如果不存在符合条件的子数组，返回0
 */
const minNum = (nums: number[], target: number): number => {
  let k = 0; // 重置i的起点
  let sum = 0;
  let mark = Infinity; // 标记用：比较前后窗口的长度
  let count = 0; // 计数用：窗口的长度
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    count += 1;
    if (sum >= target) {
      mark = count < mark ? count : mark;
      i = k++;
      sum = 0;
      count = 0;
    }
    if (k >= nums.length) {
      break;
    }
  }
  return mark === Infinity ? 0 : mark;
};
console.log(minNum([2, 3, 1, 2, 4, 3], 7));
