let miObjeto = {
    nombre: 'pepe',
    altura: 5,
    peso: 60,
}
let propiedad = 'peso'








function muestraPeso(miObjeto, propiedad){
    //conozco el nombre exacto de la propiedad:
    console.log(miObjeto['peso'])
    console.log(miObjeto.peso)
    // NO conozco el nombre de la prop:
    console.log(miObjeto[propiedad])
}



muestraPeso(miObjeto, propiedad)

miObjeto[propiedad]