'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

//  slice method does not change the original array.
const newArray = arr.slice(2); // ['c', 'd', 'e'];
console.log(newArray);

const newArray2 = arr.slice(2, 4); // 2 and 3 (4 is not included)  ['c', 'd'];
console.log(newArray2);

const newArray3 = arr.slice(-2); // ['d', 'e']
console.log(newArray3);

const newArray4 = arr.slice(1, -2); // ['b', 'c'] from index 1 to last two final index
console.log(newArray4);

const newArray5 = arr.slice(); // copy of the array
console.log(newArray5);

//       splice method: it changes the original array.
// splice(inicio, cantidad de eliminados, item para anadir);
console.log(arr.splice(2)); // ['c', 'd', 'e'] it returns the array that was eliminated
console.log(arr); // it returns the original array that now is ['a', 'b']

//  reverse:  it changes the original array:
const arr2 = ['j', 'k', 'l', 'm', 'n'];
console.log(arr2.reverse()); // ['n', 'm', 'l', 'k', 'j']
console.log(arr2); // ['n', 'm', 'l', 'k', 'j']

//  concat
const letter = arr.concat(arr2); // une los 2 arrays
console.log(letter);
// same as:
console.log([...arr, ...arr2]); // same result: create an array with all their elements individually so we get the same result

//  join('separator');

//    at (index) : ES 2022;
const array = [23, 11, 64];
console.log(array[0]); // 23
console.log(array.at(0)); // 23
// getting the last array element if we don't know who it is
console.log(array[array.length - 1]);
console.log(array.slice(-1));
console.log(array.at(-1));

// forEach and for of (difference)
const transactions = [200, 450, 350, 3000, -400, -650, 1300, -130, 70];

//    for of
// for (const transaction of transactions) {
for (const [i, transaction] of transactions.entries()) {
  if (transaction > 0) {
    console.log(`transaction ${i + 1}: you deposited ${transaction}`);
  } else {
    console.log(`transaction ${i + 1}: you withdrew ${Math.abs(transaction)}`);
  }
}

console.log('------ ForEach ------');

//  forEach : this does not allow either break nor continue if you need to use break or continue you have to use for of. if not you can use either this one or the other one...
transactions.forEach(function (transaction, i, array) {
  if (transaction > 0) {
    console.log(`transaction ${i + 1}: you deposited ${transaction}`);
  } else {
    console.log(`transaction ${i + 1}: you withdrew ${Math.abs(transaction)}`);
  }
  // console.log(array);
});

// when looping a map:
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// set : sets does Not have keys nor indexes
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

function checkDogs(dogsJulia, dogsKate) {
  const juliaCopy = [...dogsJulia];

  juliaCopy.shift();
  juliaCopy.splice(-2);

  const dogs = [...juliaCopy, ...dogsKate];

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(
        `dog number ${i + 1} is still a poppy, and is ${dog} years old`
      );
    }
  });
}

checkDogs(dogsJulia, dogsKate);

/*    DATA TRANSFORMATIONS: MAP, FILTER, REDUCE  */

//     map:
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; // in euros

const eurToUsd = 1.1; // 1 euro = 1.1 usd

/*
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
}); // new array with the money in usd now
*/
const movementsUSD = movements.map(mov => mov * eurToUsd); // using arrow function

console.log(movementsUSD);

// just for fun:
const arrOfMovement = [];
for (const movement of movements) {
  const USD = movement * eurToUsd;
  arrOfMovement.push(USD);
}
console.log(arrOfMovement);

const movementDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
  // if (mov >= 3) {
  //   return `Movement ${i + 1}: You deposited ${mov}`;
  // } else {
  //   return `Movement ${i + 1}: You withdrew  ${Math.abs(mov)}`;
  // }
);

console.log(movementDescription);

//   filter method :

const deposits = movements.filter(mov => mov > 0);
console.log(movements);
console.log(deposits);

// for of
const positiveNumbers = [];

for (const mov of movements) if (mov > 0) positiveNumbers.push(mov);

console.log(positiveNumbers);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

//  reduce method:
console.log(movements);
const balance = movements.reduce(function (counter, currentValue, index, arr) {
  // you can see all the process and how the counter is been increasing in each iteration here:
  console.log(`iteration ${index}: ${counter} + ${currentValue}`);
  return counter + currentValue;
}, 0); // the 0 specifies that the counter stars at number 0 and it is gonna add up all the current value in each iteration of the array...
console.log(balance); // 3840 is the result of adding all the values together

const totalOfKateDog = dogsKate.reduce((count, value) => count + value, 0);
console.log(totalOfKateDog); // 31 result of the addition of dogKate values together...

// for of loop:
let balance2 = 0;
for (const [i, mov] of movements.entries()) {
  console.log(`Itretion ${i}: ${balance2} + ${mov}`);
  balance2 += mov;
}
console.log(balance2);

const maximumMovement = movements.reduce(
  (count, value) => (count > value ? count : value),
  movements[0]
);
console.log(maximumMovement);

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

function calcAverageHumanAge(ages) {
  const humanAge = ages.map(age => {
    if (age <= 2) {
      return age * 2;
    } else if (age > 2) return 16 + age * 4;
  });

  const adults = humanAge.filter(age => age >= 18);

  const average =
    adults.reduce((acc, value) => (acc += value), 0) / adults.length;

  // other way :
  const avrg = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  console.log(humanAge);
  console.log(adults);
  console.log(average);
  console.log(avrg);
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// the chaining method : all at once as a chain
const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD);

// if you are using a chaining method and you make a mistake you can access to the current array so you can see what array they are loping over...

const prueba = movements
  .filter(mov => mov < 0)
  .map((mov, i, arr) => {
    console.log(arr); // [-44, -650, -130] and you can see that the error is the filter method because map is looping over an array of negative values and it does not supossed to be like that.
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(prueba);

// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
*/
const calcAverageHumanAge2 = ages =>
  ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(hAge => hAge >= 18)
    .reduce((acc, adults, i, arr) => acc + adults / arr.length, 0); // modo correcto de calcular promedio usando reduce

console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));

function entenderReduce(array) {
  const average = array.reduce((acc, value, i, arr) => {
    console.log(arr);
    console.log(`iteration ${i + 1}: ${acc} + ${value} / ${arr.length}`); // no los suma todos y despues los divide en realidad aqui se suman los 2 primeros y lugo se divide y en cada iteracion se repite ese proceso por eso da un promedio erroneo.
    return acc + value / arr.length;
  }, 0);
}

// entenderReduce([2, 4, 6, 8]);

/*  THE FIND METHOD ....  */
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

// Example more realistic

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// using for of :
for (const account of accounts) {
  if (account.owner === 'Jessica Davis') {
    console.log(account);
  }
}

/* another example of what we have just learned  */

function calcDisplaySummary(movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => (acc += mov), 0);

  labelSumIn.textContent = `${incomes}€`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => (acc += mov), 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  // let's say that the bank pay us 1.2 % of each deposit and only is gonna do that if that interest is at least 1€:
  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter(int => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
}

// findIndex method: exactly the same but returns the index not the value

// the new findLast and findLastIndex Methods
console.log(movements);
const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal); // last negative value

// example in real life:
// using findLastIndex to find the latest large (> 2000) movement so we can create an string like this ('The latest large movement was x movement ago');
const latestLargeMovement = movements.findLastIndex(
  mov => Math.abs(mov) > 2000
);
console.log(
  `the latest large movement was ${
    movements.length - latestLargeMovement - 1
  } movement ago`
);

//  some and every methods .
console.log(movements);
//  express just equality ... ex: mov === -130 ?
console.log(movements.includes(-130)); // it returns either true or false, in this case it is true because -130 is actually in the array...

// if we want to know if there are any positive movement in the array (deposite)...
const anyDeposits = movements.some(mov => mov > 0); // (condition) it will return true because there are deposits in the array it is like an (ANY);

// Every : it returns true or false if all the values satisfies the condition...
const allPositive = account4.movements.every(mov => mov > 0); // true if all the values in the array are > 0 or false if at least one it is not > 0;

// we can also do ....
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

//-------------------------------------

// flat and flatmap methods.
const arreglo = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arreglo.flat()); // it goes into 1 level of nested so it returns [1, 2, 3, 4, 5, 6, 7, 8]

const arregloDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
const arrFixed = arregloDeep.flat(2);
console.log(arrFixed); // no modifies the original one

//  real life example :
// if we would want to calculate all the movement in all accounts like a global balance this can be really useful considering that all the movements are inside an object wich is inside an array....
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat() // array level 1 of nested
  .reduce((acc, mov) => acc + mov, 0);

console.log(overalBalance);

// flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements) // mix of map and flat methods only for 1 level nested
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

console.log(breeds);

// 1:
const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight;
console.log(huskyWeight);

// 2:
const dogBothActivities = breeds.find(
  breed =>
    breed.activities.includes('running') && breed.activities.includes('fetch')
).breed;
console.log(dogBothActivities);

// 3:
const allActivities = breeds.flatMap(breed => breed.activities);
console.log(allActivities);

// 4:
const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);

// 5:
const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter(breed => breed.activities.includes('swimming'))
      .map(breed => breed.activities)
      .flat()
      .filter(act => act !== 'swimming')
  ),
];
console.log(swimmingAdjacent);

// 6:
console.log(breeds.every(breed => breed.averageWeight >= 10));

// 7:
console.log(breeds.some(breed => breed.activities.length >= 3));

// Bonus:
const maxFetchAvgWeight = breeds
  .filter(breed => breed.activities.includes('fetch'))
  .map(breed => breed.averageWeight);
const maxAvgWeight = Math.max(...maxFetchAvgWeight); // we could have also used reduce method to get the larger number
console.log(maxAvgWeight);

// extra: if we want to return the breed who has the heaviest average weight
const heaviestbreed = breeds.find(
  breed => breed.averageWeight === maxAvgWeight
);
console.log(heaviestbreed.breed);

// -----------------------------------------

// sorting array:
const own = ['ariel', 'jonas', 'zach', 'martha'];
console.log(own.sort()); // ORDENA ALFABETICAMENTE EL ARRAY PERO MUTA EL ARRAY ORIGINAL y solo funciona con strings
console.log(own);

// numbers : sort (callback function)...
console.log(movements);

//  ascending
// return < 0, A, B (keep order)
// return > 0, B, A (switch order)
movements.sort((a, b) => {
  if (a > b) return 1; // it could be any number above 0
  if (b > a) return -1; // it could be any number below 0
});

// same as :
movements.sort((a, b) => a - b);
console.log(movements);

//descending
movements.sort((a, b) => b - a);
console.log(movements);

// -----------------------------

// array grouping method ES 2024:
// allow us to group values in an array based on a certain condition and put them into an object
console.log(movements);
const groupOfMovement = Object.groupBy(movements, mov =>
  mov > 0 ? 'Deposit' : 'withdrawals'
);
console.log(groupOfMovement);

// other example :
const groupedByActivities = Object.groupBy(accounts, account => {
  const movementCount = account.movements.length;
  if (movementCount >= 8) return 'very active';
  if (movementCount >= 4) return 'active';
  if (movementCount >= 1) return 'moderate';
  return 'inactive';
});

console.log(groupedByActivities);

const groupedAccount = Object.groupBy(accounts, account => account.pin); // pin is now a property that contains its correspondig object inside an array
console.log(groupedAccount);

//you can also apply the distructure method and do it more directly...
const groupedByPIn = Object.groupBy(accounts, ({ pin }) => pin);
console.log(groupedByPIn);

// --------------------------------------------

// filling arrays :
const x = new Array(7); // create an array with 7 as a length but with no elements, so it will be empty
console.log(x);

x.fill(1); // fillin the array of 1 in each value
console.log(x);

const y = new Array(5);
y.fill(4, 1, 3); // from index 1 to 3 (not included) we are filling the array with the number 4
console.log(y);

const otherExample = [1, 2, 3, 4, 5, 6, 7];

otherExample.fill(23, 2, 5); // replace from index 2 to 5 (5 is not incuded) with the number 23
console.log(otherExample);

//  Array.from()  OJO  :
const z = Array.from({ length: 7 }, () => 1);
console.log(z);

const otherExample2 = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(otherExample2);

// creating an array with random numbers :
const randomValues = Array.from({ length: 6 }, cur => {
  cur = Math.trunc(Math.random() * 6) + 1;
  return cur;
});

console.log(randomValues);

// QUERY SELECTOR ALL() AND OTHERS RETURNS A NODE LIST WHICH THEY ARE LIKE AN ARRAY BUT THEY ARE NOTE AND THEREFORE WE DONT HAVE ARRAYS METHOD LIKE MAP() REDUCE(), ETC... WE HAVE TU CONVERT THEM FIRST AND ARRAY.FROM() IS PERFECT FOR THAT : example
const labelBalance = document.querySelector('.balance__value'); // getting an html element by a class name

labelBalance.addEventListener('click', () => {
  const transaction = Array.from(
    document
      .querySelectorAll('.movements__value')
      .map(el => Number(el.textContent.replace('€', '')))
  );
  console.log(transaction);
  // the other way of doing this would be:
  const transaction2 = [...document.querySelectorAll('.movements__value')]; // but this way you have to do the map method separatelly but this also create an array from a NodeList
  console.log(transaction2);
});

// -----------------------------------------------

// NON DESTRUCTIVE ALTERNATIVES: TOREVERSED, TOSORTED, TOSPLICED, WITH...
//  reverse(): destructive method because it mutates the original array
// to reversed(): same as reverse(), but it is a non destructive method

// splice()
// toSpliced()

// sort()
// toSorted()

// there is a new non destructive method to change elements in an array (with):

//Destructive way:
// movements[1]= 2000;

// non Destructive way:
const newMovements = movements.with(1, 2000);
console.log(movements);
console.log(newMovements);

//-----------------------------------------------

// Array methods Practice:
// additioning all the deposit values (>0);
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);

console.log(bankDepositSum);

// how many deposits there have been in the bank with at least 1000 dollars
const depositsOver = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;
// other way:

const numDeposit1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, value) => (value >= 1000 ? ++acc : acc), 0); // ++acc = acc + 1;
/* Difference between acc++ vs ++acc:
  
acc++ : first return the value and then add 1 
  
++acc : first add 1 and then return the value already updated
*/

console.log(depositsOver);
console.log(numDeposit1000);

//  creating an object using reduce
// we want to create an object which contains the sum of all the deposits and all the withdrawals
const { entrada, salida } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.entrada += cur) : (sums.salida += cur);
      sums[cur > 0 ? 'entrada' : 'salida'] += cur;
      return sums;
    },
    { entrada: 0, salida: 0 }
  );

console.log(entrada, salida);

//  function to convert any string into a titlecase
// example: This is a nice title -> This Is a Nice Title

function titlecase(string) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];
  const titlecase = string
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word)
        ? word
        : word.at(0).toUpperCase() + word.slice(1)
    )
    .join(' ');
  return titlecase.at(0).toUpperCase() + titlecase.slice(1); // this is just to make the first word capital letter
}

console.log(titlecase('This is a nice title'));
console.log(titlecase('This is a LONG title but not too long'));
console.log(titlecase('and here is another title with an EXAMPLE'));

// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// recommendedFood = weight ** 0.75 * 28

//1.
dogs.forEach(dog => {
  dog.recFood = Math.floor(dog.weight ** 0.75 * 28);
});
console.log(dogs);
/* teacher version:  

dogs.forEach(dog => dog.recFood = dog.weight ** 0.75 * 28)

*/

// console.log(recomendedPortion);

// 2.
const { curFood, recFood } = dogs.find(dog => dog.owners.includes('Sarah'));
if (curFood < recFood * 0.9) {
  console.log('eating too little');
} else if (curFood > recFood * 1.1) {
  console.log('eating too much');
}

// 3.
const ownersTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood * 1.1)
  .flatMap(dog => dog.owners);

console.log(ownersTooMuch);

const ownersTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood * 0.9)
  .flatMap(dog => dog.owners);
console.log(ownersTooLittle);

// 4.
console.log(
  `${ownersTooMuch.join(
    ' and '
  )}'s dogs eat too much and ${ownersTooLittle.join(
    ' and '
  )}'s dogs eat too little!`
);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
console.log(
  dogs.every(
    dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  )
);

// 7.
const okay = dogs.filter(
  dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
);
console.log(okay);

// 8.
const dogsGroup = Object.groupBy(dogs, dog => {
  if (dog.curFood < dog.recFood * 0.9) {
    return 'Too Little';
  } else if (dog.curFood > dog.recFood * 1.1) {
    return 'Too Much';
  } else {
    return 'Exact';
  }
});
console.log(dogsGroup);

// 9.
const dogsOwners = Object.groupBy(dogs, dog => `${dog.owners.length} - owners`);
console.log(dogsOwners);

// 10.
const sorted = dogs.toSorted((a, b) => a.recFood - b.recFood);

console.log(sorted);
