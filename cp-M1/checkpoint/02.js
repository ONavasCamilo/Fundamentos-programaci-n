// 2️⃣ ***** EJERCICIO 2 ***** - BuscandoError() 2️⃣
// En el hospital unas de las maquinas empezó a fallar y lanzan un error por pantalla, debemos identificar cuáles tienen un patron de inicio y cierre:
// Necesitamos que determines si el error esta balanceado en cuanto a paréntesis, corchetes y llaves.
// La función debe devolver true si los paréntesis, corchetes y llaves están balanceados y false en caso contrario.
// Se considera que los paréntesis, corchetes y llaves están balanceados si para cada uno de estos símbolos de apertura hay un símbolo de cierre correspondiente y los símbolos están correctamente anidados.

// Ejemplo:

// Input: "{[()()]}"
// Output: true

// Input: "([)]"
// Output: false
//
//
// REQUISITOS:
//  🟢 Respetar el principio de LIFO que tienen los stacks
//  🟢 Retornar true o false, dependiendo de lo que corresponda.
//  🟢 Investigar que hace el metodo charAt, les puede servir

// function BuscandoError(expresion) {
//   const obj = {
//     "[": "]",
//     "{": "}",
//     "(": ")",
//   };
//   let stackCierre = [];
//   for (let i = 0; i < expresion.length; i++) {
//     if (obj[expresion[i]]) stackCierre.push(obj[expresion[i]]);
//     else {
//       if (stackCierre[stackCierre.length - 1] === expresion[i])
//         stackCierre.pop();
//       else return false;
//     }
//   }
//   return true;
// }


function BuscandoError(expression) {
  let isOk = true;
  const arr = expression.split("");

  const patterns = {
    "{": "}",
    "[": "]",
    "(": ")"
  };

  const tieneQueCerrar = [];    

  arr.forEach(char => {
    console.log(char)
    if (patterns[char]) {
      console.log(`${char} push: ${patterns[char]}`)
      tieneQueCerrar.push(patterns[char]);
    } else {
      // [ "}" ]
      console.log(char)
      if (char === tieneQueCerrar[tieneQueCerrar.length - 1]) {
        tieneQueCerrar.pop();
      } else {
        console.log("esta mal", char)
        isOk = false;
      }
    }
  });

  return isOk;
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  BuscandoError,
};
