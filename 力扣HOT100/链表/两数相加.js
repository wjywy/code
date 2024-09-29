/**
 * 给你两个非空的链表，表示两个非负的整数。它们每位数字都是按照逆序的方式存储的，并且每个节点只能存储一位数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表
 * @param {*} l1 
 * @param {*} l2 
 * 弄清楚正序加法相加的规则就行
 */
const addTwoNumbers = (l1, l2) => {
    let addOne = 0;
    let sum = new ListNode('0');
    let head = sum;
    while(addOne || l1 || l2) {
        let val1 = l1 !== null ? l1.val : 0;
        let val2 = l2 !== null ? l2.val : 0;
        let r1 = val1 + val2 + addOne;
        addOne = r1 >= 10 ? 1 : 0;
        sum.next = new ListNode(r1 % 10);
        sum = sum.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    return head.next;
}