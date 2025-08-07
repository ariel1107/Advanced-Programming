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
    console.log(`here is your delicious pasta ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const arr = [2, 3, 4];
const a = [0];
const b = [1];
const c = [2];

const [x, y, z] = arr;
console.log(x, y, z); // distructuring the array, result (2 3 4)

const [first, second] = restaurant.categories; // first and second item on the categories array in the object.

// if you want to distructure the first and the third item on the same array you would do it like this:
let [one, , third] = restaurant.categories;
console.log(one, third);

// if you want to switch them you would do it like this:
// const temporal = one;
// one = third;
// third = temporal;
// console.log(one, third);

// if you want to switch them you would do it like this using distructuring:
[one, third] = [third, one];
console.log(one, third);

// if you want to order food for their index that we pass in the function order():
console.log(restaurant.order(2, 0)); //this return an array

// you can reassign this two item using distructuring:
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main); // this does not return an array but you are inmediately creating two variables out of one function call.

// ONE STEP FURTHER
const nested = [2, 4, [5, 6]];
//HOW CAN WE GET THE FIRST ITEM IN THE ARRAY (2) AND THE ENTIRE ARRAY ([5, 6]) USING DISCTUCTURING:
const [i, , j] = nested;
console.log(i, j); // here we are getting de number 2 and the array [5, 6]

// if we want to get the first number (2) and the other 2 numbers out of the array inside separately we can do it this way:
const [primero, , [cinco, seis]] = nested;
console.log(primero, cinco, seis); // this return on the console (2, 5 and 6) separately.

// desctructuring an object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// giving variables to each of those properties
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

//Spread Operator
// 1 - EJ... if you want to create a new array with for example 1 and 2 at the beginning, you would do it like this:
const array = [7, 8, 9];
const badWay = [1, 2, array[0], array[1], array[2]];
console.log(badWay);
// there is a better way of doing this using spread operators like this:
const goodWay = [1, 2, ...array];
console.log(goodWay); //what it does is take all the values out of the array and then write them individually in this goodWay array as if we wrote them manually.

// if we want to create a new menu with another food item extra we could do it like this:
const newMenu = ["Gnocci", ...restaurant.mainMenu];
console.log(newMenu);

// it is usefull to copy exactly an array in a new array:
const mainMenuExactCopy = [...restaurant.mainMenu];
//and joining 2 arrays:
const arraysTogether = [...restaurant.mainMenu, ...restaurant.categories];
console.log(arraysTogether);
/* SPREAD OPERATOR WORKS WITH ALL ITERABLES IN JAVASCRIPT.
ITERABLES : ARRAYS, MAPS, STRINGS, SETS,  BUT NOT OBJECTS */
// Example with strings:
const string = "jonas";
const letters = [...string, "", "s."];
console.log(letters); // ["j", "o", "n", "a", "s", "", "s."]

//Spread operator as a parameter of a function:
const ingredients = [
  // prompt("let's make pasta! Ingredients 1?"),
  // prompt("ingredient 2?"),
  // prompt("ingredient 3"),
]; //comentado para que no meleste a la hora de testear
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// it is the same as:
restaurant.orderPasta(...ingredients);

// objects
// creating a new restaurant object
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant); // new object with everything in the restaurant object and also the new properties specified

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
// the copy changes its name property but the original one still has the same name, which means that we are creating a completely new object.

/*
/////////////////////////////////////////
Rest pattern and parameters */
// This is spread operator because on right side of =
const arrayTest = [1, 2, ...[3, 4]];
console.log(arrayTest); // [1, 2, 3, 4]
// if we want to distructure an array and use the rest pattern (REST BECAUSE ON LEFT SIDE OF =):
const [firstItem, secondItem, ...others] = [1, 2, 3, 4, 5]; // 1 and 2 stores on the variables firstItem and secondItem and create a new array with the rest of the elements called others.
console.log(firstItem, secondItem, others);

// objects:
const { sat, ...weekDays } = restaurant.openingHours;
// variable has to have the same name as the property that we want to store in the variable.
console.log(weekDays);
console.log(sat);

// functions example:
function add(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
}

add(2, 3);
add(5, 3, 7, 2);
add(2, 3, 8, 9, 6, 8);

const arrayAdd = [23, 5, 7];
add(...arrayAdd);

restaurant.orderPizza("mashrooms", "onion", "olives", "spinach"); // mashrooms is gonna be the mainIngredients and the rest of them are gonna be in an array that we can work with, same if we just pass only a main ingredient there is gonna be an empty array that we also can work with....

/*               CONCLUSION
spread operator and rest pattern have the same syntax (...) so they look exactly the same but they work in opposite ways depending on where they are used.

The spread operator is used where we otherwise write values separate by comas (,).
on the other hand rest pattern are used where we otherwise write variables names separates by comas (,).
*/
