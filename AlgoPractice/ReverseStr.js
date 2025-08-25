/* 
EXPLORE
input: str
output: str reversed
new str
str's are immutable
no built-ins

BRAINSTORM
loop str backwards, adding char's to new str
space: O(n) - new str
time: O(n) - length of input str

PLAN
initiate new s var
loop backwards over input
    concat char to reversed str
return new s

*/

function reverseString(str) {
    if (str.length <= 1) return str
    let reversed = ""

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }

    return reversed
}

console.log(reverseString("")) // ""
console.log(reverseString("a")) // "a"
console.log(reverseString("foo")) // "oof"
console.log(reverseString("food")) // "doof"