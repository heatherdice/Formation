/*
Given 3 distinct words, determine if the 3rd word is potentially a portmanteau of the 1st 2

Portmanteau is a word that is made by taking the start of one word and the end of another and mashing them together

Ex: brunch = breakfast/lunch

Compound words are not considered portmanteaus, so "football" is not a portmanteau of "foot" and "ball"
At least 1 of the words needs to be truncated

EXPLORE
input: 3 str
output: bool
    true if 3rd word is portmanteau of 1st 2
portmanteau = made by taking start of 1 word & end of 2nd word & mashing them together
    brunch = br from breakfast & unch from lunch
    not a compound word
    at least 1 of the words needs to be truncated
only parts of each word used
1 of the words can be used in full
if all of both words is used, returns false
letters remain in order 
    so it's not just about using the same letters out of order
    rules out map/set
check if 1st few letters of word3 match 1st few letters of word1
once letters cease to match word1, check word2
could check word2 from end of word3 & word1 from beginning
need to keep track of indeces
edge case: letter overlap between word1 & word2
edge case: word1 is part of the end of word3, word2 is part of the beginning of word3

BRAINSTORM
Algo 1: iteration
Time: O(n) -> length of loop
Space: O(1) -> no additional DS

PLAN
edge case: word3 is longer than words 1 & 2 combined -> return false
check function w/ arguments A and B
    initiate index var to 0
    loop while index is less than A's length & the letters at the same index in A and word3 match
    after loop, if index is still 0 (did not even enter loop), return false
    initiate remainder var set to remaining length of word3 (word3.length - index)
    check if remainder is <= 0 or > than B's length
        if yes, return false
    initiate starting var to hold starting point for wordB iteration (b's length - remainder)
    loop remainder of word B
        check if word3's letter matches word B's letter
            if not, return false
    check if both words were used in full
        if yes, return false
    return true
return check(word1, word2) || check(word2, word1) to account for mismatched word1/word2 order
*/

function isPortmanteau(word1, word2, word3) {
    // cannot be portmanteau if 3's length is longer than that of 1 & 2 combined
    if (word3.length > word1.length + word2.length) return false

    // check whether word3 == prefix(A) + suffix(B)
    function prefixSuffixCheck(A, B) {
        // match prefix of A against start of word3
        let i = 0
        // loop while index is < A & 3, & while letters of both words match
        while (i < A.length && i < word3.length && A[i] === word3[i]) i++

        // if loop was not entered, letters do not match between words & is not portmanteau
        if (i === 0) return false

        // calculate remaining length of word3 & save in var
        const remLen = word3.length - i
        // remainder must contribute at least 1 char and fit inside B
        if (remLen <= 0 || remLen > B.length) return false

        // compare remainder of word3 to the suffix of B (without creating substrings)
        const startB = B.length - remLen
        for (let k = 0; k < remLen; k++) {
            if (word3[i + k] !== B[startB + k]) return false
        }

        // reject if both words were used entirely (that's just concatenation)
        const usedAllA = i === A.length
        const usedAllB = remLen === B.length
        if (usedAllA && usedAllB) return false

        return true
    }

    // test both orders: word1-prefix + word2-suffix OR word2-prefix + word1-suffix
    return prefixSuffixCheck(word1, word2) || prefixSuffixCheck(word2, word1)
}

console.log(isPortmanteau("smoke", "fog", "smog")) // True
console.log(isPortmanteau("snake", "fog", "smog")) // False
console.log(isPortmanteau("lunch", "breakfast", "brunch")) // True
console.log(isPortmanteau("shrink", "inflation", "shrinkflation")) // True
console.log(isPortmanteau("foot", "ball", "football")) // False
