/* 
EXPLORE
input: str
    base-10 int
output: return str as int
can do iteratively & recursively
be mindful of 0's and neg ints
leading 0's must be eliminated, trailing 0's kept
iterate from back to determine 1's, 10's, 100's place
    need to figure out how to know those spaces

BRAINSTORM
iterate & use math to return result
time: O(n) -> length of str
space: O(1) -> number takes up same amount of memory

recursion
time: O(n) -> length of str
space: O(n) -> recursion stack

PLAN
initiate result var, set to 0
initiate places var, set to 1
iterate backwards over str
    if str[i] !== "-"
        add (str[i]*places) to result
        multiply places var by 10
    else, multiply result by -1
return result
*/

function atoi(str) {
    let result = 0
    let places = 1

    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] !== "-") {
            result += (str[i] * places)
            places *= 10
        } else {
            result *= -1
        }
    }

    return result
}

console.log(atoi("123")) // 123
console.log(atoi("4")) // 4
console.log(atoi("0")) // 0
console.log(atoi("007")) // 7
console.log(atoi("-1")) // -1
console.log(atoi("-234")) // -234
console.log(atoi("600")) // 600
console.log(atoi("00500")) // 500