//  const lista = document.querySelector("#lista")
//  const fragment = document.createDocumentFragment()
//  const liTemplate = document.getElementById('liTemplate')

//  const arrayPaises = ["Perú", "México", "Colombia"]

//  const clickPaises = e => console.log("me diste click", e.target)
 
// arrayPaises.forEach(pais => {
//     const clone = liTemplate.content.firstElementChild.cloneNode(true)// firstElementChild nos permita agregar evento al clon
//     clone.querySelector('span').textContent = pais

//     clone.addEventListener('click', clickPaises)

//     fragment.appendChild(clone)
// })

// lista.appendChild(fragment)
 
 // console.log(clone)
 
//  const clone = liTemplate.content.cloneNode(true)
// clone.querySelector(".text-primary").textContent = "agregué a través de un template"
// lista.appendChild(clone)

const carrito = document.getElementById('carrito')
const template = document.getElementById('template')
const fragment = document.createDocumentFragment()
const btnesBotones = document.querySelectorAll('.card .btn')

// console.log(carrito)
// console.log(template)
// console.log(fragment)
// console.log(btnesBotones)

const carritoObjeto = {

}

const agregarAlCarrito = (e) => {
    // console.log(e.target.dataset.fruta)

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    }

    if(carritoObjeto.hasOwnProperty(producto.titulo)){
        producto.cantidad = carritoObjeto[producto.titulo].cantidad+1
    }

    carritoObjeto[producto.titulo] = producto
    // console.log(carritoObjeto)
    pintarCarrito(producto)
}

const pintarCarrito = () => {
    // console.log('pintar carrito', producto)
    carrito.textContent = ''

    Object.values(carritoObjeto).forEach(item => {
        const clone = template.content.firstElementChild.cloneNode(true)
        clone.querySelector('.lead').textContent = item.titulo
        clone.querySelector('.badge').textContent = item.cantidad

        fragment.appendChild(clone)
    })
    carrito.appendChild(fragment)
}

btnesBotones.forEach((btn) => btn.addEventListener('click', agregarAlCarrito))