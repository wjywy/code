/**
 * 首先建立一个xhr对象，然后开启异步模式
 * send后自动关闭
 * 需要用xhr.open()
 */

namespace A {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "/login", true); // 开启异步

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log(xhr.response);
    } else {
      console.log(xhr.statusText);
    }
  };

  xhr.onerror = function () {
    console.log(xhr.statusText);
  };

  xhr.responseType = "json";
  xhr.setRequestHeader("accept", "application/json");

  xhr.send();
}
