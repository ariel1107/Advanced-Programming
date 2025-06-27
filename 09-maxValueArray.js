//Calcular la amplitud de la temperatura (maxValue - minValue) en un array
const temps = [3, -2, -6, -1];
// Encontrar el valor máximo de un array
function amplitudTemp(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (typeof current != "number") continue;
    max = current > max ? current : max;
    min = current < min ? current : min;
  }
  const amplitud = max - min;
  return `The highest temperature is ${max}, the lowest is ${min} and the amplitud is ${amplitud}`;
}

// console.log(amplitudTemp([2, 3, "error", 5]));

//Manera mas completa de realizar el ejercicio.
function tempAmplitude(arr) {
  let initial;
  let i = 0;
  while (i < arr.length) {
    if (typeof arr[i] === "number") {
      initial = arr[i];
      break;
    }
    i++;
  }

  let max = initial;
  let min = initial;

  for (let j = 0; j < arr.length; j++) {
    const current = arr[j];
    if (typeof current !== "number") continue;
    max = current > max ? current : max;
    min = current < min ? current : min;
  }

  const amplitudTemp = max - min;

  return `The highest temperature is ${max}, the lowest is ${min} and the amplitud is ${amplitudTemp}`;
}

// console.log(witoutProblem(["hola", "diez", 20, 18, 30, 16]));

// solucionando un nuevo problema suponiendo que ahora la funcion reciba 2 ARRAYS en vez de uno solo y necesitemos concatenarlos para que podamos todavia realizar la misma funcionalidad

function tempAmplitude(array1, array2) {
  const arr = array1.concat(array2);
  let initial;
  let i = 0;
  while (i < arr.length) {
    if (typeof arr[i] === "number") {
      initial = arr[i];
      break;
    }
    i++;
  }

  let max = initial;
  let min = initial;

  for (let j = 0; j < arr.length; j++) {
    const current = arr[j];
    if (typeof current !== "number") continue;
    max = current > max ? current : max;
    min = current < min ? current : min;
  }

  const amplitudTemp = max - min;

  return `The highest temperature is ${max}, the lowest is ${min} and the amplitud is ${amplitudTemp}`;
}

console.log(tempAmplitude([2, 4, 5, 65], [23, 11, 40]));
