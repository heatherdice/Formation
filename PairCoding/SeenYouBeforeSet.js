/*
I've Seen You Before

You're the shift manager at a new ice cream store opening. To ensure everyone gets a chance to taste the new flavors, there is a limit of one serving per person.

You notice that people are not following this rule and are coming back into the line to get another serving of ice cream.

Given an array of people's names, return True if you come across a person you've already seen in line. Otherwise, False.

Can you think of any data structures that might help?

EXAMPLE(S)
A line with people ['Pixel', 'Pinky', 'Oliver'] should return False, as there are no people coming back.
A line with people ['Neko', 'Moose', 'Neko'] should return True, since Neko decided to come back.

EXPLORE
input: arr of str
output: bool
    true if duplicate str's
    false if all unique str's
assume all names are 1st letter capital
assume [] returns false

BRAINSTORM
set
time: O(n) - iteration
space: O(n) - extra DS (set)

PLAN
initiate new set
iterate over input
    if not in set, add
    if in set, return false
return true
*/

function seenYouBefore(patrons) {
    let set = new Set()

    for (let i = 0; i < patrons.length; i++) {
        let patron = patrons[i].toUpperCase()

        if (!set.has(patron)) set.add(patron)
        else return false
    }
    return true
}

let patrons = ['Neko', 'Moose', 'Neko']
console.log(seenYouBefore(patrons))//false
patrons = ['Pixel', 'Pinky', 'Oliver']
console.log(seenYouBefore(patrons))//false