// cofla feliz de volver a clase y ya tiene tarea basica de calculo; tiene que 
// hacer un par de ejercicios de matematicas que incluyen suma, resta, division y multiplicacion
// realizaresto con una calculadora puede ser mucho mas efectivo

// - CREAR CALCULADORA QUE NOS SIMPLIFIQUE EL TRABAJO


const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2)
}

const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2)
}

const dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2)
}

const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2)
}


alert('Qué operacion deseas realizar?')
operacion = prompt('1: suma,  2: resta, 3: dividir, 4: multiplicar')

if (operacion == 1) {
    let numero1 = prompt('Primer numero para sumar')
    let numero2 = prompt('segundo numero para sumar')
    resultado = sumar(numero1, numero2)
    alert(`tu resultado es ${resultado}`)
}
else if (operacion == 2) {
    let numero1 = prompt('Primer numero para restar')
    let numero2 = prompt('segundo numero para restar')
    resultado = restar(numero1, numero2)
    alert(`tu resultado es ${resultado}`)
}
else if (operacion == 3) {
    let numero1 = prompt('Primer numero para dividir')
    let numero2 = prompt('segundo numero para dividir')
    resultado = dividir(numero1, numero2)
    alert(`tu resultado es ${resultado}`)
}
else if (operacion == 4) {
    let numero1 = prompt('Primer numero para multiplicar')
    let numero2 = prompt('segundo numero para multiplicar')
    resultado = multiplicar(numero1, numero2)
    alert(`tu resultado es ${resultado}`)
}
else {
    alert('no se ha encontrado la operacion')
}