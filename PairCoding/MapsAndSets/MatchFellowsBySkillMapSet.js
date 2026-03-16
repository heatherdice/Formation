/*
'''
Match Fellows by skill level

Given an input dictionary mapping Fellows (as string names) to skill ratings, return true if you're able to pair up Fellows with matching skill ratings with no Fellows leftover.

EXAMPLE(S)
skillMap = {
    "oliver": 3, 
    "pixel": 3, 
    "pinky": 5, 
    "tobey": 5
}
canMatchFellows(skillMap) == True

skillMap = {
    "oliver": 3, 
    "pixel": 4, 
    "pinky": 5, 
    "tobey": 5
}
canMatchFellows(skillMap) == False

FUNCTION SIGNATURE
function canMatchFellows(skillMap) {
def canMatchFellows(skillMap: dict) -> bool:
'''
----------------------------------------------
Expected Questions
Q: Is the Fellow name case sensitive?
A: Yes
Q: If the input dictionary is empty, I should return true by default?
A: Yes

EXPLORE:
- odd map size -> return false. guaranteed leftover.
- type of the level value: whole number? -> yes


BRAINSTORM:

skillMap = {
    "oliver": 3, 
    "pixel": 4, 
    "pinky": 5, 
    "tobey": 5
}

set = 3, 4

* const size = Object.keys(myObject).length;

return if set is empty-> true , otherwise false 

PLAN:
1) use a set to conceptually create a pair 
T.C: one iteration over the input dictionary -> O(n)
S.C: O(n) if we have distict values in the input dict

2) freq map { skill level: count }
- build a freq map, iterate through the map, if count is odd, return false
T.C: one iteration over the input dictionary -> O(n)
S.C: O(n) if we have distict values in the input dict

----------------------------------------------

*/

function canMatchFellows(skillMap) { 
    if (!skillMap) return true
    if (Object.keys(skillMap).length % 2 !== 0) return false

    let trackerSet = new Set()
    
    for (const [key, value] of Object.entries(skillMap)) {
        if (trackerSet.has(value)) {
            trackerSet.delete(value)
        } else {
            trackerSet.add(value)
        }
    }

    if (trackerSet.size > 0) {
        return false
    }

    return true
}

// Formation's solution:
function canMatchFellows(skillMap) {
    let skillSet = new Set()
    for (let fellow in skillMap) {
        let skill = skillMap[fellow]
        if (skillSet.has(skill)) {
            skillSet.delete(skill)
        } else {
            skillSet.add(skill)
        }
    }
    return skillSet.size == 0
}

let skillMap = { "oliver": 3, "pixel": 3, "pinky": 5, "tobey": 5 }
console.log(canMatchFellows(skillMap) == true)

skillMap = { "oliver": 3, "pixel": 4, "pinky": 5, "tobey": 5 }
console.log(canMatchFellows(skillMap) == false)

skillMap = { "oliver": 3, "pixel": 3, "pinky": 3 }
console.log(canMatchFellows(skillMap) == false)

skillMap = { "oliver": 3, "pixel": 3, "pinky": 5, "tobey": 5, "paavo": 1 }
console.log(canMatchFellows(skillMap) == false)

skillMap = { "oliver": 3, "pixel": 3, "pinky": 3, "tobey": 3 }
console.log(canMatchFellows(skillMap) == true)

console.log(canMatchFellows({ "oliver": 1 }) == false)

console.log(canMatchFellows({}) == true)