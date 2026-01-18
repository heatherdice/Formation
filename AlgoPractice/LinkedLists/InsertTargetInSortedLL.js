/* 
EXPLORE
input: sorted LL, target int
output: same LL w/ new node inserted in sorted order
assume we are altering the existing LL
empty LL input returns single node of target val
test case: node inserted at head
test case: node inserted at tail
test case: node inserted at middle
test case: empty input LL

BRAINSTORM
Solution: iteration
Time: O(n) -> length of list
Space: O(1) -> no additional DS, size of node negligeable?

PLAN
edge case: if !LL input, return new node of val target
iterate over LL using while loop
    if node val < target val, proceed
    if node val > target val, insert new node
    if !head.next, add new node of target val at end of list
return new LL
*/

class ListNode {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

function insert(head, target) {
    if (!head) return new ListNode(target)

    let sentinel = new ListNode(null, head)
    let prev = sentinel
    let curr = head

    // iterate until val < target
    while (curr && curr.val < target) {
        prev = curr
        curr = curr.next
    }

    // once val > target, assign new node of targt val and curr next to prev.next
    prev.next = new ListNode(target, curr)

    // return list w/ inserted node
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

var LL1 = new ListNode(1, new ListNode(3, new ListNode(4)))
var LL2 = new ListNode(-3, new ListNode(-2, new ListNode(-1)))

console.log(arrayify(insert(LL1, 2))) // [1, 2, 3, 4]
console.log(arrayify(insert(LL2, -4))) // [-4, -3, -2, -1]
console.log(arrayify(insert(LL2, 0))) // [-3, -2, -1, 0]
console.log(arrayify(insert(null, 1))) // [1]