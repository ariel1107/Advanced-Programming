let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

const bodyMassIndex = function (mass, height) {
  const BMI = mass / height ** 2;
  return BMI;
};

let BMIMark = bodyMassIndex(massMark, heightMark);
let BMIJohn = bodyMassIndex(massJohn, heightJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
} else if (BMIJohn > BMIMark) {
  console.log(`john's BMI (${BMIJohn}) is higher than mark's (${BMIMark})`);
}

massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

BMIMark = bodyMassIndex(massMark, heightMark);
BMIJohn = bodyMassIndex(massJohn, heightJohn);

markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI ($
{BMIMark}) is higher than John's ($
{BMIJohn})`);
} else if (BMIJohn > BMIMark) {
  console.log(`john's BMI (${BMIJohn}) is higher than mark's (${BMIMark})`);
} else {
  console.log(`both have the same BMI (${BMIMark})`);
}
