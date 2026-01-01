/* 
EXPLORE
input: LL
output: int (number of elements)
solve recursively
!head = 0
!head.next = 1

BRAINSTORM
Solution: recursion
Time: O(n) -> length of list
Space: O(n) -> recursive stack

PLAN
edge case: if !head, return 0
return 1 + recursive call on head.next
*/

class ListNode {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

function count(head) {
    if (!head) return 0

    return 1 + count(head.next)
}

var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
console.log(count(null)) // 0
console.log(count(LL1)) // 3
console.log(count(new ListNode())) // 1