const HomeInventory = JSON.parse(localStorage.getItem("HomeInventory"))
const DOMelement = document.getElementById('inventory')
// create a for..in loop to iterate over each key in HomeInventory and add class

for (let key in HomeInventory) {
    for (let i = 0; i < HomeInventory[key].length; i++) {
        let element = HomeInventory[key][i];
        DOMelement.innerHTML += `<section class='${element.type}'>
        <h2 class='${element.type}__name'>
        ${element.name} </h2>
        <div class='${element.type}__location'>
        Location: ${element.location} </div>
        <div class='${element.type}__decription'>
        ${element.description} </div>
        </section>`
    }    
}



