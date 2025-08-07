/*     Falsy values:
- 0
- ""
- undefined
- null
- NaN
*/
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

/*   ---------- OR ------------   */

console.log(3 || "jonas"); // it will return (3) because the first value isn't a falsy value.
console.log("" || "jonas"); // it will return ('jonas') because the second one is the one that is not a falsy value
console.log(undefined || null); // when both are falsy values it will return the second value (null).

console.log(undefined || 0 || "" || "hello" || 23 || null); // it will return ('hello') because it is the first value that is not a falsy value.

// Real application :

const guests1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guests1); // it will return (10) because restaurant.numguest does not exist.

// using short-cuirt we can do it like this:
const guests2 = restaurant.numGuest || 10;
console.log(guests2); // retaurant.numGuest does not exist wich it is undefined therefore it will return (10) because undefined is a falsy value.

// if we actually create that object property:
restaurant.numGuest = 23;
const guests3 = restaurant.numGuest || 10;
console.log(guests3); // it will return (23) because now restaurant.numGuest = 23 and it's not a falsy value;

/* -------------- AND ---------  
And operator opposite to the OR operator, it has to be truth so everything is truth if only one of its parameters is false then everything is gonna be false.
*/

console.log("----- AND ------");
console.log(0 && "Jonas"); // it will return (0) because it is a falsy value therefore everything is gonna be false so that is the value that returns
console.log(7 && "jonas"); // the first value is not a falsy value therefore is gonna analyze the second one and that is the one it is gonna return ('jonas')
console.log("hello" && 23 && null && "jonas"); // in this case the first two values are not falsy values therefore is gonna analyze the third one, cosidering that the third one is a falsy value, that is the one is gonna return (null).

//      Real application

if (restaurant.orderPizza) {
  restaurant.orderPizza("mashrooms", "spinach");
} // This means: if restaurant.orderPizza exist then call the function and pass those parameters

// now we can do it in a better way using what we just learned
restaurant.orderPizza && restaurant.orderPizza("mashrooms", "spinach"); // if restaurant.orderPizza does not exist then it will be undefined and nothing is gonna happen.

/*    THE NULLISH COALESCING OPERATOR  */
restaurant.numGuest = 0;
const guests4 = restaurant.numGuest || 10;
// iN THIS CASE restaurant.numGuest = 0 which is a falsy value therefore it will return 10 and if we don't want that then we can to solve that using this operator.

const guest4Correct = restaurant.numGuest ?? 10;
console.log(guest4Correct); // it will return (0). this works because with the nullish coalescing operator works with the idea of nullish values which are "NULL" or "UNDEFINED". It means that only if it is null or undefined it is gonna analyze the other value. if the value is (0) or ("") it is gonna return it if it is the first value that is not nullish.
