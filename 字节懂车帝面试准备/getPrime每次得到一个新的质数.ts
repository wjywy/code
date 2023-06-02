/**
 * 求n以内的所有质数
 * 质数:除了1和自身没有其它因数
 */
const getPrime = (n: number): number[] => {
  if (n === 1) return [];
  let res: number[] = [];
  for (let i = 2; i < n; i++) {
    let mark = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        mark = false;
        break;
      }
    }
    console.log(mark);
    if (mark) {
      res.push(i);
    }
  }
  return res;
};
console.log(getPrime(42));
