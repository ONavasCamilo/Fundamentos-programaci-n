// ola, documento para hacer cosas sin sentido

// const hora = setInterval(() => {
//     console.log('oyeme what')
// },10000) 

// const title = document.querySelector('.titulo')



// const imprimirValor = setTimeout(() => {
//     title.innerHTML = 'mensaje colocado pasado 5s de carga'
// }, 5000);


function esperarCincoSeg() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Texto cambiado con promesa en 5 segundos gracias al setTimeout e innerHtml')
        }, 5000);
    })

}

const title = document.querySelector('.titulo');


esperarCincoSeg()
.then((msg) => {
    title.innerHTML = msg
})
.catch((err) => {
    console.log('Error:', err)
}) 

