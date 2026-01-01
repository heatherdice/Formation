/* 
EXPLORE
input: LL, int
output: LL w/ addiitonal node of target int val
solve recursively
LL w/ null head adds head of int val

BRAINSTORM
Recursion
Time: O(n) -> length of list
Space: O(n) -> recursive stack

PLAN
edge case: if !head, return new node(int)
base case: if !head.next, head.next = new node(int)
call function on head.next

*/
class ListNode{
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

// recursive solution
function appendRecursive(head, target) {
    if (!head) return new ListNode(target)

    if (!head.next) {
        head.next = new ListNode(target)
        return head
    }

    appendRecursive(head.next, target)
    return head
}

// iterative solution
function appendIterative(head, target) {
    if (!head) return new ListNode(target)

    let sentinel = new ListNode(null, head)

    while (head.next) {
        head = head.next
    }

    head.next = new ListNode(target)

    return sentinel.next
}

function arrayify(head) {
    let ptr = head
    var array = []
    while (ptr != null) {
        array.push(ptr.val)
        ptr = ptr.next
    }
    return array
}

var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
var LL2 = new ListNode(1, new ListNode(4, new ListNode(5)))


console.log(arrayify(appendRecursive(null, 1))) // [1]
console.log(arrayify(appendRecursive(LL1, 7))) // [1, 4, 5, 7]
console.log(arrayify(appendRecursive(new ListNode(0), 7))) // [0, 7]

console.log(arrayify(appendIterative(null, 1))) // [1]
console.log(arrayify(appendIterative(LL2, 7))) // [1, 4, 5, 7]
console.log(arrayify(appendIterative(new ListNode(0), 7))) // [0, 7]