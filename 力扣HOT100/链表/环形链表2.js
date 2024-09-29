var detectCycle = function(head) {
    let fast = head
    let low = head

    while(true) {
        if (!fast || !fast.next) return null
        fast = fast.next.next
        low = low.next
        if (fast === low) break
    }

    fast = head
    while(low !== fast) {
        low = low.next
        fast = fast.next
    }
    return fast
};