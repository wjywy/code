const isPalindrome = (head) => {
    const  arr = []
    let node = head
    
    while(node) {
        arr.push(node.val)
        node = node.next
    }

    let left = 0
    let right = arr.length - 1

    while(left < right) {
        if (arr[left] !== arr[right]) {
            return false
        }
        left++
        right--
    }

    return true
}