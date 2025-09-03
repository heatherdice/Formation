/* 
EXPLORE
need indicator for battery state
    0% - 100%
    increments of 10 rounded down
    shown as "drawing" of battery in console
        top & bottom consist of | and = char's
        "lit" pills of battery indicated by XX
edge cases:
    above 100
        if > 100, set to 100
    below 0
        if < 0, set to 0
Battery class w/ multiple functions
    constructor
    update charge state
        calculate charge based on given %
    update battery indicator
        read battery charge
        update pill states for indicator
    show battery

BRAINSTORM


PLAN
updateChargeState
    Math.floor input * 10
updateBatteryIndicator

*/

const DISCHARGED = '  ';
const CHARGED = 'XX';

class Battery {
    constructor(percent = 0) {
        this.percent = percent
    }

    updateChargeState(percent) {
        let charge = Math.floor(percent / 10) * 10

        if (charge > 100) {
            charge = 100
        }

        if (charge < 0) {
            charge = 0
        }

        return charge
    }

    updateBatteryIndicator() {
        // Read the battery charge and update pill states for the indicator
        let charge = this.updateChargeState(this.percent) / 10
        console.log(charge)
        let pillState = CHARGED.repeat(charge) + DISCHARGED.repeat(10 - charge)

        return pillState
    }

    showBattery() {
        // Show battery indicator
        let outerBounds = "|====================|"
        let pillState = this.updateBatteryIndicator()
        
        return outerBounds + "\n" + "|" + pillState + "|" + "\n" + "|" + pillState + "|" + "|" + "\n" + "|" + pillState + "|" + "\n" + outerBounds
    }
}

let eBattery = new Battery(75)
console.log(eBattery.updateBatteryIndicator())
console.log(eBattery.updateChargeState(78))
console.log(eBattery.showBattery())