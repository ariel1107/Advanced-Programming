"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
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
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your 
delicious pasta ${ing1}, $
{ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
// returns all the element of the array individually

// if you want the for of loop to return the element but with its index you would have to do it like this:
for (const item of menu.entries()) {
  console.log(item); // with the method entries you can get an individual array of the element and its index. Example [0, 'Focaccia']

  console.log(`${item[0] + 1}: ${item[1]}`);
  // this is gonna return 0+1=  1 : 'Focaccia'
}
//               Same as:
// we can do that distructuring so we dont have to do it manually:

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
