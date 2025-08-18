/* 
    ✏️ Description
    ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
    Q. Given a linked list, sum all elements in the list.

    Examples:
    • Given a linked list: 1 ➞ 4 ➞ 5 // returns 10
    • Given a linked list: 1 // returns 1

    EXPLORE
    input: LL
    output: int (sum of elements)
    assume empty LL returns 0
    assume values can be pos or neg
    assume SLL

    BRAINSTORM
    recursion
    time: O(n) - length of LL
    space: O(n) - recursive stack

    PLAN
    base case: if !LL return 0
    return node.value + recurisve call on node.next
*/

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function sum(node) {
    if (!node) return 0
    return node.value + sum(node.next);
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
console.log(sum(null)) // 0
console.log(sum(LL1)) // 10
console.log(sum(new ListNode(1))) // 1