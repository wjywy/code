/**
 * 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接两个链表的所有节点组成的
 * @param {*} list1 
 * @param {*} list2 
 * 思路：不断比较两个链表的首节点
 */
const mergeList = (list1, list2) => {
    let head = new ListNode(0);
    let p = head;
    while(list1 && list2) {
        if (list1 <= list2) {
            p.next = list1;
            list1 = list1.next;
        } else {
            p.next = list2;
            list2 = list2.next;
        }
        p = p.next; // 每次循环后，p指向下一个节点
    }
    
    if (list1) {
        p.next = list1;
    } else if (list2) {
        p.next = list2;
    }

    return head.next;
}
