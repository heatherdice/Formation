/* 
EXPLORE
input: LL, int
output: element at int position from end of list
    if int > list length, return -1
    ex: if k = 1, return last element
    ex: if k = 2, return 2nd to last element

BRAINSTORM
iteration, 2 pointer
time: O(n) -> length of list
space: O(1) -> no add. DS

recursion, 2 pointer
time: O(n) -> length of list
space: O(n) -> recursive stack

PLAN
initiate dummy node
point dummy.next to head
initiate target pointer at dummy
initiate curr pointer at head
initiate counter to 0
while curr
    move curr pointer forward
    counter++
    if counter === k, move target pointer forward, set target to 0
if target, return target.value
return -1
*/

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val
        this.next = next
    }
}

function kthFromLast(head, k) {
    if (!head) return -1
    
    let dummy = new ListNode()
    dummy.next = head
    let target = dummy
    let curr = head
    let counter = 0

    while (curr) {
        curr = curr.next
        counter++

        if (counter === k) {
                target = target.next
                counter--
            }
    }

    if (target && target.val !== 0) {
        return target.val
    }

    return -1
}

var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
console.log(kthFromLast(LL1, 1)) // 10
console.log(kthFromLast(LL1, 3)) // 3 
console.log(kthFromLast(LL1, 6)) // 13
console.log(kthFromLast(LL1, 7)) // -1