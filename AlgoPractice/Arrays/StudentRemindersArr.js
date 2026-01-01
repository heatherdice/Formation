/* 
EXPLORE
input: sorted arr of unique numbers 0-99
    represents IDs of students who have registered for classes
output: sorted arr of str's
    ID(s) which is/are not registered
    if 1 ID, just presents as "int"
    if more than 1 ID, presents as "int-int"
if arr starts at number other than 0, 1st str should start w/ 0
if arr ends w/ number other than 99, last number in last str should be 99

BRAINSTORM
Solution 1: iterate over input arr, checking numbers & adding to str's as necessary
    would need result arr & str's
Time: O(n) -> length of input
Space: O(n) -> size of output

PLAN
edge case: empty arr, return ["0-99"]
intitiate result arr var
initiate prev & top var's as -1 & 100
loop over arr
    check if i is < arr.length
        if yes, set curr var to arr[i]
        if no, set curr var to top
    check if difference between curr & prev > 1
        if yes: 
        initiate start var as prev + 1
        initiate end var as curr - 1
        check if start & end are same number
            if yes, push start as str to result arr
            if no, push 'start-end' as str to result arr
        set prev = curr
return result
*/

function mustRegister(arr) {
    if (!arr.length) return ["0-99"]

    let result = []
    let prev = -1
    let top = 100

    for (let i = 0; i <= arr.length; i++) {
        let curr = i < arr.length ? arr[i] : top

        if (curr - prev > 1) {
            let start = prev + 1
            let end = curr - 1

            result.push(start === end ? `${start}` : `${start}-${end}`);
        }
        prev = curr;
    }

    return result
}

console.log((mustRegister([]))); // ['0-99']
console.log((mustRegister([50]))); // ['0-49', '51-99']
console.log((mustRegister([0]))); // ["1-99"]
console.log((mustRegister([1]))); // ["0", "2-99"]
console.log((mustRegister([99]))); // ["0-98"]
console.log((mustRegister([48, 50]))); // ["0-47", "49", "51-99"]
console.log((mustRegister([47, 50]))); // ["0-46", "48-49", "51-99"]
console.log((mustRegister([47, 48, 49, 50]))); // ["0-46", "51-99"]