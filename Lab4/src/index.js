"use strict";
// 1:
// Entrada: un número pedido con un prompt. Salida: Una tabla con los números del
// 1 al número dado con sus cuadrados y cubos. Utiliza document.write para producir la salida
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
const form1 = document.getElementById("act1From");
const input1 = form1.elements.namedItem("number");
const table1 = document.getElementById("act1Table");
form1.addEventListener("submit", (e) => {
  e.preventDefault();
  const number = parseInt(input1.value);
  table1.innerHTML = `<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>`;
  for (let i = 1; i <= number; i++) {
    table1.innerHTML += `<tr><td>${i}</td><td>${i ** 2}</td><td>${
      i ** 3
    }</td></tr>`;
  }
});
// 2:
// Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados
// de manera aleatoria. Salida: La página debe indicar si el resultado fue correcto o incorrecto,
// y el tiempo que tardó el usuario en escribir la respuesta.
const randNum1 = document.getElementById("randNum1");
const randNum2 = document.getElementById("randNum2");
const form2 = document.getElementById("act2From");
const input2 = form2.elements.namedItem("result");
const feedback2 = document.getElementById("act2Feedback");
const grnerateBtn = document.getElementById("act2Btn");
let time = 0;
grnerateBtn.addEventListener("click", () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  randNum1.innerText = num1.toString();
  randNum2.innerText = num2.toString();
  time = Date.now();
});
form2.addEventListener("submit", (e) => {
  e.preventDefault();
  const result = parseInt(input2.value);
  if (result === parseInt(randNum1.innerText) + parseInt(randNum2.innerText)) {
    feedback2.innerText = `Correcto, tiempo: ${Date.now() - time}ms`;
  } else {
    feedback2.innerText = `Incorrecto, tiempo: ${Date.now() - time}ms`;
  }
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  randNum1.innerText = num1.toString();
  randNum2.innerText = num2.toString();
  time = Date.now();
});
// 3:
// Función: contador. Parámetros: Un arreglo de números. Regresa: La cantidad de
// números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores
// a 0 en el arreglo.
const form3 = document.getElementById("act3Form");
const input3 = form3.elements.namedItem("list");
const feedback3 = document.getElementById("act3Feedback");
form3.addEventListener("submit", (e) => {
  e.preventDefault();
  const list = input3.value.split(",").map((n) => parseInt(n));
  let neg = 0;
  let zero = 0;
  let pos = 0;
  list.forEach((n) => {
    if (n < 0) {
      neg++;
    } else if (n === 0) {
      zero++;
    } else {
      pos++;
    }
  });
  feedback3.innerText = `Negativos: ${neg}, Ceros: ${zero}, Positivos: ${pos}`;
});
// 4:
// Función: promedios. Parámetros: Un arreglo de arreglos de números. Regresa:
// Un arreglo con los promedios de cada uno de los renglones de la matriz.
const form4 = document.getElementById("act4Form");
const input4 = form4.elements.namedItem("lists");
const feedback4 = document.getElementById("act4Feedback");
form4.addEventListener("submit", (e) => {
  e.preventDefault();
  let lists = input4.value
    .split(";")
    .map((list) => list.split(",").map((n) => parseInt(n)));
  let averages = lists.map((list) => {
    let sum = 0;
    list.forEach((n) => (sum += n));
    return (sum / list.length).toFixed(2);
  });
  feedback4.innerText = `Promedios: ${averages}`;
});
// 5:
// Función: inverso. Parámetros: Un número. Regresa: El número con sus dígitos
// en orden inverso.
const form5 = document.getElementById("act5Form");
const input5 = form5.elements.namedItem("number");
const feedback5 = document.getElementById("act5Feedback");
form5.addEventListener("submit", (e) => {
  e.preventDefault();
  const number = parseInt(input5.value);
  feedback5.innerText = `Inverso: ${inverso(number)}`;
});
function inverso(n) {
  return n.toString().split("").reverse().join("");
}
// 6:
// Crea una solución para un problema de tu elección (puede ser algo relacionado
// con tus intereses, alguna problemática que hayas identificado en algún ámbito,
// un problema de programación que hayas resuelto en otro lenguaje, un problema de la ACM,
// entre otros). El problema debe estar descrito en un documento HTML, y la solución
// implementada en JavaScript, utilizando al menos la creación de un objeto, el objeto
// además de su constructor deben tener al menos 2 métodos. Muestra los resultados en
// el documento HTML.

const btn6 = document.getElementById("act6Btn");
const gatoImg = document.getElementById("gatoImg");

btn6.addEventListener("click", () =>
  __awaiter(void 0, void 0, void 0, function* () {
    let response = yield fetch("https://api.thecatapi.com/v1/images/search");
    let image = yield response.json();
    gatoImg.src = image[0].url;
  })
);
