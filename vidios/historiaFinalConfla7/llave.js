const contenedor = document.querySelector('.flex-container')
let contador = 0

// document.querySelector('.send-button').value = 'COMPRAR'

const boton = document.querySelector('.send-button')
let valorAntiguo = boton.value
boton.value = valorAntiguo.toUpperCase()

function crearLlave(nombre, modelo, precio) {
    contador++
    img = '<img src="llave.png">'
    nombre = `<h2>${nombre}</h2>`
    modelo = `<h3>${modelo}</h3>`
    precio = `<p>Precio: <b>$${precio}</b></p>`

    return [img, nombre, modelo, precio]
}

// const llave = crearLlave('llave1', 'Modelo X', '33')

// document.write(llave[0], llave[1], llave[2])

const changeHidden = (number)=>{
    document.querySelector('.key-data').value = number
}

let documentFragment = document.createDocumentFragment()

for (i = 1; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random() * 10000)
    let precioRandom = Math.round(Math.random() * 10 + 30)
    let llave = crearLlave(`llave ${i}`, `modelo ${modeloRandom}`, precioRandom,)
    let div = document.createElement('DIV')
    div.addEventListener('click', ()=>{changeHidden(modeloRandom)})
    div.tabIndex = i
    div.classList.add(`item-${i}`, `flex-item`)
    div.innerHTML += llave[0] + llave[1] + llave[2] + llave[3]
        documentFragment.appendChild(div)
}

contenedor.appendChild(documentFragment)