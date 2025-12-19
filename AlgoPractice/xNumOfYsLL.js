/* 
EXPLORE
input: intA, intB
output: LL of intA length w/ all intB vals
assume intA is always + & > 0

BRAINSTORM
Solution: iterative
Time: O(n) -> size of intA
Space: O(n) -> size of output (intA)

PLAN
if !intA, return null
initiate new LL
while intA
    add new node of val intB to LL
return LL
*/

class ListNode {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

function createLL(count, value) {
    if (!count) return null

    let newLL = new ListNode(value)
    let pointer = newLL
    count -= 1

    while (count) {
        pointer.next = new ListNode(value)
        pointer = pointer.next

        count--
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

console.log(toString(createLL(0, 1000))) // ""
console.log(toString(createLL(1, 999))) // 999
console.log(toString(createLL(2, 88))) // 88 -> 88
console.log(toString(createLL(3, 4))) // 4 -> 4 -> 4
console.log(toString(createLL(5, 3))) // 3 -> 3 -> 3 -> 3 -> 3
console.log(toString(createLL(6, 6))) // 6 -> 6 -> 6 -> 6 -> 6 -> 6
console.log(toString(createLL(2, -10))) // -10 -> -10
console.log(toString(createLL(3, 0))) // 0 -> 0 -> 0