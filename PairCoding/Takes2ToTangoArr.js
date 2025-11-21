/* 
'''
It takes two to Tango!

A dance studio is holding a Tango lesson tonight involving 2 half-hour sessions. The studio is creating a plan to pair dancers in the second session with a different partner from the first session. Given a list of Tango pairs for each session, determine if the studio will pair up any partners twice.

This problem aims to familiarize you with storing and retrieving information from data structures to create a minimal algorithm. In this instance, the Engineering Method is valuable because it helps you arrive at a more optimal algorithm than brute force.

As a follow-up, how would you write an algorithm to detect repeated pairs in 3 sessions, in any number of sessions? How would you write an O(N) time algorithm to determine how often the matcher created each pair? Again, it should count pairs in reversed order as the same pair.
 
EXPLORE
input: 2 arr's of arr's
    inner arr's contain 2 str's each
output: boolean 
    represents whether 2 str's wound up in an inner arr 2x
assume each inner arr always contains 2 str's
assume all names are unique
compare inner arr's to make sure that they are all different

- will the array lengths always be equal?
- what do we return if they are not equal?

BRAINTSTORM
Time: O(n)
Space: O(1)
- Use two for loops for each session
- Compare the elements in each session, to see if the names appear twice in each session

create map from session1
    each inner arr is key-val pair
    key = 1st of the pair alphabetically
    value = 2nd of the pair alphabetically
iterate session2
    check if 1st alphabetical str in inner arr matches a key in map
    check if value of that key matches the 2nd alphabetical str in inner arr
        if yes, return false
return true

EXAMPLE(S)
session1 = [["Alice", "Baxter"], ["Charles", "Davis"], ["Jack", "Daniels"]]
session2 = [["Jack", "Charles"], ["Baxter", "Davis"], ["Alice", "Daniels"]]
hasRepeatTangoPartner(session1, session2) == False

session1 = [["Alice", "Baxter"], ["Charles", "Davis"], ["Jack", "Daniels"]]
session2 = [["Jack", "Daniels"], ["Alice", "Charles"], ["Baxter", "Davis"]]
hasRepeatTangoPartner(session1, session2) == True

Jack and Daniels have been partnered up on both sessions.

function addToMapInOrder(map, str1, str2) {
    // Compare the two strings
    if (str1.localeCompare(str2) < 0) {
        // str1 comes before str2
        map.set(str1, str2);
    } else {
        // str2 comes before or is equal to str1
        map.set(str2, str1);
    }
}

// Example usage
const myMap = new Map();
addToMapInOrder(myMap, "Charlie", "Alice");
addToMapInOrder(myMap, "Bob", "David");

console.log(myMap); // Map { 'Alice' => 'Charlie', 'Bob' => 'David' }

*/

function hasRepeatTangoPartner(firstSession, secondSession) { 
    let session1 = new Map()

    for (let i = 0; i < firstSession.length; i++) {
        // iterate firstSession
        // add str that is 1st alphabetically as key in map
        // add 2nd str as value
        let innerArr = firstSession[i]
        let firstElement = innerArr[0]
        let secondElement = innerArr[1]

        if (firstElement.localeCompare(secondElement) < 0) {
            session1.set(firstElement, secondElement)
        } else {
            session1.set(secondElement, firstElement)
        }
    }

    // iterate secondSession & compare inner arr's w/ map
    for (let i = 0; i < secondSession.length; i++) {
        let innerArr = secondSession[i]
        let firstElement = innerArr[0]
        let secondElement = innerArr[1]

        if (firstElement.localeCompare(secondElement) < 0) {
            // firstElement is our key
            // check that value does not = secondElement
            if (session1.get(firstElement) === secondElement) {
                return true
            }
        } else {
            // secondElement is our key
            // check that value does not = firstElement
            if (session1.get(secondElement) === firstElement) {
                return true
            }
        }
    }

    return false
}

function hasRepeatTangoPartner(firstSession, secondSession) {
    let firstTango = new Map()

    for (let [partner1, partner2] of firstSession)
        firstTango.set(partner1, partner2)

    for (let [partner1, partner2] of secondSession)
        // check partners in both directions
        if (firstTango.has(partner1) && firstTango.get(partner1) === partner2
            || firstTango.has(partner2) && firstTango.get(partner2) === partner1)
            return true

    return false
}





// swapped ordering shouldn't affect the correctness
let session1 = [["Alice", "Baxter"]]
let session2 = [["Baxter", "Alice"]]
console.log(hasRepeatTangoPartner(session1, session2) === true)

// disjoint list
session1 = [["Alice", "Baxter"]]
session2 = [["Charles", "Davis"]]
console.log(hasRepeatTangoPartner(session1, session2) === false)

// partner mixing
session1 = [["Alice", "Baxter"], ["Charles", "Davis"]]
session2 = [["Alice", "Charles"], ["Baxter", "Davis"]]
console.log(hasRepeatTangoPartner(session1, session2) === false)

// more partner mixing
session1 = [["Alice", "Baxter"], ["Charles", "Davis"], ["Jack", "Daniels"]]
session2 = [["Jack", "Charles"], ["Baxter", "Davis"], ["Alice", "Daniels"]]
console.log(hasRepeatTangoPartner(session1, session2) === false)

// 1 overlap
session1 = [["Alice", "Baxter"], ["Charles", "Davis"], ["Jack", "Daniels"]]
session2 = [["Jack", "Daniels"], ["Alice", "Charles"], ["Baxter", "Davis"]]
console.log(hasRepeatTangoPartner(session1, session2) === true)

// overlap with flipped partners
session1 = [["Alice", "Baxter"], ["Charles", "Davis"], ["Jack", "Daniels"]]
session2 = [["Daniels", "Jack"], ["Alice", "Charles"], ["Baxter", "Davis"]]
console.log(hasRepeatTangoPartner(session1, session2) === true)

// no overlap
session1 = [["Alice", "Baxter"], ["Charles", "Davis"], ["Jack", "Daniels"]]
session2 = [["Jono", "Paavo"], ["Zoe", "Angus"], ["Oliver", "Pixel"]]
console.log(hasRepeatTangoPartner(session1, session2) === false)
