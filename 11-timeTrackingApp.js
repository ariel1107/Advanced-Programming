/*let's say you are building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/
"use strict";

//Investigar como se puede implementar el "." para poder agregar a la lista (hours) numeros decimales provenientes de un promp
// const lista = prompt("Please enter the hours worked of the week");
const hours = [7.5, 8, 6.5, 0, 8.5, 4, 0];

// for (let j = 0; j < lista.length; j++) {
// hours.push(Number(lista[j]));
// }

// console.log(hours);

function infoEmployees(arr) {
  const day = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let totalHours = 0;
  let averageHours = 0;
  let mostDayWorked = arr[0];
  let numberofDaysWorked = 0;
  let wasFullTime = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr.length !== 7) {
      return "enter 7 number for eachday of the week";
    }

    totalHours += arr[i];
    mostDayWorked = mostDayWorked > arr[i] ? mostDayWorked : arr[i];
    if (arr[i] !== 0) {
      numberofDaysWorked++;
    }
  }

  if (totalHours >= 35) wasFullTime = true;
  averageHours = totalHours / arr.length;

  return `Detalles:
  Total hours= ${totalHours}.
  Average= ${averageHours}.
  Most hours Worked in the week= ${mostDayWorked}.
  Number of Days worked= ${numberofDaysWorked} days.
  Full-Time= ${wasFullTime ? "SI" : "NO"}.`;
}

console.log(infoEmployees(hours));
