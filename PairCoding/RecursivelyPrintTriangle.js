/*
'''
Recursively Print Triangle

Use recursion to print an upside-down triangle of *X*s with a starting length k and tapering by 2 on subsequent levels. There should be the correct amount of leading spaces on each level. You can assume k will always be odd and positive.

Follow-up: Instead of being given an integer k, you're given an array of characters of odd length and must follow the same pattern of printing the triangle while using the array contents.  There should be the correct amount of leading spaces on each level. You can assume the array will always be odd and not None.

EXAMPLE(S)
printXTriangle(5)
XXXXX
 XXX
  X

printTriangle([a,b,c,d,e])
abcde
 bcd
  c
'''

EXPLORE
Algo 1
input: int
    always odd
    always positive
output: multi-line output of x's
    forms shape of upside-down triangle
leading spaces to form triangle
recursion
    base case
first line of our return is going to include k number of X's
    after that, reduce X's by 2, add 1 whitespace at front

*/

function printXTriangle(k) {
    let spaces = " "
    let xs = "X"

    function helper(whitespace) {
        if (k <= 0) return
        let pyramidLayer = spaces.repeat(whitespace) + xs.repeat(k)

        console.log(pyramidLayer)

        k -= 2

        helper(whitespace + 1)
    }

    return helper(0)
}

printXTriangle(7); console.log("====")
// XXXXXXX
//  XXXXX
//   XXX
//    X

printXTriangle(5); console.log("====")
// // XXXXX
// //  XXX
// //   X

printXTriangle(3); console.log("====")
// // XXX
// //  X

printXTriangle(1); console.log("====")
// X

// // iterative approach
// function printTriangleInterative(arr) {
//     // initiate var's
//     let spaces = " "
//     let charString = arr.join() // O(n)
//     let whitespace = 0

//     // iterate
//     for (let i = 0; i < arr.length; i++) { // O(n)
//         console.log(spaces.repeat(whitespace) + charString.subString(i))

//         whitespace++
//         arr.pop() // O(1)
//         charString = arr.join() // O(n)
//     }

//     return
// }

/* Follow-up: Instead of being given an integer k, you're given an array of characters of odd length and must follow the same pattern of printing the triangle while using the array contents.  There should be the correct amount of leading spaces on each level. You can assume the array will always be odd and not None.
Example:
printTriangle([a,b,c,d,e])
abcde
 bcd
  c

EXPLORE
input: arr of str's
    str's individual char's
    odd number of char's
output: multi-line output of char's
    forms shape of upside-down triangle
leading spaces to form triangle
deleting char's as we go
    1st & last
whitespace increases by 1 on each recursion
are we allowed to modify the input? yes
on each function call, 1st & last elements of arr are removed
    OR, to avoid complexity, pop last element & shift index by 1

BRAINSTORM
Solution: recursion, .join()
Time: O(n^2) -> sum of all join() and repeat() operations over all calls
Space: O(n) -> recursive stack

PLAN
original function signature w/ arr argument
    initiate spaces var of " "
    helper function w/ argument whitespace
        base case: if !arr.length return
        
        initiate string var using arr.join("")
        console.log spaces.repeat(whitespace) + string var
        
        arr.pop() to remove last arr element
        arr.shift() to remove 1st arr element

        recursive call of helper(whitespace + 1) 
return helper function w/ argument 0

*/
function printTriangleFromArr(arr) {
    let spaces = " "
    function helper(whitespace) {
        if (arr.length <= 0) return

        let returnString = arr.join("")
        console.log(spaces.repeat(whitespace) + returnString)

        arr.pop()
        arr.shift() // 

        helper(whitespace + 1)
    }

    return helper(0)
}

printTriangleFromArr(['t','a','c','o','c','a','t']); console.log("====")
// tacocat
//  acoca
//   coc
//    o

printTriangleFromArr(['a','b','c','d','e']); console.log("====")
// abcde
//  bcd
//   c

printTriangleFromArr(['X']); console.log("====")
// X
