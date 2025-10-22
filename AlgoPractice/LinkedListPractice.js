// ListNode class
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val
        this.next = next
    }
}

// additional function to convert LL to arr
function arrayify(head) {
    let ptr = head
    var array = []
    while (ptr != null) {
        array.push(ptr.val)
        ptr = ptr.next
    }
    return array
}

/*
Given a singly linked list, remove the head and tail nodes

EXPLORE
input: LL
output: LL w/ original head & tail removed
empty list returns empty list
1-val list returns empty list

BRAINSTORM
Algo: loop while head.next
Time: O(n)
Space: O(1)

PLAN
if no head, return list
set head = head.next to remove head
set pointer = head
iterate over list while head.next
    set pointer = head.next
    check if pointer.next.next
        if no, pointer.next = pointer.next.next
return list
*/

function removeHeadAndTail(list) {
    // if empty list or 1 element list, return empty list
    if (!list || !list.next) return null
    
    // delete head node
    list = list.next
    
    // if there is now only one node left in the list, return an empty list
    if (!list.next) return null
    
    // set pointer to traverse list
    let pointer = list

    while (pointer.next && pointer.next.next) {
        // traverse
        pointer = pointer.next
    }
    // delete final node
    pointer.next = null
    
    // return list
    return list
}

let list1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))))
let list2 = new ListNode(1)
let list3 = new ListNode(1, new ListNode(2, new ListNode(3)))
let list4 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

console.log("list 1: ", arrayify(removeHeadAndTail(list1))) // [2, 3, 4, 5]
console.log("list 2: ", arrayify(removeHeadAndTail(list2))) // []
console.log("list 3: ", arrayify(removeHeadAndTail(list3))) // [2]
console.log("list 4: ", arrayify(removeHeadAndTail(list4))) // [2, 3, 4]

/* 
Given a linked list, remove the center node. If the length of the list is even, remove the first of the two center nodes.

EXPLORE
input: LL
output: LL w/ center node removed
    center node in even list = 1st of 2 center nodes
empty list, 1-val list returns empty list
2-val list returns list w/ last val only

BRAINSTORM
Algo: iteration
Time: O(n) -> length of list
Space: O(1) -> no add. DS

PLAN
if !list || !list.next, return null
if !list.next.next, return list.next
initiate fast & slow pointers at list
initiate prev at null
while fast && fast.next
    fast = fast.next.next
    set prev = slow
    move slow 1x by setting to slow.next
set prev.next to slow.next to delete node
return slow
*/

function removeMiddleNodes(list) {
    // if empty list or 1-value list, return null
    // if 2-value list, remove 1st node & return
    if (!list || !list.next) return null
    if (!list.next.next) return list.next

    // initiate pointers
    let slow = list
    let fast = list
    let prev = null

    // move pointers in position
    while (fast && fast.next) {
        // move fast 2x
        fast = fast.next.next
        
        // store the node before slow
        prev = slow

        // move slow 1x
        slow = slow.next
    }

    // remove middle node (aka "slow")
    prev.next = slow.next

    return list
}

console.log("list 1: ", arrayify(removeMiddleNodes(list1))) // 1, 2, 5, 6
console.log("list 2: ", arrayify(removeMiddleNodes(list2))) // null
console.log("list 3: ", arrayify(removeMiddleNodes(list3))) // 1, 3
console.log("list 4: ", arrayify(removeMiddleNodes(list4))) // 1, 2, 4, 5

/*
Remove every kth node in a linked list. k will always be >= 2

EXPLORE
input: LL, int
output: LL w/ every int node removed
    int always >= 2
if 2 nodes, return LL w/ 1 node
empty list returns null

BRAINSTORM
Algo: traversal
Time: O(n) -> number of nodes in list
Space: O(1) -> no add. DS

PLAN
if !head return null
initiate var to hold k counter
initiate pointer to traverse
while pointer.next
    if kCounter === 1
        pointer = pointer.next
        reset kCounter = k
    else
        pointer = pointer.next
        k--
return head

k = 2        
1 -> 3 -> 4
     h
2
*/

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(head, k) {
    if (!head) return null
    if (!head.next) return head
    
    let kCounter = k
    let pointer = head
    let curr = head
    
    while(pointer) {
        if (kCounter === 1) {
            pointer = curr.next
            kCounter = k
        } else {
            pointer = pointer.next
            curr = curr.next
            k--
        }
    }
    
    return head
}
