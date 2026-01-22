/*
You are given a list of strings that have a similar pattern of character distances except for one. 

For example, the strings "ABC", "CDE" both have a distance pattern of (1, 1).
The string "ADG" and "BEH" both have a distance pattern of (3, 3).

Given a list of strings, determine the one string that has a different distance.

EXAMPLE(S)
["ABC", "CDE", "QWE"] => "QWE"
["WER", "ADG", "BEH"] => "WER"

["ADG","BEH", "ACF"] => "ACF"
"ADG" (3, 3)    "BEH" (3,3)     "ACF" (2,3)
A-D = 3 steps   B-E = 3 steps   A-C = 2 steps
D-G = 3 steps   E-H = 3 steps   C-F = 3 steps

Edge cases/Assumptions/Observations : 
["cba","edc","ade"]->"ade"
["adc","bed","abc"]->"abc"
- no rotations for now
- only uppercase
- the string could be any length >= 2
- the number of strings in the list > 2
- only 1 outlier for now

Brainstorm:
Approach : 
- Use some data structure to hold the word distance pattern []

Plan : 
- First : calculating diff between adjacent character
- Second : use the different as key in a map 

initiate reference map var to hold letters of the alphabet as keys and incremental numbers as their values
initiate return map to hold the data of what we find in our str iteration
    keys: steps
    values: str's which match those steps
iterate over each str in arr
    compare pairs of letters of each str to letters in reference map, subtracting their value numbers from each other to determine the number of steps to move from one letter to another
    add this data to our return map
iterate over return map to determine which value only contains one str
return outlier str
*/

function find_different_distanc(list) {
    let alphabet = { "A": 1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6, "G": 7, "H": 8, "I": 9, "J": 10, "K": 11, "L": 12, "M": 13, "N": 14, "O": 15, "P": 16, "Q": 17, "R": 18, "S": 19, "T": 20, "U": 21, "V": 22, "W": 23, "X": 24, "Y": 25, "Z": 26 }

        let patternMap = {};

    for(let word of list) {
        for (let i = 0; i < word.length; i++) {
            let char = word[i]

            //look up mapped value
            let step = alphabet[char] - alphabet[char + 1]

            if (patternMap[step]) {
                patternMap[step].push(word)
            } else {
                patternMap[step] = [word]
            }
        }
    }

    // 2nd part iterating over map
    for (const [key, val] in patternMap) {
        if (val.length === 1) {
            return val[0]
        }
    }
}

/*
Follow ups 
******https://leetcode.com/problems/group-shifted-strings/description/
https://algo.monster/liteproblems/249

https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/description/

https://leetcode.com/problems/maximum-repeating-substring/description/

What if there are multiple strings which do not follow the majority pattern ?
How do we collate all such strings together in a list ? 
*/