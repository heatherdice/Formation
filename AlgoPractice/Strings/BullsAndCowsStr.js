/* 
EXPLORE
input: 2 str of = length
    "secret" & "guess"
    made up of digits from 0 to 9
    bull = digit is same in val & position
    cow = digit appearing in both str but diff pos
output: hint str
    formatted as [int]A[int]B
    tells how many bulls (A) & how many cows (B)
str could be incredibly long

BRAINSTORM
Solution: iteration, new str for solution, tracker map for cows
Time: O(n) -> length of str
Space: O(n) -> size of map

PLAN
initiate bulls & cows ints at 0
initiate seen var as new empty map
iterate over secret str
    add element to seen map, set val to 1
    check if secret[i] = guess[i]
        if yes, bulls++
        otherwise set map
iterate over guess str
    increment cows if secret & guess !== && guess val in seen map is > 1
return `${bull}A${cow}B`
*/

function getHint(secret, guess) {
    let bulls = 0
    let cows = 0
    let seen = new Map()
    let i = 0

    while (i < secret.length) {
        seen.set(secret[i], 1)

        if (secret[i] === guess[i]) {
            bulls++
        } else {
            seen.set(secret[i], (seen.get(secret[i]) || 0) + 1)
        }

        i++
    }

    for (let i = 0; i < guess.length; i++) {
        if (secret[i] !== guess[i] && seen.get(guess[i]) > 0) {
            cows++
            seen.set(guess[i], seen.get(guess[i]) - 1)
        }
    }

    return `${bulls}A${cows}B`
}

console.log(getHint("1807", "7810")); // "1A3B"
console.log(getHint("1123", "0111")); // "1A1B"
console.log(getHint("1", "0")); // "0A0B"
console.log(getHint("1", "1")); // "1A0B"
console.log(getHint("1122", "2211")); // "0A4B"
console.log(getHint("0000", "0000")); // "4A0B"