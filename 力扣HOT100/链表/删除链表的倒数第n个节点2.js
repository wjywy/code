const removeNth = (head, n) => {
    let node = new ListNode(0, head)
    let node2 = new ListNode(0, head)

    let fixNode = node2

    for (let i = 0; i < n; i++) {
        node = node.next
    }

    while(node.next) {
        node = node.next
        node2 = node2.next
    }

    node2.next = node2.next.next

    return fixNode.next
}