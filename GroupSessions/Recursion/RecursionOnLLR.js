class ListNode {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

// Given a linked list and an integer, find whether the integer exists in the lists. Return a boolean.
function findInt(head, int) {
    if (!head) return false

    if (head.value === int) return true

    return findInt(head.next, int)
}

let list1 = new ListNode(1, new ListNode(2, new ListNode(3)))
let emptyList = new ListNode()
console.log(findInt(emptyList, 6)) // false
console.log(findInt(list1, 2)) // true
console.log(findInt(list1, 4)) // false

// Given a linked list and an integer, return how many times the integer exists in the list
function countVal(head, int) {
    if (!head) return 0

    if (head.value === int) {
        return 1 + countVal(head.next, int)
    }

    return countVal(head.next, int)
}

let list2 = new ListNode(2, new ListNode(4, new ListNode(2, new ListNode(2, new ListNode(6, new ListNode(4))))))
console.log(countVal(list2, 2)) // 3
console.log(countVal(list2, 4)) // 2
console.log(countVal(list2, 0)) // 0
console.log(countVal(new ListNode(), 1)) // 0

// Replace all negative values with a 0
function replaceNeg(head) {
    if (!head) return head

    if (head.value < 0) {
        head.value = 0
    }

    replaceNeg(head.next)

    return head
}

let list = new ListNode(-1, new ListNode(1, new ListNode(-3)))
console.log(replaceNeg(list))