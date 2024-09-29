/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 冒泡方法
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    if (!head || !head.next) {
        return head;
    }

    let isSorted = false;
    while (!isSorted) {
        isSorted = true;
        let prev = null;
        let current = head;

        while (current.next) {
            if (current.val > current.next.val) {
                isSorted = false;
                if (prev) {
                    prev.next = current.next;
                } else {
                    head = current.next;
                }
                [current.next.next, current.next, current] = [current, current.next.next, current.next];
            }
            prev = current;
            current = current.next;
        }
    }

    return head;
};

/**
 * 归并排序
 */

