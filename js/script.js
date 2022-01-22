// Generates random number to randomise the messages
function generateRandNumber (num) {
    return Math.floor(Math.random() * num)
};

// Define the objects
const collectiveChoice = {
    starter: ["Calamari","Soup of the Day", "Prawn Cocktail", "Scallops"],
    main: ["Steak and Chips", "Southern Fried Chicken Burger and Chips", "Sesame Chicken and Skinny Fries", "Deep Fried Pizza with Onion Rings and Wedges"],
    dessert: ["Profiteroles", "Mint Aero Sundae", "Eton Mess", "Chocolate Brownie"],
    drink: ["Glass of White Wine", "Glass of Red Wine", "Pint of Peroni", "Pint of Pepsi Max"],
};

// Store the choice in an array
let personalChoice = [];

// Iterate over the object

for(let prop in collectiveChoice) {
    let choiceIdx = generateRandNumber(collectiveChoice[prop].length)

// use the object's properties to customize the message being added to personalWisdom  

switch (prop) {
    case 'starter':
        personalChoice.push(`For starter, I will have "${starter[prop][choiceIdx]}".`)
        break
    case 'main':
        personalChoice.push(`For main, I will have "${main[prop][choiceIdx]}".`)
        break
    case 'dessert':
        personalChoice.push(`For dessert, I will have "${dessert[prop][choiceIdx]}".`)
        break
    case 'drink':
        personalChoice.push(`And I will have a "${drink[prop][choiceIdx]}" to drink.`)
        break
    default:
        personalChoice.push('More time needed.')
    }
};

function formatChoice(choices) {
    const formatted = personalChoice.join("\n")
    console.log(formatted)
};

formatChoice(personalChoice);
