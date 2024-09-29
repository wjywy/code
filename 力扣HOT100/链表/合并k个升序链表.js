// 分治法

//自底而上合并
var mergeKLists = function (lists) {
    if (lists.length <= 1) return lists[0] || null;

    const newLists = [];
    for (let i = 0; i < lists.length; i += 2) {
        newLists.push(merge(lists[i], lists[i + 1] || null));
    }

    return mergeKLists(newLists);
};

const merge = (list_1, list_2) => {//合并两个有序链表
    let dummy = new ListNode();
    let cur = dummy;
    while(list_1 && list_2) {
        if (list_1.val < list_2.val) {
            cur.next = list_1;
            list_1 = list_1.next;
        } else {
            cur.next = list_2;
            list_2 = list_2.next;
        }

        cur = cur.next;
    }

    cur.next = list_1 ? list_1 : list_2;

    return dummy.next;
}