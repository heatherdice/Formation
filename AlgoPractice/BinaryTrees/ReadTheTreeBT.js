/* 
EXPLORE
input: BT root node
output: arr of vals
    vals should be in order of read
Q1: assume [] returns []

BRAINSTORM
BFS - breadth first search
    uses queue to traverse
    traverses in order of breadth, aka top-bottom, left-right
need output arr
    space: O(n) - size of output arr
need at least 1 while loop for traversal
    time: O(d) - depth of tree

PLAN
if !root, return []
initiate queue w/ [root]
initiate return arr w/ []
while queue.length > 0
    initiate node as queue.shift()
    return arr.unshift(node)
    if node.right, queue.push
    if node.left, queue.push
return arr

*/

function treeToArray(root) {
    if (!root) return [];

    let queue = [root];
    let result = [];

    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node.val);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return result;
}

class BTNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right
    }
}

console.log(treeToArray(null)); // []
console.log(treeToArray(new BTNode("a", new BTNode("b", new BTNode("c"), new BTNode("d"))))); // [ 'a', 'b', 'c', 'd' ]
console.log(treeToArray(new BTNode("a", new BTNode("b", new BTNode("c", new BTNode("d")))))); // [ 'a', 'b', 'c', 'd' ]

const complete = new BTNode('a',
    new BTNode('b',
        new BTNode('d'),
        new BTNode('e')
    ),
    new BTNode('c',
        new BTNode('f'),
        new BTNode('g')
    )
);
console.log(treeToArray(complete)); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]