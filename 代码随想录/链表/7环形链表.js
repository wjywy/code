/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {

    if (!head || !head.next) return false
    let speed = head
    let low = head

    while (speed.next !== low) {
        if (low.next !== null) {
            low = low.next
        } else {
            return false
        }
        if (!speed || !speed.next) return false
        if (speed.next.next !== null) {
            speed = speed.next.next
        } else {
            return false
        }
    }
    return true
};