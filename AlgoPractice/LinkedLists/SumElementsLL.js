/* 
EXPLORE
input: LL
output: int
    sum of all val's
solve iteratively
if no val's, return null

BRAINSTORM
Solution: iterate
Time: O(n) -> length of list
Space: O(1) -> no additional DS

PLAN
edge case: if !head, return null
initiate var to hold sum
while head, sum += head.val
    head = head.next
return sum
*/

class ListNode {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
    }

    function sum(head) {
    if (!head) return null
    let sum = 0

    while (head) {
        sum += head.val
        head = head.next
    }

    return sum
}

var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
console.log(sum(null)) // null
console.log(sum(LL1)) // 10
console.log(sum(new ListNode(1))) // 1
