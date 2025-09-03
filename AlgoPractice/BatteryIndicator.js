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
        console.log(charge)

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

        let pillState = CHARGED.repeat(charge) + DISCHARGED.repeat(10 - charge)

        return pillState
    }

    showBattery() {
        const outerBounds = "|====================|"
        const pillState = this.updateBatteryIndicator()

        return `
        ${outerBounds}
        |${pillState}|
        |${pillState}||
        |${pillState}|
        ${outerBounds}
    `.split("\n").map(line => line.trimStart()).join("\n")
    }
}

let eBattery = new Battery(75)
console.log(eBattery.updateBatteryIndicator())
console.log(eBattery.updateChargeState(78))
console.log(eBattery.showBattery())


// Test Cases
let testCases = [
  // Test Case 1
    [new Battery(75).showBattery(), `
|====================|
|XXXXXXXXXXXXXX      |
|XXXXXXXXXXXXXX      ||
|XXXXXXXXXXXXXX      |
|====================|`],

  // Test Case 2
    [new Battery(-50).showBattery(), `
|====================|
|                    |
|                    ||
|                    |
|====================|`],

  // Test Case 3
    [new Battery(30).showBattery(), `
|====================|
|XXXXXX              |
|XXXXXX              ||
|XXXXXX              |
|====================|`],

  // Test Case 4
    [new Battery(750).showBattery(), `
|====================|
|XXXXXXXXXXXXXXXXXXXX|
|XXXXXXXXXXXXXXXXXXXX||
|XXXXXXXXXXXXXXXXXXXX|
|====================|`],

  // Test Case 5
    [new Battery(0).showBattery(), `
|====================|
|                    |
|                    ||
|                    |
|====================|`],

  // Test Case 6
    [new Battery(80).showBattery(), `
|====================|
|XXXXXXXXXXXXXXXX    |
|XXXXXXXXXXXXXXXX    ||
|XXXXXXXXXXXXXXXX    |
|====================|`],

  // Test Case 7
    [new Battery(40).showBattery(), `
|====================|
|XXXXXXXX            |
|XXXXXXXX            ||
|XXXXXXXX            |
|====================|`]
];

function normalize(str) {
    return str.replace(/\r\n/g, "\n").trim();
}

function visualize(str) {
    return str
        .replace(/ /g, "·")      // spaces → dots
        .replace(/\n/g, "\\n\n") // show newlines
        .replace(/\r/g, "\\r");  // show carriage returns
}

testCases.forEach((expected, i) => {
    const output = showBattery(); // run your function

    const normOutput = normalize(output);
    const normExpected = normalize(expected);

    const result = normOutput === normExpected ? "PASS ✅" : "FAIL ❌";
    console.log(`Test Case ${i + 1}: ${result}`);

    if (result.startsWith("FAIL")) {
        console.log("Expected (raw):", JSON.stringify(expected));
        console.log("Output   (raw):", JSON.stringify(output));
        console.log("Expected (viz):\n" + visualize(normExpected));
        console.log("Output   (viz):\n" + visualize(normOutput));
        console.log();
    }
});
