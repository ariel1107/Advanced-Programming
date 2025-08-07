"use strict";

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

//            THIS IS AN OBJECT LITERALS:
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //    ES6 enhanced object literals
  openingHours,

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta ${ing1}, ${ing2}, ${ing3}`);
  },

  //   we can also use this syntax to write a method
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

console.log(restaurant);
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

//     With optional chaining
console.log(restaurant.openingHours?.mon?.open); // if restaurant.openingHours exist then check if restaurant.openingHours.mon also exist. If it does not exist then return undefined and if it does exist then log restaurant.openingHours.mon.open

//     example:
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
//   loop over the array and log to the console whether the restaurant is open or close on each days
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day} we are open at ${open}`);
}
//   Methods
console.log(restaurant.order?.(0, 1) ?? "method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "method does not exist");

//    Arrays
const users = [{ name: "jonas", email: "hello@jonas.io" }];
// const users = [];

console.log(users[0]?.name ?? "user array empty");
