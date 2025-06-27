"use strict";

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`"...${arr[i]} grados celcius in ${i + 1} days"`);
  }
}

// printForecast();

function printForecastString(arr) {
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days ...`;
  }
  return `"...${str}"`;
}

console.log(printForecastString(data2));
