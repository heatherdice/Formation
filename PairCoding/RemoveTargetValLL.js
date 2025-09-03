/* 
Q. Given a linked list and a target integer, remove all nodes with the value target.

Examples:
• Given a linked list: 4 ➞ 2 ➞ 3 ➞ 2 ➞ 2, target: 2 // returns 4 ➞ 3
• Given a linked list: 4, target: 4  // returns an empty list

EXPLORE
input: LL, target int
output: LL w/ all nodes of target int val removed
empty list returns empty list
assume target may not be in list
assume all node val's are ints
edge case: multiple target ints next to each other in list

BRAINSTORM
iterative - dummy/sentinel node - 2 pointer
time: O(n) -> n = number of nodes to be iterated
space: O(1) -> no additional DS, returning same list

PLAN
initiate dummy node
initiate curr node pointing to head
while curr
    check if curr.next.value === target
        if yes, curr.next = curr.next.next
        else, curr = curr.next
return dummy.next
*/

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function arrayify(head) {
    let ptr = head
    var array = []
    while (ptr != null) {
        array.push(ptr.value)
        ptr = ptr.next
    }
    return array
}

function remove(node, target) { 
    let dummy = new ListNode(null, node)
    let curr = dummy 

    while (curr && curr.next) {
        if (curr.next.value === target) {
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }
    }
    return dummy.next
}

// Test Cases
var LL1 = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(1, new ListNode(3, new ListNode(2, new ListNode(2)))))))

var LL2 = remove(null, 1);

console.log(arrayify(LL2)) // []

LL1 = remove(LL1, 1);
console.log(arrayify(LL1)) // [4, 2, 3, 2, 2] 

LL1 = remove(LL1, 2);
console.log(arrayify(LL1)) // [4, 3]

LL1 = remove(LL1, 3);
console.log(arrayify(LL1)) // [4]

LL1 = remove(LL1, 4);
console.log(arrayify(LL1)) // []