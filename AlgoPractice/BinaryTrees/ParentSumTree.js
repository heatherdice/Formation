/* 
EXPLORE
input: BT root
output: altered BT where each node is sum of itself and its parent
assume tree w/ no root returns null
need to start at bottom of tree
    nodes do not increase down the tree
    node = sum of itself + original parent val

BRAINSTORM
DFS in-order
    starts at bottom L node, then to parent

PLAN
if !root return null
recurse w/ root.left
if root.left, root.val+=root.left
if root.right, root.val+=root.right
recurse w/ root.right
return root

*/
class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right
    }
}

function immediateParentSum(root) {

    function inOrderDFS(node, parentOriginalVal) {
        if (!node) return;

        node.val += parentOriginalVal;
        const originalVal = node.val - parentOriginalVal;


        inOrderDFS(node.left, originalVal);
        inOrderDFS(node.right, originalVal);
    }

    inOrderDFS(root, 0);
    return root;
}

// console.log(immediateParentSum(null) === null)

//    1
//  1   2
// 3 4    6
let root = new Node(1,
    new Node(1,
        new Node(3),
        new Node(4)
    ),
    new Node(2,
        null,
        new Node(6)
    )
)
immediateParentSum(root)
console.log(root.val) // 1
console.log(root.left.val) // 2
console.log(root.left.left.val) // 4
console.log(root.left.right.val) // 5
console.log(root.right.val) // 3
console.log(root.right.right.val) // 8