"use strict";

const bookings = [];

const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  /*   ES5 :
  numPassenger = numPassenger || 1;  we are setting 1 as a default value;
  price = price || 199
  */
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000); // undefined means that in that parameter it will take the set default value which in this case it is 1

/*
  How passing arguments works: Values vs references
*/
const flight = "LH234";
const ariel = {
  name: "Ariel Lopez",
  passport: 1234567890,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 1234567890) {
    console.log("checkedIn");
  } else {
    console.log("wrong passport");
  }
};

checkIn(flight, ariel); // when you are passin a primitive data it is just a copy of the original one, so the flightNum created inside tha function is just another variable...
//it is the same as doing ....
const flightNum = flight;

// on the other hand when we pass an object (ariel), we are just passing a reference to that same object which means that if we change that copy we are also changin the original one because they both are the same object.
// it is the same as doing ...
const passenger = ariel;
console.log(flight);
console.log(ariel);

// other example :
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(ariel);
checkIn(flight, ariel);
console.log(flight);
console.log(ariel);

//JAVASCRIPT DOES NOT HAVE PASSING BY REFERENCE WE PASS INTO A FUNCTION A REFERENCE BUT THE REFERENCE ITSELF IS A VALUE. WE PASS IN A REFERENCE BUT NOT (BY) REFERENCE. THEY ARE TWO DIFFERENT THINGS.

/*
         FIRST CLASS AND HIGHER-ORDER FUNCTIONS
*/
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
  //  same as:
  // return str.split(" ").join("");
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  console.log(`original string: ${str}`); // Javascript is the best!
  console.log(`transformed string: ${fn(str)}`); //JAVASCRIPT is the best! .... we are calling upperFirstWord function here.

  console.log(`transformed by: ${fn.name}`); // transformed by: upperFirstWord ..... (fn.name)name of the function
};

transformer("Javascript is the best!", upperFirstWord); // callbacks function
transformer("   Javascript is the best!", oneWord);

//   ejemplo por mi
const suma = function (num1, num2) {
  return num1 + num2;
};

function resta(num1, num2) {
  return num2 - num1;
}

function multiplicacion(num1, num2) {
  return num1 * num2;
}

function results(num1, num2, fn) {
  console.log(`El resultado de la ${fn.name} es ${fn(num1, num2)}`);
}

results(765, 984, resta);
results(765, 984, suma);
results(765, 984, multiplicacion);

//    function returning a new function

function greet(greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}

const greeterHey = greet("Hey"); // basically it coverts greeterHey into a function who has a (name) as a parameter.

greeterHey("jonas");
greeterHey("steven");

//     same as :
greet("Hello")("Ariel"); // greet works like a function.

//   challenge!!!! ... writing this using only arrow function:
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr("Good Morning")("Jonas");

// The call and apply Methods
const lufthansa = {
  airline: "lufthansa",
  iataCode: "LH",
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Ariel Lopez");
lufthansa.book(537, "Diego Diaz");
console.log(lufthansa);

// supose that they created a new airline:
const eurowing = {
  airline: "Eurowing",
  iataCode: "EW",
  booking: [],
};

const book = lufthansa.book;

// book(23, 'sara williams');  this does not work because we are calling a method where the (this) keyword is used and in this case it will point to undefined...

// in order to not write the same function once again into the eurowing object we just call the method (call);

//    call method
book.call(eurowing, 23, "Sarah Williams"); // the method call allow you to set manually where the key word should point
console.log(eurowing);

book.call(lufthansa, 239, "Mary Cooper"); // In this example we are pointing back to lufthansa object
console.log(lufthansa);

//   apply method : it does the same thing as call method. the difference is that it does not recive a list of arguments but intead is gonna take an array of arguments
const flightData = [583, "George Cooper"];
book.apply(eurowing, flightData);
console.log(eurowing);
// But in moder javascript it is not that usefull because we just can do ....
book.call(eurowing, ...flightData); // this is exacly the same

//                  bind method
//book.call(eurowings, 23, 'Sarah williams )
const bookEw = book.bind(eurowing); // it works like if we are returning a new function, which allow us to only declare it once and then pass it all the booking that you want.
bookEw(23, "Tamara Rodriguez");
bookEw(238, "Lazaro Hernandez");
bookEw(219, "Mario Diaz");

// we can also predefine the first argument which is the flightNum and then the only thing we have to do is to define the name ....

const bookEW23 = book.bind(eurowing, 23);
bookEW23("Jonas Schmedtmann");
bookEW23("Rodrigo Gonzales");
bookEW23("Matilde Rosa");

// Example  with Events Listeners

lufthansa.plane = 300;
lufthansa.buyPlane = function () {
  console.log(this.plane);

  this.plane++;
  console.log(this.plane);
};

console.log("----------------");
console.log(lufthansa);
lufthansa.buyPlane();

// EVENT LISTENERS
/*
 document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane);  ==>  when we click the button it is gonna return NaN because the "this" keyword is pointing to the button with the class (buy)
*/

const planes = lufthansa.buyPlane.bind(lufthansa);

document.querySelector(".buy").addEventListener("click", planes); // now it works because with bind method we manually told the "this" keyword where to point to.

/*
             same as doing .....
             
document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
*/

// we can also use the bind method to preassign values in a parameter (as a partial application):
const addTax = (rate, value) => value + value * rate; //function

console.log(addTax(0.1, 200)); // 220

const addTaxPortugal = addTax.bind(null, 0.23); // just in case tha in portugal for example the rate is gonna be the same always we define that values there and now we just have to pass the other argument in.... (NULL is specifying that we don't have any 'this' keyword and therefore it can be used in anywhere).

console.log(addTaxPortugal(100));
console.log(addTaxPortugal(23));

// bind does the same as this:  it returns a new function
function taxRate(rate) {
  return function (value) {
    return value + value * rate;
  };
}

const taxesRate = taxRate(0.23);
console.log(taxesRate(100));
console.log(taxesRate(50));

//     code challenge
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: Javascript", "1: Phyton", "2: Rust", "3: C++"],
  answer: new Array(4).fill(0), // this generate a new array with a length = 4 and filled of 0 [0, 0, 0, 0]
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join(
          "\n"
        )}\n(write the option number)`
      )
    );

    if (
      typeof answer === "number" &&
      answer >= 0 &&
      answer <= this.answer.length - 1
    ) {
      this.answer[answer]++;
    } else {
      console.log("intete de nvo");
    }

    this.displayResults();
    this.displayResults("string");
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answer);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answer.join(", ")}`);
    }
  },
};

poll.registerNewAnswer();

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

//  [5, 2, 3];
// [1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answer: [5, 2, 3] }); // if we want to use the same function in other array outside the object, we need to basically create a new 'this' keyword because in the poll object there is a property named answer so we have to create a new property (answer) so the this keyword can still working, then we need a  call method
poll.displayResults.call({ answer: [1, 5, 3, 9, 6, 1] }, "string"); // in this case it will print its function when the string argument is passed in. In the previus one no arguments was passed in so it returned an array because it is the default value

//         Inmediately Invoked Function Expressions (IIFE): function that is only executed once;

const runOnce = function () {
  console.log("this will never run again");
};
runOnce();

// IIFE
(function () {
  console.log("this will never run again");
})();

(() => console.log("this will never run again"))();

//   closures:  makes the function remember all the variable existed by the time it was created

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking(); // the variable booker has acces to passengerCount because of closures since it has access to all the variables by the time it was created

booker();
booker();
booker();

// more examples of closures

let f;

function g() {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
}

function h() {
  const b = 777;

  f = function () {
    console.log(b * 2);
  };
}

g(); // we have to call the g() first so we can call f() because f is inside of g
f();
console.dir(f); // here we can see the closure contains the function g and the variable a = 23 with it

// Re-assigning f function
h();
f();
console.dir(f); // here we can see the closure contains the function h and the variable b = 777 with it

// example 2 of closure:  the callback (timer) has access to perGroup and numberOfPassenger variables which they are the existed variables when it was created
const boardPassengers = function (numberOfPassenger, wait) {
  const perGroup = numberOfPassenger / 3;

  setTimeout(function () {
    console.log(`we are now boarding all ${numberOfPassenger} passengers`);

    console.log(`there are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000); // set timeout is a callback function because it is called later after the specified time.

  console.log(`will start boarding in ${wait} seconds`);
};

const numberOfPassenger = 1000; // the timeout function is NOT gonna take this variable value because the closure has priority over the chaine scope.
boardPassengers(180, 3);

// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})(); // it workes because of closuring... the event listener has access to the header variable because it is the variable that was by the time the event listener was created and cloures make the function remember all those variables
