const dollarAmount = 35.48
const piggyBank = {
    "quarters" : 0,
    "dimes" : 0,
    "nickels" : 0,
    "pennies" : 0
}
function cashToCoin(dollarAmount) {
    let removeDecimal = Math.round(dollarAmount * 100)
    piggyBank.quarters = Math.floor(removeDecimal / 25)
        let newAmount = removeDecimal % 25
    piggyBank.dimes = Math.floor(newAmount / 10)
         newAmount = newAmount % 10
    piggyBank.nickels = Math.floor(newAmount / 5)
        newAmount =  newAmount % 5
    piggyBank.pennies = newAmount
}
cashToCoin(dollarAmount)
console.log(piggyBank)

// Take dollarAmount and convert into coins
// dollarAmount % .25 = 141 r .23 % .10 = 2 r .03 % .05 = 0 .03 % .01 = 3

// console.log(piggyBank)