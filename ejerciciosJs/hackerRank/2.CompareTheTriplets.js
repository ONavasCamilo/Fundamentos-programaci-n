//! Alice y Bob crearon cada uno un problema para HackerRank. Un revisor califica los dos desafíos y otorga puntos en una escala del 1 al 100 para tres categorías: claridad del problema, originalidad y dificultad.

//? La calificacion para el desafio de Alice es el triplete
//* a = (a[0], a[1], a[2]) 
//? La calificacion para el desafio de Bob es el triplete
//* b = (b[0], b[1], b[2])

//! La tarea es encontrar sus puntos de comparacion comparando:
//* a[0] con b[0], a[1] con b[1] y a[2] con b[2]

//? . Si a[i] > b[i], Alice recibe 1 punto.
//? . Si a[i] < b[i], Bob recibe 1 punto.
//? . Si a[i] = b[i], ninguna persona recibe un punto.

//? Los puntos de comparacion son los puntos totales que obtuvo una persona. Dados a y b, determine sus respectivos puntos de comparacion

//! EJ:
//* a = [1, 2, 3]
//* b = [3, 2, 1]
//* Para los elementos *0*, Bob recibe un punto porque a[0] .
//* Para los elementos iguales a[1] y b[1] , no se obtienen puntos.
//* Finalmente, para los elementos 2 , a[2] > b[2] entonces Alice recibe un punto.
//* La matriz devuelta es [1, 1] con la puntuación de Alice primero y la de Bob segundo.

//! RESTRICCIONES

//* 1 <= a[i] <= 100
//* 1 <= b[i] <= 100

//Complete the 'compareTriplets' function below.

//The function is expected to return an INTEGER_ARRAY.
//The function accepts following parameters:
// 1. INTEGER_ARRAY a
// 2. INTEGER_ARRAY b

function compareTriplets(a = [], b = []) {
    let alice = 0
    let bob = 0
    if (a[0] > b[0]) alice++
    if (a[0] < b[0]) bob++
    if (a[1] > b[1]) alice++
    if (a[1] < b[1]) bob++
    if (a[2] > b[2]) alice++
    if (a[2] < b[2]) bob++
    return [alice, bob]
}

console.log(compareTriplets([5,6,7], [3,6,10]))