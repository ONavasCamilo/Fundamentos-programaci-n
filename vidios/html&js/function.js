// let num1=5
// let num2=10

// function sumar(){
//     let res = num1+num2
//    document.write(`el valor interno de ${num1} más ${num2} es de ${res}`)
// }

// sumar(num1,num2)

function muestraOpcion() {
    
    let opciones = document.getElementsByName("eleccion")

    for (let i = 0; i < opciones.length; i++) {
        console.log(opciones[i])
        if(opciones[i].checked){
            alert(opciones[i].value)
        }
    }

}



