/**
 * 给你一个链表的头节点head，判断链表中是否有环
 * @param {*} head
 * 思路： 快慢指针，因为有环的快指针就一定会追上慢指针，可以设置快指针每次走两步，慢指针每次走一步，如果两个指针相遇不了(即在while过程中到达了null)，则说明链表无环 
 * 需要注意的是：需要判断只有链表小于两个节点的情况
 */
const hasCycle = (head) => {
    let slow = head;
    let fast = head;
    while(slow && fast) {
        if (!fast || !fast.next) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }

    return false;
}