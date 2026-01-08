/* 
EXPLORE
input: LL
output: second-to-last element's val
assume empty LL returns empty LL
assume one-element LL returns that element

BRAINSTORM
LL not indexed, can't access based on length
need iteration
could possibly iterate faster w/ a 2 pointer?
Solution 1: 2 pointer
time: O(n) -> length of LL
space: O(1) -> no additional DS

PLAN
initiate dummy node
set dummy.next = head
set node var to head
iterate over LL while node
    if !node.next, return dummy
    move node & dummy forward
return node
*/
class Node {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

function secondToLast(head) {
    if (!head) return null
    if (!head.next) return head.val

    let result = head
    let node = head.next

    while (node.next) {
        result = result.next
        node = node.next
    }

    return result.val
}

console.log(secondToLast(null)) // null

let head = new Node(1)
console.log(secondToLast(head)) // 1

// 1 -> 2
head = new Node(1, new Node(2))
console.log(secondToLast(head)) // 1

// 1 -> 2 -> 3
head = new Node(1, new Node(2, new Node(3)))
console.log(secondToLast(head)) // 2

// 1 -> 2 -> 3 -> 4
head = new Node(1, new Node(2, new Node(3, new Node(4))))
console.log(secondToLast(head)) // 3

// 1 -> 2 -> 3 -> 4 -> 5
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))
console.log(secondToLast(head)) // 4