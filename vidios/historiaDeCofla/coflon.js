// Ellos quieren comprar el helado mas caro que puedasn con la plata q tienen, asi que veamos como
// podemos ayudarlos.

// roberto tiene 1.5usd
// pedro tiene 1.7usd
// cofla tiene 3usd

// los precios de helados son los siguientes:

// palito de helado de agua: 0.6usd
// palito de helado de crema 1usd
// bombon helado marca heladix: 1.6usd
// bombon helado marca heladovich 1.7usd
// bombon helado marca helardo: 1.8usd
// potecito de helado con confites: 2.9usd
// pote de 1/4 KG 2.9usd

// soluciones:
// 1. pedirles que ingresen el monto que tienen y mostrarles el helado mas caro que pueden comprar
// 2. si hay  2 o mas con el mismo precio, mostrar ambos
// 3. cofla quiere saber cuanto es el vuelto


dineroCofla = prompt('cuanto dinero tienes cofla?')
dineroRoberto = prompt('cuanto dinero tienes roberto?')
dineroPedro = prompt('cuanto dinero tienes Pedro?')

dineroCofla = parseInt(dineroCofla)

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert('cofla, compra el helado de agua')
    alert('y te sobran ' + (dineroCofla - 0.6))
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert('cofla, compra el helado de crema')
    alert('y te sobran ' + (dineroCofla - 1))

}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert('cofla, compra el de heladix')
    alert('y te sobran ' + (dineroCofla - 1.6))
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert('cofla, compra el de heladovich')
    alert('y te sobran ' + (dineroCofla - 1.7))
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert('cofla, compra el de helardo')
    alert('y te sobran ' + (dineroCofla - 1.8))

}
else if (dineroCofla >= 2.9) {
    alert('coflon, puedes comprar el de confites o el pote de 1/4 KG')
    alert('y te sobran ' + (dineroCofla - 2.9))
}
else {
    alert('cofla no puedes comprar nada puto pobre')
}

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert('Roberto, puedes comprarte un helado de agua jajaja')
    alert('y te sobran ' + (dineroRoberto - 0.6))

}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert('Roberto, puedes comprarte el helado de crema fñanfmewnf')
    alert('y te sobran ' + (dineroRoberto - 1))

}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert('comprate el heladix robertin')
    alert('y te sobran ' + (dineroRoberto - 1.6))

}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert('roberto el del compra heladovich')
    alert('y te sobran ' + (dineroRoberto - 1.7))
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert('roberto comprate un helardo')
    alert('y te sobran ' + (dineroRoberto - 1.8))

}
else if (dineroRoberto >= 2.9) {
    alert('comprate el de confites o el poteson de 1/4 KG roberto;)')
    alert('y te sobran ' + (dineroRoberto - 2.9))

}
else {
    alert('alberto sos un pobre no te puedes comprar nd')
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert('pdro, puedes comprarte un helado de agua jajaja')
    alert('y te sobran ' + (dineroPedro - 0.6))
}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert('pedro, puedes comprarte el helado de crema fñanfmewnf')
    alert('y te sobran ' + (dineroPedro - 1))
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert('comprate el heladix pedro')
    alert('y te sobran ' + (dineroPedro - 1.6))
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert('pedro el del compra heladovich')
    alert('y te sobran ' + (dineroPedro - 1.7))
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert('pedro comprate un helardo')
    alert('y te sobran ' + (dineroPedro - 1.8))
}
else if (dineroPedro >= 2.9) {
    alert('comprate el de confites o el poteson de 1/4 KG pedro;)')
    alert('y te sobran ' + (dineroPedro - 2.9))
}
else {
    alert('pedrin sos un pobre no te puedes comprar nd')
}



// FORMA MENOS RECURSOS

// const definirCompra = (n) => {
//     let din = prompt(`Dinero de ${n}`)
//     if (din >= 0.6 && din < 1) return (`${n}: helado de agua`)
//     if (din >= 1 && din < 1.6) return (`${n}: helado de crema`)
//     if (din >= 1.6 && din < 1.7) return (`${n}: helado de heladix`)
//     if (din >= 1.7 && din < 1.8) return (`${n}: helado de helavich`)
//     if (din >= 1.8 && din < 2.9) return (`${n}: helado de helardo`)
//     if (din >= 2.9) return (`${n}: helado de confites o el pote de 1/4KG`)
//     else return (`${n}: no te alcanza pa nada`)
// }

// console.log(definirCompra('Cofla'))
// console.log(definirCompra('Pedro'))
// console.log(definirCompra('Roberto'))
