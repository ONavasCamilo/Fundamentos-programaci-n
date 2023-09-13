let imagenes = []
imagenes['cauchin'] = 'vaca.png'
imagenes['pokacho'] = 'pollo.png'
imagenes['tocinaurio'] = 'cerdo.png'


//anterior NUEVA COLECCION OWO
// let cauchin  = new Pakiman('cauchin', 100, 30)
// let pokacho = new Pakiman('pokacho', 70, 20)
// let tocinaurio = new Pakiman('tocinaurio', 120, 40)

// console.log(cauchin, pokacho, tocinaurio)

// pokacho.mostrar()
// cauchin.mostrar()
// tocinaurio.mostrar()

let coleccion = []
coleccion.push(new Pakiman('cauchin', 100, 30))
coleccion.push(new Pakiman('pokacho', 70, 20))
coleccion.push(new Pakiman('tocinaurio', 120, 40))

// console.log(coleccion)


//muestra indice
// for(fredito in coleccion){
//     console.log(coleccion[fredito])
// }

//muestra instancia. 2DA OPCION
for (fredito of coleccion) {
    fredito.mostrar()
}


// verificacion en console.log

for (x in coleccion[0]) {
    console.log(x)
}

