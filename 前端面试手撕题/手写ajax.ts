/**
 * 首先建立一个xhr对象，然后开启异步模式
 * send后自动关闭
 * 需要用xhr.open()
 */

let xhr = new XMLHttpRequest();
xhr.open("GET", "/login", true); /**开启异步 */
xhr.onreadystatechange = function () {
  if (xhr.readyState !== 4) return;
  if (xhr.status === 200) {
  } else {
  }
};
