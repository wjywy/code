const url = "www.linux.com?root=wujiayu&password=630";
const parseUrl = (url) => {
    const urlObj = url.split("?")[1];
    const allObj = urlObj.split("&");
    let res = {};
    for (let i = 0; i < allObj.length; i++) {
        const every = allObj[i].split("=");
        if (every.length === 1) res[every[0]] = true;
        else {
            const ev = every[0];
            res[ev] = every[1];
        }
    }
    return res;
};
console.log(parseUrl(url));