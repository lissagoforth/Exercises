// Using one single line of JavaScript code, complete the following tasks on the
//  array of integers below.

// 1. Sort the numbers in descending order (10, 9, 8, 7, etc).
// 2. Remove any integers greater than 19.
// 3. Multiply each remaining number by 1.5 and then subtract 1.
// 4. Then output (either in the DOM or the console) the sum of all the 
// resulting numbers.
const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let modifiedIntegers = integers.sort(function(a, b) {return b - a}).splice(0,4).map(function (a) {return ((a * 1.5) - 1)}).reduce(function(sum, value) {return sum + value})
console.log(modifiedIntegers)
