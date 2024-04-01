//! En este desafio, debes calcular e imprimir la suma de los elementos de una matriz, teniendo en cuenta que algunos de esos numeros enteros pueden ser bastantes grandes
/* Funcion descriptiva:
    *Complete la funcion aVeryBigSum, Debe devolver la suma de todos los elementos de la matriz
    ! aVeryBigSum tiene los siguientes parametros: int ar[n] una matriz de numeros enteros

    * Devolver:
        * largo:  la suma de todos los elementos de la matriz
    
    ? Formato de entrada
        * La primera linea de la entrada consta de un número entero n
        * La siguiente línea contieneEnteros separados por espacios contenidos en la matriz
    

    ? Formato de salida
        * Devuelve la suma entera de los elementos de la matriz.

    ! RESTRICCIONES
        * 1 <= n <= 10
        * 0 <= ar[i] <= 10^10
*/

/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar) {
    // Write your code here  
    let res = 0
    for (let i = 0; i < ar.length; i++) {
        res += ar[i]
    }
    return res
}

console.log(aVeryBigSum([5, 1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))