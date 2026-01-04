/* 
EXPLORE
input: 2 str
output: bool
    true if anagram
    false if not
anagram = all original letters used exactly once to create new word
assume all str char's are lowercase letters
aim for linear (O(n)) time

BRAINSTORM
Solution 1: split 1 str (time and space O(n)) into arr, store letters in set, if letter already in set, return false
Time: O(n) -> str.split(), iteration
Space: O(n) -> str.split, set
** problem: s & t are the same length but one contains more than 1 of the same letter and the other does not

Solution 2: tracker map for str's, return map1 = map2
Time: O(n) -> iteration
Space: O(n) -> maps
** problem: not DRY

PLAN
edge case: if s or t different lengths, return false
iterate over str's using 2 loops, creating 2 tracker maps
return map1 = map2

*/

function isAnagram(s, t) {
    if (s.length !== t.length) return false

    let sMap = new Map()
    let tMap = new Map()

    for (let i = 0; i < s.length; i++) {
        sMap.has(s[i]) ?
        sMap.set(s[i], sMap.get(s[i]) + 1) :
            sMap.set(s[i], 1)
    }

    for (let j = 0; j < t.length; j++) {
        tMap.has(t[j]) ?
        tMap.set(t[j], tMap.get(t[j]) + 1) :
            tMap.set(t[j], 1)
    }

    for (let [key, val] of sMap) {
        if (sMap.get(key) !== tMap.get(key)) return false
    }

    return true
}

console.log(isAnagram("anagram","nagaram")); // true
console.log(isAnagram("rat","car")); // false
console.log(isAnagram("aacc","ccac")); // false
console.log(isAnagram("","")); // true
console.log(isAnagram("Dormitory","Dirtyroom")); // true