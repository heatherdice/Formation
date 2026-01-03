/*
'''
Delete Even Nodes In Linked List

We've been given a linked list of integer values from 0 - 2^32, and we want to delete all of the nodes that are *even* and return the list's head.

We should return the modified input linked list as our result.

EXAMPLE(S)
[3,1,3] => [3, 1, 3]
[5, 6, 9] => [5, 9]
[2, 2, 2] => []
[2, 7, 4, 3, 5] => [7, 3, 5]
'''

EXPLORE
input: LL
output: LL w/ all even val's removed
assume 0 counts as even
assume empty list returns empty list
assume nodes should stay in same order
assume all node val's are ints

BRAINSTORM
Algo 1: iterate over list, remove if val is even
  ** JS has automatic garbage cleanup; if node has no link to another node it gets removed, does not impact time or space
time: O(n) -> length of list
space: O(1) -> no add. DS

Algo 2: recursion
time: O(n) -> length of list
space: O(n) -> recursive stack

PLAN - Algo 1
initiate dummy node as blank list node
point dummy.next to head
initaite curr var as dummy.next
initiate prev var as dummy
iterate forward over LL using while loop while(curr)
    check if curr is even
        if yes, remove
            set prev.next to curr.next
            set curr to curr.next
        if no, continue iteration 
            set prev to curr
            set curr to curr.next
return dummy.next
*/

// p           c.     n 
// dummy ----> 1 ---> 3 ----> 4 S1
//            p/c
// dummy ----> 3 ----> 4 S2
//             p       c 
// dummy ----> 3 ----> 4 S2
// p = c.next
// c = c.next

class ListNode {
    constructor(value, next = null) {
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

function deleteEvenNodes(head) {
    const dummy = new ListNode()
    dummy.next = head
    let curr = dummy.next
    let prev = dummy
    
    while (curr) {
        if (curr.value %2 === 0) {
            prev.next = curr.next
            curr = curr.next
        } else {
            prev = curr
            curr = curr.next
        }
    }

    return dummy.next
}

let list1 = new ListNode(3, new ListNode(1, new ListNode(3)))
let list2 = new ListNode(5, new ListNode(6, new ListNode(9)))
let list3 = new ListNode(2, new ListNode(2, new ListNode(2)))
let list4 = new ListNode(2, new ListNode(7, new ListNode(4, new ListNode(3, new ListNode(5)))))

let list1Solution = deleteEvenNodes(list1) // [3, 1, 3]
let list2Solution = deleteEvenNodes(list2) // [5, 9]
let list3Solution = deleteEvenNodes(list3) // []
let list4Solution = deleteEvenNodes(list4) // [7, 3, 5]
