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

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

function solution(list) {
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


