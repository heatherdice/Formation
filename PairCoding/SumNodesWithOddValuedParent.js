/*
'''
Sum Nodes With Odd Valued Parent

Given a binary tree, return the sum of all nodes with an odd-valued parent node.

EXAMPLE(S)
[6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5] => 19

            6
        7            8
    2*     7*      1    3
    9 _   1* 4*_ _ _ 5*  (underscore represent null)

    2 + 7 + 1 + 4 + 5 = 19

FUNCTION SIGNATURE
function sumNodesWithOddParent(root) {
'''

EXPLORE
input: BT
output: int
    sum -> all nodes w/ odd-valued parent
be sure to add the nodes themselves, not the parent values
assuming all val's are +
!null check for child nodes to avoid weird errors

BRAINSTORM
Algo 1: BFS, queue, loop
Time: O(n) - nodes, if all nodes must be passed over
Space: O(w) - width of tree, if all nodes have to be stored in queue

Algo 2: DFS O(h) tree height (recursive)
Time: O(n) - nodes, if all nodes must be passed over
Space: O(n) - recursive stack

PLAN
DFS - cleaner code, same t/s complexity regardless of method
preorder - start at top to evaluate parent nodes
dfs helper function w/ argument node
    base case: if !node, return 0
    initialize sum val set to 0
    check if node is parent & odd
        if yes & there is left value, add left to sum
        if yes & right value, add right to sum
    sum += recurse root.left
    sum += recurse root.right
return dfs function w/ argument root
*/

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const test1 = new TreeNode(6,
    new TreeNode(7,
        new TreeNode(2, null, null),
        new TreeNode(7, null, null)
    ),
    new TreeNode(8,
        new TreeNode(1, null, null),
        new TreeNode(3, null, null)
    )
);

const test2 = new TreeNode(2,
    new TreeNode(5, null, null),
    new TreeNode(9, null, null)
    );

    const test3 = new TreeNode(6,
    new TreeNode(7,
        new TreeNode(2, null, null),
        new TreeNode(7, null, null)
    ),
    new TreeNode(9,
        new TreeNode(1, null, null),
        new TreeNode(3, null, null)
    )
);

function sumNodesWithOddParent(root) {
    function dfs(node) {
        if (!node) return 0;
        let sum = 0

        // if node is parent & odd
        if ((node.left || node.right) && node.value % 2 !== 0) {
            if (node.left) sum += node.left.value;
            if (node.right) sum += node.right.value;
        }

        // recursive sum
        sum += dfs(node.left);
        sum += dfs(node.right);
        return sum;
    }

    return dfs(root)
}

console.log(sumNodesWithOddParent(test2)) // 0
console.log(sumNodesWithOddParent(test1)) // 9
console.log(sumNodesWithOddParent(test3)) // 13