const orderSets = new Set(["Pasta", "Pizza", "Risotto", "Pasta", "Pizza"]); //arrata are iterable that's why we can put it inside a new set.

console.log(orderSets); // Set(3) {'Pasta', 'Pizza', 'Risotto'} all the duplicate are gone.

// SETS ARE DIFFERENT OF ARRAYS SINCE THEY DO NOT ALLOW DUPLICATE ELEMENT AND THE ORDER OF THEIR ELEMENT ARE IRRELEVANT.

console.log(new Set("Jonas")); // Set(5) {'j','o', 'n', 'a', 's'} Strings are also iterable;
//working with sets:
console.log(orderSets.size); // (3) it is like the length of the set but without duplicates (uniques)
console.log(orderSets.has("Pizza")); // true
console.log(orderSets.has("Bread")); // false
orderSets.add("Gralic Bread"); // it is added but just one time
orderSets.add("Gralic Bread"); // is is ignored
console.log(orderSets);

orderSets.delete("Risotto"); // simply delete it from the set
// orderSets.clear()    delete everything in the set

for (const order of orderSets) {
  console.log(order);
}

// example:
const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];
const staffUnique = [...new Set(staff)]; // {'waiter', 'chef', 'manager'} \\\\ with spread operator (...) it would be an array [];
console.log(staffUnique); // this work perfectly beacause

/*
new operations to make Sets useful!:
*/
const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olives oil",
  "garlic",
  "basil",
]);

const mexicanFood = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

const commonFoods = italianFoods.intersection(mexicanFood);
console.log("intersections:", commonFoods); // Set of common item between both of them.
console.log([...commonFoods]); // turned to ab array

const italianMexicanFusion = italianFoods.union(mexicanFood);
console.log("union:", italianMexicanFusion); // fusion between them but without duplicates

const uniqueItalianFood = italianFoods.difference(mexicanFood);
console.log("difference", uniqueItalianFood); // this one print to the console only the items that have the first set but NOT the second one...

const onlyDifferences = italianFoods.symmetricDifference(mexicanFood);
console.log(onlyDifferences); // only the the ones that does not contain the same items. opposite of intersection

console.log(italianFoods.isDisjointFrom(mexicanFood)); // it returns a boolean value and check if every single value are different (if at least one value is common it will return false)
