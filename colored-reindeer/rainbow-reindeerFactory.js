//In this exercise, you start with a collection of reindeer names. Your task 
//is to add each reindeer name to an HTML article element with an id of 
//colored-reindeer.
// Create a new object that represents a reindeer - the object will include 
//the reindeer's name and its color. Use a generator function to attach each 
//of the following colors, in order, to the reindeer. Use a factory function 
//to generate the reindeer object.
const reindeerColor = function* () {
    const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Grey"]
    let counter = 0
    
    while (counter < colors.length) {
        yield currentColor = colors[counter]
        counter ++  // Increment the counter
    }
}

const reindeerColorFactory = reindeerColor()

function reindeerFactory(name) {
    return Object.create(null, {
        "name": { value: name, enumerable: true },
        "color": { value: reindeerColorFactory.next().value, enumerable: true },
    })
}

const coloredReindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
    let coloredReindeer = []
// Write a for loop that looks at each reindeer
    for (let i = 0; i < reindeer.length; i++) {
    let reindeerEl = reindeer[i];
    // Invoke factory function to create reindeer object
        // reindeerFactory(reindeerEl)
        // Put new reindeer object in coloredReindeer array
        coloredReindeer.push(reindeerFactory(reindeerEl))      
}
// Return coloredReindeer array
    return coloredReindeer   
}
//must name returned value(reindeerArray) in order to access it later, stored as monkeyButt
let monkeyButt = coloredReindeerBuilder()

//Place each object in an array named coloredReindeer.

// Each object produced by the factory function
//[{ "name": "Dasher", "color": "Blue" }, etc...]




// Pro tip: Remember to make your code modular. The JavaScript for generating 
// the data should be in one file, and the JavaScript for manipulating the DOM 
// should be in a different file.