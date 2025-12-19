/* 
EXPLORE
input: LL
output: max val
solve iteratively
if !head, return null
if !head.next, return head.val
assume all vals are ints

BRAINSTORM
iterate
Time: O(n) -> length of list
Space: O(1) -> no extra DS needed

PLAN
if !head, return null
if !head.next, return head.val
initiate max var to -Infinity
initiate pointer var to head
if pointer.val > max, max = pointer.val
pointer = pointer.next
return max
*/

class ListNode {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

function findMax(head) {
    if (!head) return null
    if (!head.next) return head.val

    let max = -Infinity

    while (head) {
        if (head.val > max) {
        max = head.val
        }

        head = head.next
    }

    return max
}

var LL1 = new ListNode(1, new ListNode(4, new ListNode(5, new ListNode(1))))
var LL2 = new ListNode(7, new ListNode(1, new ListNode(5, new ListNode(1))))
var LL3 = new ListNode(-1, new ListNode(-3, new ListNode(-5, new ListNode(0, new ListNode(-11)))))
console.log(findMax(LL1)) // 5
console.log(findMax(LL2)) // 7
console.log(findMax(LL3)) // 0
console.log(findMax(new ListNode(1))) // 1