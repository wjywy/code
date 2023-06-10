/**
 * 四数相加
 * 给定四个包含整数的数组列表A、B、C、D,计算有多少个元组(i,j,k,l),使得A[i] + B[j] + C[k] + D[I] = 0
 * 所有A、B、C、D具有相同的长度N
 */
const fourSum = (
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number => {
  let helperMap: Map<number, number> = new Map();
  let resNum: number = 0;
  let tempVal: number | undefined;
  for (let i of nums1) {
    for (let j of nums2) {
      tempVal = helperMap.get(i + j);
      helperMap.set(i + j, tempVal ? tempVal + 1 : 1);
    }
  }
  for (let k of nums3) {
    for (let l of nums4) {
      tempVal = helperMap.get(0 - (k + l));
      if (tempVal) {
        resNum += tempVal;
      }
    }
  }
  console.log(resNum, "resSUm");
  return resNum;
};
fourSum([1, 2], [-2, -1], [-1, 2], [0, 2]);
