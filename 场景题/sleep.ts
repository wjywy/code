// 暂停·功能，几秒之后再执行下面功能

namespace A {
  function sleep(delay: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("睡完了");
      }, delay);
    });
  }

  async function main() {
    await sleep(10000);
    console.log("几秒后呢");
  }
  main();
}
