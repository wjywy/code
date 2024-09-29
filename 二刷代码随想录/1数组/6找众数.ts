const findMoreNumber = (arr: number[]): number[] => {
  if (arr.length === 1) return [arr[0]];
  let res = {};
  let maxNum = 0; /** 计算次数 */
  let maxNumArr: number[] = []; /** 统计元素 */
  arr.forEach((item) => {
    res[item] ? (res[item] += 1) : (res[item] = 1);
    if (res[item] > maxNum) {
      maxNum = res[item];
    }
  });
  console.log(maxNum);
  Object.keys(res).forEach((item, index) => {
    if (res[item] === maxNum) maxNumArr.push(Number(item));
  });
  return maxNumArr;
};
