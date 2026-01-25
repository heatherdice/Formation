// Replace all negative values with a 0
class ListNode {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

function replaceNeg(head) {
    if (!head) return head

    if (head.value < 0) {
        head.value = 0
    }

    replaceNeg(head.next)

    return head
}

let list = new ListNode(-1, new ListNode(1, new ListNode(-3)))
console.log(list)
console.log(replaceNeg(list))