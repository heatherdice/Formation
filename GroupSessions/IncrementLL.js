/* 
Given a linked list with each node representing a digit in an integer, add 1 to the number.

EXAMPLES
1 -> 2 -> 3 returns 1 -> 2 -> 4
9 returns 1 -> 0
1 -> 2 -> 9 returns 1 -> 3 -> 0
9 -> 9 -> 9 returns 1 -> 0 -> 0 -> 0

EXPLORE
input: LL where each node val is a digit from 0 to 9
output: LL where each node val represents a digit which creates a number that adds up to one more than the number represented by the input LL
would need to create new head if last digit is 9
9's get changed to 0's
empty list returns a list of 1 node with value 1

BRAINSTORM
Solution: recursion -> call stack provides access to previous node!
Time: O(n) -> length of list
Space: O(n) -> recursion stack

PLAN
initiate sentinel node
initiate helper function w/ argument head
    base case: if !head return 1
    initiate carry var holding recursive call of helper on head.next
    initiate curr var holding carry + head.val
    if curr var === 10
        reset head.val to 0
        reset carry var to 1
    otherwise,
        set head.val val to curr
        set carry var to 0
    return carry
recurse helper function on sentinel
if sentinel.value === 1
    return sentinel
otherwise
    return sentinel.next

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

function incrementLinkedList(head) {
    // initiate sentinel node in case head needs to be changed
    let sentinel = new ListNode(0, head)

    function helper(head) {
        // base case: at end of list, return 1 to represent the "+1" operation
        if (!head) return 1

        // recursively process the rest of the list, get any carry that results
        let carry = helper(head.next)
        // add carry to current node's value
        let curr = carry + head.value

        // if current node value is 10, we need to convert it to 0 & carry 1 to the next higher digit
        if (curr === 10) {
            head.value = 0
            carry = 1
        } else {
            // otherwise, set the new value & clear the carry var
            head.value = curr
            carry = 0
        }

        // return carry so previous node can use it
        return carry
    }

    // call helper function on sentinel node, starting right before the head
    helper(sentinel)

    // if sentinel's val is 1, we are at the beginning of the number and can return the list starting there
    if (sentinel.value === 1) {
        return sentinel
    } else {
        // otherwise, sentinel still = 0, so return the list starting at the next node, which is the true head
        return sentinel.next
    }
}

let list1 = new ListNode(1, new ListNode(2, new ListNode(3)))
let list2 = new ListNode(9)
let list3 = new ListNode(1, new ListNode(2, new ListNode(9)))
let list4 = new ListNode(9, new ListNode(9, new ListNode(9)))

console.log(arrayify(incrementLinkedList(list1))) // [1,2,4]
console.log(arrayify(incrementLinkedList(list2))) // [1,0]
console.log(arrayify(incrementLinkedList(list3))) // [1,3,0]
console.log(arrayify(incrementLinkedList(list4))) // [1,0,0,0]