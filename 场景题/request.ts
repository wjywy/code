// request，调用失败之后可以重复调用，并可以设置调用次数

function request(fn: Function, url: string, option: number) {
  return new Promise(async (resolve, reject) => {
    for (let i = 0; i < option; i++) {
      try {
        let res = await fn(url);
        resolve(res);
        break;
      } catch (error) {
        if (i >= option - 1) {
          reject(error);
        }
      }
    }
  });
}


