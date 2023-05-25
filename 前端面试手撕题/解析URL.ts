/**
 *  解析URL: 就是将参数以对象的形式给出,这里用的是map，set和map的查询速度是高于数组的
 * @param {string} url
 * @returns {Map<string, string | boolean>}
 */

namespace A {
  let url: string =
    "https://soundheart.cn?user=miku&user=chengxin&password=%E5%8C%97%E4%BA%AC&OK";

  const getUrlParams = (url: string) => {
    let cur = url.split("?")[1]; /**匹配?后面的字符 */
    let curArr: string[] = cur.split("&");

    let res = new Map<string, string | boolean>();

    for (let item of curArr) {
      console.log(item);
      let [key, value]: string[] = item.split("=");
      let fakeValue = decodeURIComponent(value);
      if (res.get(key)) {
        let newres = res.get(key) as string;
        res.set(key, newres.concat(value));
      } else {
        res.set(key, fakeValue === "undefined" ? true : fakeValue);
      }
    }

    console.log(res, "res");
    return res;
  };
  getUrlParams(url);
}
