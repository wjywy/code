/**
 * 给你一个链表的头节点head，请你判断链表是否为回文链表。如果是，返回true；否则，返回false。
 * 思路一：将链表转为数组进行比较
 */
const isPalindrome = (head) => {
    const arr = [];
    let cur = head
    while(cur) {
        arr.push(cur.val);
        cur = cur.next
    }
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}