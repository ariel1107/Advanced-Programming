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

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");
console.log(rest);

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open")
  .set(false, "we are closed");

console.log(rest.get("name"));
console.log(rest.get(1));
console.log(rest.get(false));

const time = 11;
console.log(rest.get(time >= rest.get("open") && time <= rest.get("close")));

console.log(rest.has("categories")); // if it has it will return true if not it will be false.
rest.delete(2); // you are deleting the hey 2 lisbon, portugal from the map
console.log(rest);
console.log(rest.size);
// rest.clear(); delete everything rest.size = 0;

/* ///////////////////////////////////////
 */
rest.set([1, 2], "test");
console.log(rest.get([1, 2])); // This is not gonna work it will return undefined because even you think it is the same array it is not. to make it work you have to do it like this:

const arr = [1, 2];
rest.set(arr, "test");
console.log(rest.get(arr)); // now it is gonna work and it will return "test"
rest.set(document.querySelector("h1"), "Heading");

/*  ANOTHER WAY TO SET A MAP  */
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "correct 🎉"],
  [false, "try again!"],
]);

console.log(question);

//convert object to map :
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap); // this is it
/* ---------------------------- */

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`answer ${key}: ${value}`);
}
// const answer = Number(prompt("Your answer"));
const answer = 3;
if (!answer) console.log("please enter a propper number");
else {
  console.log(question.get(question.get("correct") === answer));
}

// convert map to array :
//Using spread operator
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
