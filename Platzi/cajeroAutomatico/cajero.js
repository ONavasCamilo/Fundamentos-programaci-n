class Billete {
    constructor(v, c) {
        this.valor = v
        this.cantidad = c
    }
}

function entregarDinero() {
    let t = document.getElementById('dinero')
    dinero = parseInt(t.value)
    for (let bi of caja) {
        // console.log(bi)
        if (dinero > 0) {
            div = Math.floor(dinero / bi.valor)
            // console.log(div)
            if (div > bi.cantidad) {
                papeles = bi.cantidad
            }
            else {
                papeles = div
            }
            entregado.push(new Billete(bi.valor, papeles))
            dinero -= (bi.valor * papeles)
        }
    }
    if (dinero > 0) {
        resultado.innerHTML = 'soy un cajero pobre carnal'
    }
    else {
        for (let e of entregado){
            if(e.cantidad > 0){
                resultado.innerHTML += e.cantidad + ' billetes de $' + e.valor + '<br>'
            }
        }
    }
}

let caja = []
let entregado = []

caja.push(new Billete(10, 5))
caja.push(new Billete(50, 20))
caja.push(new Billete(20, 10))
caja.push(new Billete(10, 10))
caja.push(new Billete(5, 5))

let dinero = 0
let div = 0
let papeles = 0

let resultado = document.getElementById('resultado')
var b = document.getElementById('extraer')
b.addEventListener('click', entregarDinero)