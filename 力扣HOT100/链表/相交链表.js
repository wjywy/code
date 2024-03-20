/**
 * 给你一个链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果这两个链表不存在相交节点，返回null
 * @param {*} headA
 * @param {*} headB 
 * 思路一：哈希集合的方法，假如两个链表存在交点，那么set中就一定会重复，把这个重复的点取出来即可。链表是存在地址上的，所以has的点就肯定相交了
 * 
 */
const getIntersectionNode = (headA, headB) => {
    const set = new Set();
    let node = headA;
    let nodeB = headB;

    while(node) {
        set.add(node);
        node = node.next;
    }

    while(nodeB) {
        if (set.has(nodeB)) {
            return nodeB;
        }
        nodeB = nodeB.next;
    }

    return null;
}