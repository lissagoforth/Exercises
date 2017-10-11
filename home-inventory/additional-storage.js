const storedInventory = localStorage.getItem("homeInventory")
let homeInventory = JSON.parse(storedInventory)

const bluetoothSpeaker = {
    "name": "Bluetooth Speaker",
    "type": "electronics",
    "location": "Living Room",
    "description": "Black JBL waterproof Bluetooth speaker"
  }
const cactusGarden = {
    "name": "Cactus Garden",
    "type": "decor",
    "location": "Kitchen",
    "description": "Wide, shallow, glass planter with white sand and 5 small cacti"
  }
const couch = {
    "name": "Couch",
    "type": "furniture",
    "location": "Living Room",
    "description": "Blue convertible couch with storage underneath"
  }

electronics.push(bluetoothSpeaker)
decor.push(cactusGarden)
furniture.push(couch)

const newInventoryString = JSON.stringify(HomeInventory)
localStorage.setItem("HomeInventory", newInventoryString)
