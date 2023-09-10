// for(var i=1;i<=10;i++){
//     console.log('Vuelta N° ' + i); // mostrará num vueltas desde 1, y hasta 10
// };

// var i = 0;
// while (i < 3){
//     console.log(i); // mostrará 0, 1, 2
//     i++;
// };

// for (var i= 0; i < 3; i++){
//     console.log(i);
// }

// do {
//     //codigo
// } while (condition); 

// CALCULAR NUMERO PRIMO O NO

// function esPrimo(num){
//     if(num <= 1)
//     console.log(false);
// for(var i=2; i<num; i++) {
//     if(num % i === 0){
//     console.log(false);
//     }
// }
// console.log(true);
// };

// esPrimo(8);

// function primoTrueOFalse(num){
// if(num === 2){
//     console.log(true);
// }
// else if(num < 2){
//     console.log(true);
// }
// for(var i = 2; i < num; i++){
//     if(num % i === 0){
//         console.log(false);
//     }
// }
// console.log(true);
// }

// primoTrueOFalse(8);

function cuentaCifras(num){

var contador = 0;

// Si el numero es 0, tiene una cifra
if (num == 0) {
    contador = 1;
} else {
    // Vamos dividiendo entre 10 hasta que lleguemos a 0
    for (var i = Math.abs(num); i > 0; i /= 10) {
        contador++;
    }

}
{
console.log(contador);
}
}

cuentaCifras(14);
