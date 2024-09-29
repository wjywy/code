// list: 数组对象
// id: 每条数据的id
// pid: 每条数据的父节点对应字段
// pid:null 没有父节点的数据

const list = [
    { id: 04, pid: 03 },
    { id: 01, pid: null },
    { id: 02, pid: null },
    { id: 03, pid: 01 },
    { id: 05, pid: 01 },
    { id: 06, pid: 03 },
    { id: 07, pid: 02 },
    { id: 09, pid: 02 },
    { id: 10, pid: 07 }
];

/**
 * 
 * @param {[]} list 
 */
const listToTree = (list, parentId) => {
    let result = []
    for (let item of list) {
        if (item.pid === parentId) {
            let res = listToTree(list, item.id)
            console.log(res, 'res')
            if (res.length > 0) {
                item.children = res
            }
            result.push(item)
        }
    }
    return result
}
console.log(listToTree(list, parentId = null))



/**
 * 把平铺的数组结构转成树形结构
 */
const arr = [
    { id: "01", name: "张大大", pid: "", job: "项目经理" },
    { id: "02", name: "小亮", pid: "01", job: "产品leader" },
    { id: "03", name: "小美", pid: "01", job: "UIleader" },
    { id: "04", name: "老马", pid: "01", job: "技术leader" },
    { id: "05", name: "老王", pid: "01", job: "测试leader" },
    { id: "06", name: "老李", pid: "01", job: "运维leader" },
    { id: "07", name: "小丽", pid: "02", job: "产品经理" },
    { id: "08", name: "大光", pid: "02", job: "产品经理" },
    { id: "09", name: "小高", pid: "03", job: "UI设计师" },
    { id: "10", name: "小刘", pid: "04", job: "前端工程师" },
    { id: "11", name: "小华", pid: "04", job: "后端工程师" },
    { id: "12", name: "小李", pid: "04", job: "后端工程师" },
    { id: "13", name: "小赵", pid: "05", job: "测试工程师" },
    { id: "14", name: "小强", pid: "05", job: "测试工程师" },
    { id: "15", name: "小涛", pid: "06", job: "运维工程师" },
];

// * 数组转树  递归求解
//  */
function toTree(list, parId) {
    let len = list.length;
    function loop(parId) {
        let res = [];
        for (let i = 0; i < len; i++) {
            let item = list[i];
            if (item.pid === parId) {
                item.children = loop(item.id);
                res.push(item);
            }
        }
        return res;
    }
    return loop(parId);
}