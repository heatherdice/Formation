/* 
EXPLORE
input: LL
output: node val that is 3 from the end of the list
2 pointer approach needed
    slow - moves 1 node at a time
    fast - moves 3 nodes at a time
if fast hits end before node moves
    return null
if !head
    return null

BRAINSTORM
Solution: 2 pointer, iteration
Time: O(n) -> number of nodes
Space: O(1) -> no additional DS

PLAN
edge case: if !head, return null
initiate dummy node
dummy.next points to head
fast pointer points at head.next.next
while fast
    fast = fast.next.next
    slow = slow.next
return slow
*/
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val
        this.next = next
    }
}

function findOneThirdElement(head) {
    // edge cases, if no head or list is < 3 nodes long
    if (!head) return null
    if (!head.next || !head.next.next) return head.val

    // fast & slow need to start at same place, to prevent fast from getting to the end too quickly
    let slow = head
    let fast = head

    // check all nexts & .nexts needed to prevent "cannot read value null" error
    while (fast && fast.next && fast.next.next) {
        // move fast pointer 3 nodes & slow pointer 1 node
        fast = fast.next.next.next
        slow = slow.next
    }

    // return value of slow pointer
    return slow.val
}

console.log(findOneThirdElement(null)); // undefined or null
console.log(findOneThirdElement(new ListNode(1))); // 1
console.log(findOneThirdElement(new ListNode(1, new ListNode(2)))); // 1
console.log(findOneThirdElement(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))))); // 2
console.log(findOneThirdElement(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))))); // 2
console.log(findOneThirdElement(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))))); // 3
console.log(findOneThirdElement(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7))))))))); // 3
console.log(findOneThirdElement(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8)))))))))); // 3
console.log(findOneThirdElement(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8, new ListNode(9))))))))))); // 4
console.log(findOneThirdElement(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8, new ListNode(9, new ListNode(10)))))))))))); // 4