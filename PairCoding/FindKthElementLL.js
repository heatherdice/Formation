/* 
Q. Given a linked list, return the kth element from the end of the list.
    If the k exceeds the length of the list, return -1.

Examples:
• Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10, k: 1 // returns 10
• Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10, k: 7 // returns -1

EXPLORE
input: LL, int
output: int
    val of node that is k from the end
1 pass
return -1 if k > length of list
assume k is positive

BRAINSTORM
Solution 1: 2 pointer
Time: O(n) -> length of list
Space: O(1) -> no additional DS

PLAN
if !node, return -1
initiate fast & slow pointers at head
iterate fast number of times
    if !fast, return -1
    move fast pointer forward
while fast is valid
    increment fast
    increment slow
return what slow is pointed to
*/

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}
// option 2





// return what slow is pointed to
function kthFromLast(head, k) {
    if (!head) return -1

    let fast = head
    let slow = head

    for (let i = 0; i < k; i++) {
        if (!fast) return -1
        fast = fast.next
    }

    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    return slow.value
}

// Test Cases
var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
console.log(kthFromLast(LL1, 1)) // 10
console.log(kthFromLast(LL1, 3)) // 3
console.log(kthFromLast(LL1, 6)) // 13
console.log(kthFromLast(LL1, 7)) // -1