// How many of each grade? Accomplish this with a for..in loop.
// What is the lowest score? Sort the array and find out.
// What is the highest score?
// Which grade had the most students achieve it? Use an if statment, and a 
// currentGradeCount variable, in your for..in loop to see if the current grade's
// value is higher than the last one.
// Which grade had the fewest students achieve it?

const scores = [82, 71, 62, 95, 55, 98, 69, 72, 88, 85, 77, 78, 84, 64, 87, 60]
const grades = {"A" : 0, "B" : 0, "C" : 0, "D" : 0, "F" : 0}
let currentGradeCount =  {}


for (let i = 0; i < scores.length; i++) {
    let currentScore = scores[i];
    if (currentScore > 90) {
        grades["A"]++
    }
     else if (currentScore > 80) {
        grades["B"]++
    }
    else if (currentScore > 70) {
        grades["C"]++
    }
    else if (currentScore > 60) {
        grades["D"]++
    }
    else if (currentScore > 50) {
        grades["F"]++
    }
}
let highestGrade = 0
let lowestGrade = 0
let upperletterGrade = ""
let lowerletterGrade = ""

for (let key in grades) {
        let currentGrade = grades[key];
        if (currentGrade > highestGrade) {
            highestGrade = currentGrade
            upperletterGrade = key
            lowestGrade = highestGrade
        } 
        if (currentGrade < lowestGrade) {
            lowestGrade = currentGrade
            lowerletterGrade = key
        }
        
}
console.log(grades)  
scores.sort(function(a, b){return a-b}) // Find lowest score
console.log(scores[0])
scores.sort(function(a, b){return b-a}) // Find highest score
console.log(scores[0])
console.log(`${highestGrade} students achieved a(an) ${upperletterGrade} `)
console.log(`${lowestGrade} students achieved a(an) ${lowerletterGrade} `)

// for (let i = 0; i < scores.length; i++) {

//     switch (true) {
//         case (scores[i] > 90):
//             grades["A"]++
//             break;
//         case (scores[i] > 80):
//             grades["B"]++
//             break;
//         case (scores[i] > 70):
//             grades["C"]++
//             break;
//         case (scores[i] > 60):
//             grades["D"]++
//             break;
//         case (scores[i] > 50):
//             grades["F"]++
//             break;

//     }
// }


