/* 
EXPLORE
input: BT root
output: int
    represents num of elements in tree
assume !root = 0

BRAINSTORM
recursion - best time & space O(n)
    n = size of tree & recursive stack
base case: if !root
can add 1 for every recursion
    doesn't add var

PLAN
if no root, return 0
recursively call function in return statement w/ root.left as argument +1 & root.right as argument +1

*/

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function countTree(root) {
    if (!root) return 0;

    return  1 + countTree(root.left) + countTree(root.right); 
}

console.log(countTree(null)) // 0
console.log(countTree(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
//     1
//    / \
//   2   3
console.log(countTree(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 6
// //      2
// //     / \
// //    29  4
// //    /    \
// //   26     2
// //          /
// //         9
console.log(countTree(new TreeNode())) // 1