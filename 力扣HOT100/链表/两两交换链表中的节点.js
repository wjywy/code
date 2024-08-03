/**
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）
 * @param {*} head
 * 思路：核心就是找到相邻的两个节点，然后交换，不过需要注意的是node1.next = node2.next这行代码，再进行每一次交换之后就需要将指针移到下一次交换的起点
 */
const swapNode = (head) => {
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    let temp = dummyHead;
    while (temp.next !== null && temp.next.next !== null) {
        const node1 = temp.next;
        const node2 = temp.next.next;
        temp.next = node2;
        node1.next = node2.next;
        node2.next = node1;
        temp = node1;
    }
    return dummyHead.next;
}
