const search = (str: string, target: string) => {
  let targetNum = [...target];
  console.log(targetNum);
  for (let item of targetNum) {
    if (str.indexOf(item) !== -1) return str;
  }
  throw Error("参数错误");
};
