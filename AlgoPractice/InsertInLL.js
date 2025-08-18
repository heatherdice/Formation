/* 
EXPLORE
input: sorted LL, target int
output: new LL w/ inserted element
solve w/ recursion
if !head, create new head w/ value of target
need to pay attention to pointers & how they operate in this instance

BRAINSTORM
recursion
time: O(n) - length of list
space: O(n) - recursive stack

PLAN
assign new var to new node w/ value target
base case: if !head, return new node
check if head > target
    if yes, set new node next to head
    return new node
recurse on head.next
return head

*/

class ListNode {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

function insert(head, target) {
    let newNode = new ListNode(target)

    if (!head) return newNode

    if (head.value > target) {
        newNode.next = head
        return newNode
    }

    head.next = insert(head.next, target)
    return head
} 

var LL1 = new ListNode(1, new ListNode(3, new ListNode(4)))
var LL2 = new ListNode(-3, new ListNode(-2, new ListNode(-1)))
console.log((insert(LL1, 2))) // [1, 2, 3, 4]
console.log((insert(LL2, -4))) // [-4, -3, -2, -1]
console.log((insert(LL2, 0))) // [-3, -2, -1, 0]
console.log((insert(null, 1))) // [1]