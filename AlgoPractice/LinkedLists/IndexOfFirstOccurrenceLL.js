/* 
EXPLORE
input: LL & int
    int = target val
output: int
    representing "index" of target val
!target val in list -> -1
!node -> -1

BRAINSTORM
iterative
time: O(n) - size of LL
space: O(1) - no added data structures

PLAN
if !node, return -1
set result var to 0
while we have a node
    see if node val = target int
        if yes, return result
    increment result
    node = node.next
return -1

*/

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function firstIndexInLL(node, target) {
    if (!node) return -1;

    let result = 0;

    while (node) {
            if (node.val === target) {
            return result;
        }

        result++;
        node = node.next;
    }

    return -1;
}

let list1 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
// 1 -> 2 -> 3 -> 4 -> 5
let list2 = new Node(2);
// 2
let list3 = new Node(-1, new Node(-2, new Node(-3, new Node(-4, new Node(-5)))));
// -1 -> -2 -> -3 -> -4 -> -5
let list4 = new Node(1, new Node(2, new Node(3, new Node(2, new Node(1)))));
// 1 -> 2 -> 3 -> 2 -> 1

console.log(firstIndexInLL(null, 12)); // -1
console.log(firstIndexInLL(list1, 9)); // -1
console.log(firstIndexInLL(list1, 3)); // 2
console.log(firstIndexInLL(list2, 2)); // 0
console.log(firstIndexInLL(list2, 1)); // -1
console.log(firstIndexInLL(list3, -2)); // 1
console.log(firstIndexInLL(list4, 2)); // 1
console.log(firstIndexInLL(list4, 1)); // 0