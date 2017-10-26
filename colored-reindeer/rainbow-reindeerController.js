// Iterate over the coloredReindeer array and insert a new <section> element 
// in the colored-reindeer element that displays the reindeer name, with a font
// color corresponding to the color in the object.

// <!-- Example of what your HTML should look like -->
// <article id="colored-reindeer">
//     <section style="color: Blue">Dasher</section>
//     <section style="color: Red">Dancer</section>
//     etc...
// </article>
for (let j = 0; j < monkeyButt.length; j++) {
    let addToDom = monkeyButt[j];
    const writeToDom = document.getElementById('colored-reindeer')
    writeToDom.innerHTML += `
    <section style="color:${addToDom.color}">${addToDom.name}</section>
    `
}