/*
'''
Anagram Game Developer

An anagram is a word formed by rearranging the letters of another word using all the original letters exactly once. For example, the words 'opts', 'post', 'pots', 'spot', 'stop', and 'tops' are all anagrams of each other.

A game developer is creating an online, competitive anagram game where friends can play against each other. The game's objective is to create as many anagrams as possible from a random string shown on the screen. Given the challenge word, 'displayedWord', and the user input, 'userWord', determine if the user inputs a valid anagram. What would your algorithm look like using built-in functions to simplify the implementation, how about without?

As a follow-up, the game developer wants to create a custom anagram dictionary in memory to speed up their game performance by getting the list of anagrams for a word in less than O(N) time, where N is the length of the word list. Given a long list of words, create a class to represent the anagram dictionary. Then, implement a method that accepts a word and returns a list of the anagrams.

EXAMPLE(S)
isAnagram("coat", "taco") == True
isAnagram("steak", "skate") == True
isAnagram("pots", "stop") == True
isAnagram("stop", "taco") == False

dictionary = AnagramDictionary(["pots", "stop", "cat", "act", "tops", "opts", "post", "spot"])
dictionary.getAnagramWords("tac") == ["cat", "act"]

'''

EXPLORE
input: 2 str
output: bool
    whether or not words are anagrams of each other
all letters must be used
cannot have any extra letters
    if word1 & word2 are different lengths, False
are all words presented w/ all lowercase letters?
    assume yes
assume that inputs are always valid
    always str's of lowercase letters
can we alter the input at all?

BRAINSTORM
Solution 1: sort str's & compare
Time: O(n log n)
Space: O(1)

Solution 2: iterative comparison w/ nested loop
Time: O(n^2) -> n times through 1st loop, m times through 2nd loop
Space: O(1)

PLAN
check if str's do not match length -> return false

*/

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false

    for (let i = 0; i < str1.length; i++) {
        let found = false
        
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                found = true
                break
            }
        }

        if (!found) return false
    }

    return true
}

console.log(isAnagram("taco", "coat")) // true
console.log(isAnagram("steak", "skate")) // true
console.log(isAnagram("pots", "stop")) // true
console.log(isAnagram("stop", "taco")) // false
console.log(isAnagram("pots", "stops")) // false
