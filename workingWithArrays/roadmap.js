'Use strict';

//  conversion:
console.log(Number('23')); // 23 number
console.log(+'23'); // 23 number (cleaner way of converting string to numbers)

// parsing
console.log(Number.parseInt('30px', 10)); // 30   number gets rid of the innecessary symbols(px) and return the number and with 10 we are specifying that we are basing on 10 not 2(binary).
console.log(Number.parseInt('e23', 10)); // NaN because you can not start with a string (e).

console.log(Number.parseInt(' 2.5rem ')); // 2  because it will just return the interger value and it will get rid of the symbols
console.log(Number.parseFloat(' 2.5rem ')); // 2.5  same reason but now it returns decimal

// ckecking if value is literally NaN :
console.log(Number.isNaN(20)); // false      because 20 is a number
console.log(Number.isNaN('20')); // false     because this also is not not a number, it is just a regular value
console.log(Number.isNaN(+'20x')); // true     because this is not a number, you can not convert x into a number
console.log(Number.isNaN(23 / 0)); // false    because it returns another special value named infinity but it does not returns NaN.

//checking if value is a number: best way
console.log(Number.isFinite(20)); // true  because 20 is a finite
console.log(Number.isFinite('20')); // false   because it's not a number
console.log(Number.isFinite(+'20x')); // false   because it is not a number
console.log(Number.isFinite(20 / 0)); // false   because infinite is not finite

// checking if value is an interger
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true as well
console.log(Number.isInteger(23 / 0)); // false

// -------------------------------------------------

// Math and Rounding
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

// Math.max
console.log(Math.max(5, 18, 23, 11, 2)); // 23 returns the maximum value
console.log(Math.max(5, 18, '23', 11, 2)); // 23 returns the maximum value and also does type coercion so it converts the string into a number
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN because it does not do parsing so it cant convert px into a number

// we also have Math.min
console.log(Math.min(5, 18, 23, 11, 2)); // 2 returns the minimum value

// ------------------------------------------
//   PI constant
console.log(Math.PI * Number.parseFloat('10px') ** 2); // Math.PI is the PI constant and this is the formula to calculate the area of a circule (PI * radio ** 2)

// Generating randoms number:
console.log(Math.trunc(Math.random() * 6) + 1);

// creating a function that generates random numbers:
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

console.log(randomInt(10, 20));
console.log(randomInt(0, 3));

// -----------------------------------------------
// rounding intergers
console.log(Math.trunc(23.3)); // 23   always remove the decimal part
console.log(Math.round(23.3)); // 23    always will round to the nearest integer
console.log(Math.round(23.9)); // 24    always will round to the nearest integer
console.log(Math.ceil(23.3)); // 24    it will always be rounded up
console.log(Math.ceil(23.9)); // 24

console.log(Math.floor(23.3)); // 23     it will always round down
console.log(Math.floor(23.9)); // 23

// Math.floor vs Math.trunc
console.log(Math.floor(23.3)); // 23
console.log(Math.trunc(23.3)); // 23
// they work the same with positive numbers
console.log(Math.floor(-23.3)); // -24 rounding down
console.log(Math.trunc(-23.3)); // -23 just removing decimals

// -----------------------------------------

// rounding decimals
console.log((2.7).toFixed(0)); // '3'   because we are specifying that we want 0 decimals parts but it will return an string
console.log((2.7).toFixed(3)); // '2.700'   because we are specifying that we want 3 decimals parts but it will return an string
console.log((2.745).toFixed(2)); // '2.75'   because we are specifying that we want 2 decimals parts and 5 modifies the previous 4, but it will return an string

//solution
console.log(+(2.765).toFixed(2)); // 2.77 now as a number

// ---------------------------------------------------

//   reminder operator
console.log(5 % 2); // 1

// ----------------------------------------------------

// numerics operator
//  287,460,000,000
const diameter = 287_460_000_000; // it helps to read and understand the number
console.log(diameter);

const priceCents = 345_99;
console.log(priceCents); // 34599 javascript ignore the underscore

const transferFee1 = 15_00;
const transferFee2 = 1_500;

console.log(Number('230_000')); // NaN
console.log(parseInt('230_000')); // 230 only the int
console.log(parseFloat('230_000')); // 230 only the int because it does not see the .

// ---------------------------------------------------

//    BigInt
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER); // This is the max safe integer

console.log(457774884746353784955756544857n); // the n means that the number is converted ti bigInt
console.log(BigInt(4577748847463)); // the n means that the number is converted ti bigInt

// operation
console.log(10000n + 10000n); // it works the same as a normal integer
console.log(336645775868696905n * 1092808374n); // it works the same

const huge = 83746557559576625n;
const num = 23;
console.log(huge * BigInt(num)); // you cant mix a bigInt with a regular number you hvae to convert the number into also a bigInt

console.log(20n > 15); // true   this works normal.
console.log(20n === 20); // false   this works normal as well they are not the same type so it is false.
console.log(20n == 20); // true   this works normal as well they are not the same type but they're the same value so it is true.

console.log(console.log(huge + ' is Really big!!!')); // huge is coonverted to string

// Divisions
console.log(10n / 3n); // 3      cut the decimal off
console.log(10 / 3); // 3.33333   normal division

//------------------------------------------------------

//  CREATING DATES:  4 ways:
const now = new Date();
console.log(now); // current date and time just now

console.log(new Date('Aug 01 2020 18:05:41')); // creating date based on the string we just passed in

console.log(new Date(2037, 10, 19, 15, 23, 5)); // year, month, day, hours, min, sec

console.log(new Date(0)); // the default time
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 3 days later

// working with dates
const future = new Date(2037, 10, 19, 15, 23); // year, month, day, hours, min
console.log(future);
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10 november because the month is base 0
console.log(future.getDate()); // 19  day
console.log(future.getDay()); // 4   thursday day os the week
console.log(future.getHours()); // 15  hours
console.log(future.getMinutes()); // 23  minutes
console.log(future.getSeconds()); // 0   seconds
console.log(future.toISOString()); // nice ISOS string which follow some kind of international standarts
console.log(future.getTime()); // the amount of milisecond since first day new Date(0)

console.log(new Date(2142274980000)); // if we pass into the function the same amount of miliseconds we are gonna get the same day

console.log(Date.now()); // 1754275986258  miliseconds since first day

future.setFullYear(2040);
console.log(future); // now the year is 2040
