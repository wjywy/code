/**
 * 实现千分位：
 * 例如：123456 => 123,456
 */

const tranQian = (n: number): string => {
  let steNum = String(n).split("");
  let count = 0;
  let newArr: string[] = [];
  for (let i = steNum.length - 1; i >= 0; i--) {
    count++;
    if (count % 3 === 0) {
      newArr.unshift(`,${steNum[i]}`);
    } else {
      newArr.unshift(steNum[i]);
    }
  }
  return newArr.join("");
};
console.log(tranQian(1234567));
