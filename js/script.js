// Generates random number to randomise the messages
function generateRandNumber (num) {
    return Math.floor(Math.random() * num)
}

// Define the objects
const collectiveChoice = {
    starter: ["Calamari","Soup of the Day", "Prawn Cocktail", "Scallops","Garlic Mushrooms"],
    main: ["Steak & Chips", "Southern Fried Chicken Burger & Chips", "Sesame Chicken & Skinny Fries", "Deep Fried Pizza with Onion Rings & Wedges","Big Daddy Burger & Sweet Potato Fries"],
    dessert: ["Profiteroles", "Mint Aero Sundae", "Eton Mess", "Chocolate Brownie"],
    drink: ["Glass of White Wine", "Glass of Red Wine", "Pint of Peroni", "Pint of Pepsi Max"],
}

// Store the choice in an array
let personalChoice = []

// Iterate over the object

for(let prop in collectiveChoice) {
    let choiceIdx = generateRandNumber(collectiveChoice[prop].length)

// use the object's properties to customize the message being added to personalWisdom  

switch(prop) {
    case 'starter':
        personalChoice.push(`For starter, I will have: ${collectiveChoice[prop][choiceIdx]}.`)
        break
    case 'main':
        personalChoice.push(`For main, I will have: ${collectiveChoice[prop][choiceIdx]}.`)
        break
    case 'dessert':
        personalChoice.push(`For dessert, I will have: ${collectiveChoice[prop][choiceIdx]}.`)
        break
    case 'drink':
        personalChoice.push(`And I will have a ${collectiveChoice[prop][choiceIdx]}" to drink.`)
        break
    default:
        personalChoice.push('More time needed.')
    }
}

function formatChoice(choices) {
    //Add some ASCII images at later date
    //Add other images like emojis
    const formatted = personalChoice.join("\n")
    console.log(formatted)
}

formatChoice(personalChoice);
