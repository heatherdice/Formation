/* 
EXPLORE
input: root, 2 nodes
output: earliest node w/ both input nodes as descendants
if no root? null
if root is either of the 2 input nodes? root
if no ancestor to both input nodes? root
will need to determine ancestor of BOTH nodes
input nodes may not be siblings
    traverse until node val matches one of the input nodes
assume all node values are unique

BRAINSTORM
Solution: DFS
Time: O(n) -> size of tree
Space: O(n) -> recursion

PLAN
edge case: if !root return null
inorder helper function w/ node as argument
    base case: if !node return null
    if node is p or q, return node
    initiate left & right var's to hold inOrder function calls on left & right
    if both left & right exist, return node
    return left or right
initiate var result to hold initial inorder call
return result.val if it exists, otherwise return null
*/

class Node {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

function lowestCommonAncestor(root, p, q) {
    if (!root) return null

    function inOrder(node) {
        if (!node) return null

        if (node === p || node === q) return node

        const left = inOrder(node.left)
        const right = inOrder(node.right)

        if (left && right) return node

        return left || right
    }

    const result = inOrder(root)
    return result ? result.val : null
}

let oneNode = new Node(1)
console.log(lowestCommonAncestor(oneNode, oneNode, oneNode)) // 1

//       1
//    2      3
//  4   5  6   7
let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)
let node6 = new Node(6)
let node7 = new Node(7)
node1.left = node2
node1.right = node3
node2.left = node4
node2.right = node5
node3.left = node6
node3.right = node7

console.log(lowestCommonAncestor(node1, node4, node5)) // 2
console.log(lowestCommonAncestor(node1, node2, node3)) // 1
console.log(lowestCommonAncestor(node1, node1, node7)) // 1
console.log(lowestCommonAncestor(node1, node5, node6)) // 1
console.log(lowestCommonAncestor(node1, node3, node3)) // 3

//           30
//     20         40
//  10   25     33   60
//   15 23    32       80
let node30 = new Node(30)
let node20 = new Node(20)
let node40 = new Node(40)
let node10 = new Node(10)
let node25 = new Node(25)
let node33 = new Node(33)
let node60 = new Node(60)
let node15 = new Node(15)
let node23 = new Node(23)
let node32 = new Node(32)
let node80 = new Node(80)
node30.left = node20
node30.right = node40
node20.left = node10
node20.right = node25
node40.left = node33
node40.right = node60
node10.right = node15
node25.left = node23
node33.left = node32
node60.right = node80

console.log(lowestCommonAncestor(node30, node15, node10)) // 10
console.log(lowestCommonAncestor(node30, node15, node23)) // 20
console.log(lowestCommonAncestor(node30, node15, node80)) // 30
console.log(lowestCommonAncestor(node30, node30, node30)) // 30
console.log(lowestCommonAncestor(node30, node32, node80)) // 40
console.log(lowestCommonAncestor(node30, node40, node60)) // 40