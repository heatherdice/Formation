/* 
EXPLORE
input: 2 sorted arr's
    1st arr has extra space filled w/ 0's
    2nd arr has no extra space
        any 0 in 2nd arr will be in output arr
output: merged arr
    modified 2nd arr
    may include duplicates
will involve inserting in the middle of arr
use no extra space
VERY confused about what the extra arguments
    not mentioned in the instructions??
    appears to be the lengths of each arr w/out extra space?
    so length of output arr should = l1 + l2
    seems unnecessary?
assume arr2 can be altered

BRAINSTORM
Solution: iteration, pop off extra 0's
Time: O(n)
Space: O(1)

PLAN
if both arr's empty, return arr1
if 1st arr is empty or starts w/ 0, return arr2
initiate j var to point to arr2
iterate forward over arr 1
    if arr[arr.length - 1] === 0, pop
    if arr1[i] && arr1[i + 1] >= arr2[j]
        insert arr2[j] before arr1[i]
        i++
        j++
*/

function mergeSorted(arr1, l1, arr2, l2) {
    if (!arr1 && !arr2) return arr1
    if (arr1[0] === 0 || !arr1) return arr2

    // get rid of extra 0's
    let i = arr1.length - 1
    while (i === 0) {
        arr1.pop()

        i--
    }

    // only way I can think of to incorporate the l1 & l2 arguments??
    if (arr1.length + arr2.length !== l1 + l2) {
        return false
    }

    let j = 0

    // merge 2 arr's
    while (arr1.length && arr2.length) {
        if (arr1[j] > arr2[0]) {
            arr1.splice(j, 0, arr2.shift())

            j++
        }

        j++
    }

    return arr1
}

let a1, a2, l1, l2, result;

a1 = [1, 3, 5, 0, 0, 0];
a2 = [2, 4, 6];
l1 = 3;
l2 = 3;
result = mergeSorted(a1, l1, a2, l2);
console.log(result, [1, 2, 3, 4, 5, 6]);

a1 = [1, 2, 3];
a2 = [];
l1 = 3;
l2 = 0;
result = mergeSorted(a1, l1, a2, l2);
console.log(result, [1, 2, 3]);

a1 = [0, 0, 0];
a2 = [1, 2, 3];
l1 = 0;
l2 = 3;
result = mergeSorted(a1, l1, a2, l2);
console.log(result, [1, 2, 3]);

a1 = [2, 3, 7, 0, 0, 0];
a2 = [1, 5, 6];
l1 = 3;
l2 = 3;
result = mergeSorted(a1, l1, a2, l2);
console.log(result, [1, 2, 3, 5, 6, 7]);

a1 = [7, 8, 9, 0, 0, 0];
a2 = [1, 2, 3];
l1 = 3;
l2 = 3;
result = mergeSorted(a1, l1, a2, l2);
console.log(result, [1, 2, 3, 7, 8, 9]);

a1 = [-3, -1, 2, 0, 0, 0];
a2 = [-2, 0, 1];
l1 = 3;
l2 = 3;
result = mergeSorted(a1, l1, a2, l2);
console.log(result, [-3, -2, -1, 0, 1, 2]);