/**
 * 括号n代表生成括号的对数，请你设计一个函数，用于能够生成
 * 所有可能的并且有效的括号组合
 */
const generateParenthesis = (n: number) => {
  let result: string[] = [];

  const backTracking = (lRemain: number, rRemain: number, tempStr: string) => {
    if (tempStr.length === n * 2) {
      result.push(tempStr.slice());
      return;
    }

    if (lRemain > 0) {
      backTracking(lRemain - 1, rRemain, tempStr + "(");
    }

    if (rRemain > lRemain) {
      backTracking(lRemain, rRemain - 1, tempStr + ")");
    }
  };
  backTracking(n, n, "");
  return result;
};

const mate = (n: number) => {
  let res: string[] = [];
  const backShaking = (str: string, left: number, right: number) => {
    if (str.length === n * 2) {
      res.push(str.slice());
      return;
    }

    if (left > 0) {
      backShaking(str + "(", left - 1, right);
    }
    if (right > left) {
      backShaking(str + ")", left, right - 1);
    }
  };
  backShaking("", n, n);
  return res;
};
console.log(mate(3));
