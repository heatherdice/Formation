/* 
EXPLORE
input: 2 BT roots
output: bool
    must be structurally identical & have same node vals to be true
Q1: assume if one input is null, function returns false
Q2: assume these are not BSTs
Q3: assume if both inputs are null, function returns true

BRAINSTORM
will need to traverse every node of both BTs until non-match is found
    function needs to exit upon that finding
DFS pre-order: node->left->right
time: O(n) - time it takes to go through tree before finding mismatch or ruling true
space: O(h) - height of tree (recursive call stack)

PLAN
edge case: if !p || !q, return false
edge case: if !p && !q, return true
base case: if p.val !== q.val, return false
recurse p.left, q.left || p.right, q.right

*/

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right
    }
}

function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;

    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

function buildTree(arr) {
    if (!arr.length) return null;
    const nodes = arr.map(v => (v === null ? null : new TreeNode(v)));
    let i = 1;
    for (const node of nodes) {
        if (node !== null) {
        if (i < nodes.length) node.left = nodes[i++];
        if (i < nodes.length) node.right = nodes[i++];
        }
    }
    return nodes[0];
}

const cases = [
  [[1, 2, 3], [1, 2, 3], true],      // identical trees
  [[1, 2], [1, null, 2], false],    // structural difference
  [[1, 2, 1], [1, 1, 2], false],     // value difference
  [[], [], true]                 // both empty
];

cases.forEach(([a, b, expected], idx) => {
    const result = isSameTree(buildTree(a), buildTree(b));
    console.log(`Test ${idx + 1}: ${result} (expected ${expected})`);
});