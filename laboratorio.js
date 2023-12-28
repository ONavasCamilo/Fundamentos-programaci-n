// ola, documento para hacer cosas sin sentido

// const hora = setInterval(() => {
//     console.log('oyeme what')
// },10000)

// const title = document.querySelector('.titulo')

// const imprimirValor = setTimeout(() => {
//     title.innerHTML = 'mensaje colocado pasado 5s de carga'
// }, 5000);

// function esperarCincoSeg() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Texto cambiado con promesa en 5 segundos gracias al setTimeout e innerHtml')
//         }, 5000);
//     })

// }

// const title = document.querySelector('.titulo');

// esperarCincoSeg()
// .then((msg) => {
//     title.innerHTML = msg
// })
// .catch((err) => {
//     console.log('Error:', err)
// })

// var instructor = 'tony'

// if(false) {
//     let instructor = "Franco";
// }
// // console.log(instructor);

// function encuentraNumMayor(arr, num) {
//     let arrResultado = []
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] > num) arrResultado.push(arr[i])
//     }
// return arrResultado
// }

// // console.log(encuentraNumMayor([12,24,15,65,3], 14))

// function encontrarPalabraEnFrase(frase, palabra){
//     let arr = []
//     for (let i = 0; i < frase.length; i++){
//         if(frase[i] === palabra) arr.push(frase[i])
//     }
// return arr
// }

// function findFirstRepeated(gifts) {
//     // Code here
//     for (let i = 0; i < gifts.length; i++) {
//       for (let j = gifts[i+1]; j < gifts.length; j++) {
//         if(gifts[i] === gifts[j]) return gifts[j]
//       }
//     }
//     return -1
//   }

//   let arr = [1, 2]
//   let aldoZorrita = true

//   console.log(findFirstRepeated(arr))

// 1 - Escriba una función que retorne el mayor elemento de un array de números
// No vale utilizar el método .sort()
function greatestElement(numbers) {
  let mayor = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > mayor) mayor = numbers[i];
  }
  return mayor;
}

function mayorArr(arr) {
  return Math.max(...arr);
}

// console.log(greatestElement([1,2,3,4,,3,45,2]));
// console.log(mayorArr([1,2,3,413,52,10]));

// 2 - Escriba una función que calcule la suma de todos los elementos numéricos de un array
function suma(numbers) {
  let sumados = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumados += numbers[i];
  }
  return sumados;
}

function sumaForEach(arr) {
  let sumados = 0;
  arr.forEach((e) => (sumados += e));
  return sumados;
}

// console.log(suma([1,2,3,3]));
// console.log(sumaForEach([1,2,3,3]));

// 3 - Escriba una función que retorne true si una String es un palíndromo

function esPalindromo(cad) {
  let invertida = cad.split("").reverse().join("");
  if (invertida === cad) return true;
  return false;
}

// console.log(esPalindromo('olo'));
// console.log(esPalindromo('solos'));
// console.log(esPalindromo('101'));
// console.log(esPalindromo('caramelo'));

// 4 - Escriba una función que combine 2 listas alternando sus elementos.
// ej: [a,b,c], [1,2,3] → [a,1,b,2,c,3].

function combinarArr(arr1, arr2) {
  const arrayCombinado = [];
  for (let i = 0; i < arr1.length; i++) {
    arrayCombinado.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    arrayCombinado.push(arr2[i]);
  }
  return arrayCombinado;
}

// console.log(combinarArr([1,2,3], [4,5,6]));

function combineArr(arr1, arr2) {
  const nuevoArray = [];
  let i = 0;
  while (i < arr1.length || i < arr2.length) {
    if (i < arr1.length) nuevoArray.push(arr1[i]);
    if (i < arr2.length) nuevoArray.push(arr2[i]);
    i++;
  }
  return nuevoArray;
}

// console.log(combineArr([1,2,3], [4,5,6]));

// 5 - Escribe una función que calcule la lista de los primeros 100 números Fibonacci
// Los primeros números Fibonacci son 1 y 1.
// El enésimo numero Fibonacci se calcula agregando el enésimo-1 con el enésimo-2
//  1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.

function fiboRecursivo(num) {
  if (num < 2) return num;
  return fiboRecursivo(num - 2) + fiboRecursivo(num - 1);
}

console.log(fiboRecursivo(8));

// 8 --> 8-2=    6  +   8-1=    7
//   6       +        7
// 6-2=  4   +     7-1=   6
// 4       +      6
// 4-2= 2   +     6-1 = 5
// 2      +         5
// 2-2= 0 +    5-1=4
// 4-1=3
//3-1=2
//2-1=1

// 6 - Escribir función para tomar un array de Strings e imprimir, cada palabra en una línes
// dentro de un cuadro retangular.
// Por ejemplo la lista ["Hello", "World", "in", "a", "frame"] debería salir así:
//
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

function imprimirArr(arr) {
  let stringLargo = arr[0];
  arr.forEach((e) => {
    if (e.length > stringLargo.length) stringLargo = e;
  });
  let asterisco = "*";
  let espaciado = "";
  let cuadro = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === stringLargo.length) espaciado = " ".repeat(1);
    if (arr[i].length < stringLargo.length)
      espaciado = " ".repeat(stringLargo.length - arr[i].length + 1);
    cuadro += `* ${arr[i] + espaciado}*\n`;
  }
  return (
    `${asterisco.repeat(stringLargo.length + 4)}\n` +
    cuadro +
    `${asterisco.repeat(stringLargo.length + 4)}`
  );
}

// console.log(imprimirArr(["Hell", "Worl", "in", "a", "frame", "ola", "putaputaputa"]))

// 7 - Escribir función para converter un texto en código-morse y vice-versa
// ej: toMorseCode("SOS") debería ser retornar "...---..."

// freeCodeCamp

// Configuración
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Cambia solo el código debajo de esta línea
function updateRecords(records, id, prop, value) {
  if (!value.length) delete records[id][prop];
  else if (value.length && typeof value === "string") records[id][prop] = value;
  else if (Array.isArray(value)) {
    if (!records[id][prop] || !Array.isArray(records[id][prop])) {
      records[id][prop] = [];
    }
    records[id][prop].unshift();
  }
  return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");

//Después de updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks debe tener la cadena Take a Chance on Me como último y único elemento.

//Después de updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracks debe tener la cadena Addicted to Love como último elemento.

//Después de updateRecords(recordCollection, 2468, "tracks", "Free"), tracks debe tener la cadena 1999 como primer elemento.


function sortPrimeHouses(array) {
  // Tu código aquí:
  for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
          if (array[j] > arr[j + 1]) {
              let aux = array[j]
              array[j] = array[j + 1]
              array[j + 1] = aux
          }
      }
      let numeroOrdenado = array[array.length - i - 1]
      for (let i = 2; i <= Math.sqrt(numeroOrdenado))
  }
  return array
}


console.log(sortPrimeHouses([8,4,6,9,12,2,1,15]))