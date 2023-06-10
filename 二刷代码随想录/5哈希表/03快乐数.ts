/**
 * 快乐数
 * 编写一个算法来判断一个数n是不是快乐数
 * [快乐数]定义为:对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为1，也可能是无限循环但始终变不到1.如果可以变为1，那么这个数就是快乐数
 *
 * 思路:当一个数重复出现两次的时候就证明不是快乐数了
 */

const happyNum = (n: number): Boolean => {
  let map = new Map<number, number>();
  const toSum = (n: number): boolean => {
    let arr: string[] = String(n).split("");
    let signal: number = 0;
    for (let i = 0; i < arr.length; i++) {
      signal = Number(arr[i]) * Number(arr[i]);
    }
    if (signal === 1) {
      return true;
    } else if (map.has(signal)) {
      return false;
    } else {
      return toSum(signal);
    }
  };
  return toSum(n);
};
happyNum(19);
