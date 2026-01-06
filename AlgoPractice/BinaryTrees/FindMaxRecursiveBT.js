/* 
EXPLORE
input: BT node
output: max val
Q1: assume !root returns null
Q2: assume all vals are ints

BRAINSTORM
BFS - need to go through entire tree anyway

PLAN
initiate max var as -Infinity
initiate queue var as [root]
while queue.length
    initiate node var as queue.shift()
    if node.val > max, max = node.val
return max

*/
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right
    }
}

function findTreeMax(root) {
    if (!root) return null;

    let max = -Infinity;
    let queue = [root];

    while (queue.length > 0) {
        let node = queue.shift();
        if (node.val > max) max = node.val;

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return max > -Infinity ? max : null;
}

console.log(findTreeMax(null)) // null
console.log(findTreeMax(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
console.log(findTreeMax(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 29
console.log(findTreeMax(new TreeNode(1))) // 1