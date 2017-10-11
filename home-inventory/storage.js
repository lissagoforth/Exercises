const computer = {
    "name": "MacBook Pro",
    "type": "electronics",
    "location": "Office",
    "description": "A necessary investment in my future as a software developer"
  }
  const phone = {
    "name": "Phone",
    "type": "electronics",
    "location": "On person",
    "description": "Samsung Galaxy S8+"
  }
  const tv = {
    "name": "Tv",
    "type": "electronics",
    "location": "Living Room",
    "description": "42 inch Vizio"
  }
  const vintageWineBottle = {
    "name": "Vintage Wine Bottle",
    "type": "decor",
    "location": "Living Room",
    "description": "4 ft tall Italian wine bottle that is often mistaken for a bong "
  }
  const blueWhale = {
    "name": "Whale",
    "type": "decor",
    "location": "Bathroom",
    "description": "Faded blue wooden whale that hangs on the wall"
  }
  const astroSkull = {
    "name": "Astro-skull",
    "type": "decor",
    "location": "Living Room",
    "description": "Human skull replica with astrological engravings"
  }
  const coffeeTable = {
    "name": "Coffee Table",
    "type": "furniture",
    "location": "Living Room",
    "description": "Tree trunk cross-sections make up the table top. Iron hairpin legs"
  }
  const papasanChair = {
    "name": "Papasan Chair",
    "type": "furniture",
    "location": "Living Room",
    "description": "Navy and cream woven chair with iron hairpin legs"
  }
  const floorPoof = {
    "name": "Floor Poof",
    "type": "furniture",
    "location": "Living Room",
    "description": "Large cream microfiber floor cushion. In other words, a sophisiticated bean bag chair"
  }
  const barstool = {
    "name": "Barstool",
    "type": "furniture",
    "location": "Kitchen",
    "description": "White metal barstool"
  }
  let electronics = []
  let decor = []
  let furniture = []
  
  electronics.push(computer)
  electronics.push(phone)
  electronics.push(tv)
  decor.push(vintageWineBottle)
  decor.push(blueWhale)
  decor.push(astroSkull)
  furniture.push(coffeeTable)
  furniture.push(papasanChair)
  furniture.push(floorPoof)
  furniture.push(barstool)

  let HomeInventory = {
      "electronics": electronics,
      "decor": decor,
      "furniture": furniture
  }
  const homeInventoryString = JSON.stringify(HomeInventory)
  localStorage.setItem("HomeInventory", homeInventoryString)

  

