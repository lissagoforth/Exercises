// When the user enters in text into the text area and then clicks the create button, 
// create a new card element in the DOM that includes it's own delete button. 
// You decide the height/width of the card.
let fieldEl = document.getElementById("cards")
//creat generator function to generate unique ids for new cards
let idGenerator = function* () {
  let i = 1
  while (true)
  yield i++;
}
let gen = idGenerator()

// add event listener to create button where on click, adds input from text box and adds
//  to card that is created.
let buttonEl = document.getElementById("createBtn")

buttonEl.addEventListener("click", function(event) {
  let cardHolder = document.getElementById("cardHolder")
  let uniqueId = gen.next().value
  cardHolder.innerHTML += `
  <section id="card_${uniqueId}" class="newCard">${fieldEl.value}
  <button id="delete_${uniqueId}">Delete</button>
  </section>
  `
})

// When the user clicks the Delete button, the containing card, and no other cards, 
// should then be removed from the DOM. Not just made invisible, actually removed 
// from the DOM.
deleteBtn = document.getElementById("cardHolder")
deleteBtn.addEventListener("click", function(event) {
  if (event.target.id.startsWith("delete_")) {
    let uniqueId = event.target.id.split("_")[1]
    let parent = document.getElementById("cardHolder")
    let child = document.getElementById(`card_${uniqueId}`)
    parent.removeChild(child);
  }
  
})
