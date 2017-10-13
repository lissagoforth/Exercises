// Update the code to iterate the two arrays provided (bands and vegetables) and 
// output each element in the arrays into their corresponding HTML <div> element. 
// Ensure that each item is in a block element (e.g. li, div, p, etc...)
let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// Get a reference to the appropriate DOM element for bands
const bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
const veggieElement = document.getElementById("vegetables");

bandElement.innerHTML = `
<h1>Boybands!</h1>
`
veggieElement.innerHTML = `
<h1>Vegetables!</h1>
`
// Execute a for loop that will iterate over the arrays
for (let i = 0; i < bands.length; i += 1) {
  let currentBand =  bands[i];
  let currentVeggie = vegetables[i];
 
  bandElement.innerHTML += `
  <p>${currentBand}</p>
  `
  veggieElement.innerHTML += `
  <p>${currentVeggie}</p>
  `
}
