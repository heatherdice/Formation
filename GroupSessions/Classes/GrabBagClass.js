/* 
While building a game, we need a grab bag: essentially a set with mechanism for randomly choosing an item. the sets can change over time, so we need to be able to add and remove items as well as make a random selection. Build a class to make this possible.

The goal is for these operations to be as efficient as possible: constant time insertions, removals, and random selections

Create a class that supports the following three methods:
    - insert(val) adds a new item to the set
        - return true if the item is added
        - return false if the item was already there
    - remove(val) removes an item from the set
        - return true if the removal is successful
        - false if the item was not in the set to begin with
    - getRandom() returns an item from the set
        - there must be even probability of any one item from the set being returned
        - if the set is empty when this is called, return none or undefined

*/

class GrabBag {
    constructor() {
        this.items = new Map() // item -> { count, index }
        this.list = [] // each unique item appears exactly once
    }

    insert(item) {
        // check if map already contains item
        if (this.items.has(item)) {
            const entry = this.items.get(item)
            entry.count++
            return false // existed already
        }

        // add item to list & map; in map, indicate count & index within list
        this.list.push(item)
        this.items.set(item, { count: 1, index: this.list.length - 1 })

        return true
    }

    remove(item) {
        if (!this.items.has(item)) return false

        const entry = this.items.get(item)
        entry.count--

        if (entry.count > 0) return true // still exists

        // if count reached = 0, remove completely
        const index = entry.index
        const lastItem = this.list[this.list.length - 1]

        // swap item to remove w/ last element
        this.list[index] = lastItem

        // update last index of element in map
        if (lastItem !== item) {
            this.items.get(lastItem).index = index
        }

        // remove last position
        this.list.pop()
        this.items.delete(item)

        return true
    }

    getRandom() {
        if (this.list.length === 0) return null
        const randomIndex = Math.floor(Math.random() * this.list.length)
        return this.list[randomIndex]
    }
}