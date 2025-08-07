"use strict";

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log("B737"[0]); // B

console.log(airline.length); // 16
console.log("B737".length); // 4

console.log(airline.indexOf("r")); // 6 spaces are also a caracter
console.log(airline.lastIndexOf("r")); // 10 index of Last (r)
console.log(airline.indexOf("Portugal")); // 8 Index of the entire word
console.log(airline.indexOf("portugal")); // -1 because in lowercase this word does not exist.

//  slice method    .slice(start, end)

console.log(airline.slice(4)); // Air Portugal...... starts at index 4
console.log(airline.slice(4, 7)); // Air .....  starts at index 4 and ends at 7. length will always be end -start which in this case is gonna be (3)

// if we don't know the index of any of the words and we want to extract the first word we can do this:
console.log(airline.slice(0, airline.indexOf(" ")));
// start at index 0 and ends at wherever the first space is.

//if we want to extact the last word :
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // +1 so the space is not gonna be included

// if you wanna start from the end you have to use negative values:
console.log(airline.slice(-2)); // al ....  Last 2 letters (Portug(aL))
console.log(airline.slice(1, -1)); // AP Air Portuga ....  starts at index 1 that is why the letter t is removed and -1 at the ends make the last letter get removed

//Function that receive a seat and log whether is the middle seat or not
function checkMiddleSeat(seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("you got the middle seat");
  } else {
    console.log("You got lucky");
  }
}

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(airline.toLowerCase()); // everything to lower case
console.log(airline.toUpperCase()); // everything to capital letters

//  Example
const passenger = "jOnAS";
const passengerLower = passenger.toLowerCase();
const passsengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passsengerCorrect); // Jonas

// compairing emails
const email = "hello@jonas.io";
const loginEmail = "   Hello@Jonas.Io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

// method (toLowerCase() returns a new string that is why you can inmediately called the trim method)
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// REPLACING
const priceGB = "288,97 Libras";
const priceUs = priceGB.replace("Libras", "Dolares").replace(",", ".");
console.log(priceUs);
// situacion
const announcement =
  "All passengers come to boarding door 23. Boarding door 23";
console.log(announcement.replace("door", "gate")); // All passengers come to boarding gate 23. Boarding door 23 (only replace the first occurence)
console.log(announcement.replaceAll("door", "gate")); // All passengers come to boarding gate 23. Boarding gate 23 (this replace every door in the str);
console.log(announcement.replace(/door/g, "gate")); // All passengers come to boarding gate 23. Boarding gate 23 (another way to do it using regular expression. This is the old Method  the g letter means global);

// booleans
const flight = "A320neo";
console.log(flight.includes("A320")); // true
console.log(flight.includes("Boeing")); // false
console.log(flight.startsWith("Air")); // false
console.log(flight.endsWith("neo")); // true

// practice exercise
function checkbaggage(items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed on board");
  } else console.log("Welcome aboard");
}

checkbaggage("i have a laptop, some Food and a pocket Knife");
checkbaggage("socks and camera");
checkbaggage("Got some snacks and a gun for protection");

//  .split() and .join()
console.log("a+very+nice+string".split("+")); // ['a', 'very', 'nice', 'string']
console.log("Ariel Lopez".split(" ")); // ['Ariel', 'Lopez']
const [firstName, lastName] = "Ariel Lopez".split(" "); // ['Ariel', 'Lopez']

// if want to add a Mr. in the beginning and the last name in uppercase with the join method:
const newName = ["Mr.", firstName, lastName.toUpperCase()].join("-"); // Mr.-Ariel-Lopez
console.log(newName);

// capitalizing the name:
function capitalizeName(name) {
  const names = name.split(" ");

  const namesUpper = [];

  for (const n of names) {
    // console.log(n);
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    /* Other way :
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    */
  }
  console.log(namesUpper.join(" "));
}
capitalizeName("ariel lopez");
capitalizeName("ariel and smith davies");

// padding
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+")); // add (+) a certain times in the beginning to get 20 of length and the remains at the end to get 30 of length
console.log("Jonas".padStart(20, "+").padEnd(30, "+"));
/*        Real life Practice:
when you have a credit card or any other card you never see all its number you are only allowed to see the four last digits and the rest of it are just symbols
  let's create a function where we can do that:  */
function maskCreditCard(number) {
  const str = number + "";
  const lastNumbers = str.slice(-4);
  return lastNumbers.padStart(str.length, "*");
}

console.log(maskCreditCard(1234567890));
console.log(maskCreditCard(29809876543291));

// repeat:
const message2 = "Bad weather...All Departues Delayed... ";
console.log(message2.repeat(5)); // repeat the string 5 times in a long string
// funny example:
function planesInLine(n) {
  console.log(`There are ${n} planes in line ${"✈".repeat(n)} `);
}

planesInLine(5);
planesInLine(3);
planesInLine(12);
