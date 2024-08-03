const getInterNode = (headA, headB) => {
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
