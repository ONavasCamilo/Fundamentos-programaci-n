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

var instructor = 'tony'

if(false) {
    let instructor = "Franco";
}
// console.log(instructor);

function encuentraNumMayor(arr, num) {
    let arrResultado = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > num) arrResultado.push(arr[i])
    }
return arrResultado
}

// console.log(encuentraNumMayor([12,24,15,65,3], 14))


function encontrarPalabraEnFrase(frase, palabra){
    let arr = []
    for (let i = 0; i < frase.length; i++){
        if(frase[i] === palabra) arr.push(frase[i])
    }
return arr
}

