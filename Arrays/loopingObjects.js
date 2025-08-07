"use estrict";

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours,

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// looping over property names:

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

for (const mainObject of Object.keys(restaurant)) {
  console.log(mainObject);
}
// we can do a very cool string sayin the amount of day the restaurant is open and which are those days :

const properties = Object.keys(openingHours);
console.log(properties); // array of the properties (keys) of the openingHours object

let coolString = `the restaurant opens on ${properties.length} days: `;
for (const day of properties) {
  coolString += `${day}, `;
}
console.log(coolString);

const valores = Object.values(openingHours);
console.log(valores); // array of the values. In this case they are objects.

//    looping over the property values
for (const values of Object.values(openingHours)) {
  console.log(values);
  // This log the values one by one noy an array
}
console.log("-----------------------------");

const entries = Object.entries(openingHours);
console.log(entries); // array of the entire object.

// looping over the entire object:
for (const [key, { open, close }] of Object.entries(openingHours)) {
  // console.log(entireObject);
  // log the entire object to the console one by one!
  console.log(`On ${key}, we open at ${open}, and close 
  at ${close}`);
}

// for (const [key, { open, close }] of entries) {
// console.log(`On ${key}, we open at ${open}, and close at ${close}`);
// }
