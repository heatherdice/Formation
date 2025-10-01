/*
1. function swapValuePairs(head) - swap the data in each node without swapping pointers
    Input: 1 → 2 → 3 → 4 → 5 → 6
    Output: 2 → 1 → 4 → 3 → 6 → 5
    Approach:
    set a curr var to head
    while curr and curr.next,
        set a temp var to curr,
        set current value to be current next value
        set current next value to temp
        finally, set current to next next node
    return the linked list
*/

class ListNode {
    constructor(val = null, next = null) {
        this.val = val;
        this.next = next;
    }
}

function swapValuePairs(head) {
    let curr = head
    while (curr && curr.next) {
        let temp = curr.val;

        curr.val = curr.next.val
        curr.next.val = temp;
        curr = curr.next.next
    }

    return head
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

let list1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))))

let testList = swapValuePairs(list1)
console.log(arrayify(testList))

/* 
2. function additionNext(head) - add to the value in each node by the value in the next node. The tail node has no next node so double its value

Approach:
    initiate curr var set to head
    while curr
        check if curr.next
            yes: curr.val = curr.val + curr.next.val
            no: curr.val = curr.val * 2
    return head
*/

function additionNext(head) {
    let curr = head

    while (curr) {
        if (curr.next) {
            curr.val = curr.val + curr.next.val
        } else {
            curr.val = curr.val * 2
        }

        curr = curr.next
    }

    return head
}

let testList2 = additionNext(list1)
console.log(arrayify(testList2))

/* 
3. function firstRemoveEveryOther(head) - remove every other node starting with removing the head.
    Input: 1 → 2 → 3 → 4 → 5 → 6
    Output: 2->4->6

Approach:
    initiate dummy node as empty node
    point dummy.next to head
    initiate curr var set to dummy
    while curr
        curr.next = curr.next.next -> removal
        curr = curr.next -> iteration
    return dummy.next
    */

function firstRemoveEveryOther(head) {
    let dummy = new ListNode()
    dummy.next = head
    let curr = dummy

    while (curr) {
        curr.next = curr.next.next
        curr = curr.next
    }

    return dummy.next
}
