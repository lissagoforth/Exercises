const piggyBank = { // $41
    "quarters" : [100, .25], // $25
    "dimes" : [100, .10], // $10
    "nickels" : [100, .05], // $5
    "pennies" : [100, .01] // $1
}
let dollarAmount = 0
// need a function to convert amounts of each key to dollar amount

//  value1 * value2 = dollarAmount

for (let key in piggyBank) {
    let value = piggyBank[key]
    let dollarAmount = value[0] * value[1]
    console.log(dollarAmount)
}