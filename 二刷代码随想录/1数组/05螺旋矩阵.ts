/**
 * 给定一个正整数n，生成一个包含1到n^2所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵
 */

const circleNum = (n: number): number[][] => {
  let nums = new Array(n).fill(0).map((item) => new Array(n).fill(0));
  console.log(nums);
  /**循环次数 */
  let loop = Math.floor(n / 2);

  /**控制起始位置 */

  /**统一左开右闭 */

  /**从左到右 */
  return nums;
};
circleNum(5);
