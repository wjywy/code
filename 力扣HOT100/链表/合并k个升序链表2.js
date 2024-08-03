
const mergeLists = (lists) => {
    if (lists.length <= 1) return lists[0] || null

    const newList = []
    for (let i = 0; i < lists.length; i += 2) {
        newList.push(merge(lists[i], lists[i + 1] || null))
    }

    return mergeLists(newList)
}

// 合并两个有序链表
const merge = (list1, list2) => {
    let dummy = new ListNode()

    let cur = dummy
    while(list1 && list2) {
        if (list1.val < list2.val) {
            cur.next = list1
            list1 = list1.next
        } else {
            cur.next = list2
            list2 = list2.next
        }
    }

    cur.next = list1 ? list1 : list2

    return dummy.next
}