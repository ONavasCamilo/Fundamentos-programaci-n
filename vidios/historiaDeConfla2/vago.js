// Un vago muy afortunado logró ganar el primer premio de la loteria, al que cofla le dio
//  una mano, para celebrar hizo una fiesta y decidio solo dejar entrar a los mayores de 
//  edad, entre otras cosas:

//  - dejar pasar SOLO a los mayores de edad 
//  - la PRIMER persona que entre DESPUES DE LAS 2AM, NO paga


let free = false

const validarCliente = (time) =>{
    let edad = prompt('cual es tu edad?')
    if (edad > 18){
        if(time >= 2 && time < 7 && free == false){
            alert('puedes pasar gratis porque eres la primera persona despues de las 2am')
            free = true
        }else {
            alert(`son las ${time}:00HS y puedes pasar pero pagando entrada`)
        }
    } else {
        alert('mira papu sos menor no entras')
    }
}

validarCliente(10)
validarCliente(2)
validarCliente(4)