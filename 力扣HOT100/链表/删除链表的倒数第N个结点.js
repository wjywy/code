/**
 * 给你一个链表，删除链表的第n个节点，并且返回链表的头结点
 * @param {*} head 
 * @param {*} n 
 * 思路：先走n步，然后再同时走，知道end为null，那么start就是要删除的节点
 */
const deleteNode = (head, n) => {
    let start = new ListNode(0, head);
    let end = new ListNode(0 ,head);
    let fixNode = start;
    for (let i = 0; i < n ; i++) {
        end = end.next;
    }
    while(end.next) {
        end = end.next;
        start = start.next;
    }
    start.next = start.next.next;

    return fixNode.next;
}