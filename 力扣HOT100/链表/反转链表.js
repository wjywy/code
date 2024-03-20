/**
 * 给你单链表的头节点head，请你反转链表，并返回反转后的链表
 * @param {} head
 * 思路：不断交换链表节点
*/
const reverseNode = (head) => {
    let pre = null;
    let cur = head;
    while(cur) {
        let temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    return pre;
}