/* 
EXPLORE
input: arr of ints
output: SLL
if !arr return null
not altering input, just creating nodes w/ vals = arr elements in same order

BRAINSTORM
Solution: iterative
Time: O(n) -> length of list
Space: O(n) -> size of output

PLAN
if !arr return null
initiate new LL
iterate over arr
    create new node in established LL w/ val arr[i]
return LL
*/

class ListNode {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

function arrayToLL(arr) {
    if (!arr) return null

    let newLL = new ListNode(arr[0])
    let pointer = newLL

    for (let i = 1; i < arr.length; i++) {
        pointer.next = new ListNode(arr[i])
        pointer = pointer.next
    }

    return newLL
}

function toString(head) {
    if (!head)
        return "<empty>"

    let parts = []
    while(head) {
        parts.push(head.val)
        head = head.next
    }

    return parts.join(" -> ")
}

console.log(toString(arrayToLL([]))) // ""
console.log(toString(arrayToLL([1]))) // 1
console.log(toString(arrayToLL([1,2]))) // 1 -> 2
console.log(toString(arrayToLL([1,2,3]))) // 1 -> 2 -> 3
console.log(toString(arrayToLL([5,0,3]))) // 5 -> 0 -> 3
console.log(toString(arrayToLL([8,7,8,8]))) // 8 -> 7 -> 8 -> 8
console.log(toString(arrayToLL([8,7,8,8,7]))) // 8 -> 7 -> 8 -> 8 -> 7