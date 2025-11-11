/*
'''
Remove K-Appearing Nodes from Unsorted List

Given the head node of a singly linked list, find nodes where they have already appeared (k) or more times.

Return the head node of the new linked list, after deleting/removing the nodes.

If a node appears more than once in a list, only the nodes that are `kth` or higher must be deleted. You can still retain the nodes leading up to the `kth` occurrence.


EXAMPLE(S)
4 -> 3 -> 4 -> 1 -> 5, k = 2 should return 4 -> 3 -> 1 -> 5

1 -> 1 -> 2, k = 2 should return 1 -> 2

1 -> 2 -> 3, k = 3 should return 1 -> 2 -> 3
'''
EXPLORE
input: LL, int
output: LL w/ nodes that appeared int or more times removed
alter original list input
list will remain unaltered if no nodes are present int or more times
!head or if k === 1, return null

BRAINSTORM
Solution: map to keep track of number of occurrences
Time: O(n) -> iteration over list
Space: O(n) -> size of map

PLAN
edge case: if !head or k <= 1, return null
initiate map
initiate 2 pointers
iterate over list
    if not in map, add w/ value of 1
    if in map, increase value
        if value >= k
            remove current node
return head
*/

class ListNode {
    constructor(value = null, next = null) {
        this.value = value
        this.next = next
    }
}

function removeKAppearingNodes(head, k) {
    // edge case
    if (head.value === null || k <= 1) return null;

    // initiate new map, pointers for traversal
    let map = new Map()
    let dummy = new ListNode()
    dummy.next = head
    let curr = dummy.next
    let prev = dummy

    while (curr) {
        // check if curr.value exists as key in map
        if (map.has(curr.value)) {
            // if curr.value exists in map, increment associated value in map
            map.set(curr.value, map.get(curr.value) + 1);

        // check if map value >= k
        if (map.get(curr.value) >= k) {
            // if yes, remove associated node
            prev.next = curr.next
            curr = curr.next
        }
        } else {
            // set map key/value value pair, initiate value at 1
            map.set(curr.value, 1);
        }

        // move pointers forward to iterate LL
        prev = curr
        curr = curr.next
    }

    return dummy.next;
}

// allows print of list to console as array
function arrayify(head) {
    let ptr = head
    var array = []
    
    while (ptr != null) {
        array.push(ptr.value)
        ptr = ptr.next
    }
    return array
}

let list1 = new ListNode(4, new ListNode(3, new ListNode(4, new ListNode(1, new ListNode(5)))))
let list2 = new ListNode(1, new ListNode (1, new ListNode(2)))
let list3 = new ListNode(1, new ListNode(2, new ListNode(3)))
let emptyList = new ListNode()

console.log(arrayify(removeKAppearingNodes(emptyList, 2))) // null
console.log(arrayify(removeKAppearingNodes(list1, 1))) // null
console.log(arrayify(removeKAppearingNodes(list1, 2))); // [4, 3, 1, 5]
console.log(arrayify(removeKAppearingNodes(list2, 2))) // [1, 2]
console.log(arrayify(removeKAppearingNodes(list3, 3)))//[1, 2, 3]