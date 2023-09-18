class Calculadora {
    sumar(num1, num2) {
        return parseInt(num1) + parseInt(num2)
    }

    restar(num1, num2) {
        return parseInt(num1) - parseInt(num2)
    }

    dividir(num1, num2) {
        return parseInt(num1) / parseInt(num2)
    }

    multiplicar(num1, num2) {
        return parseInt(num1) * parseInt(num2)
    }
    potenciar(num, exp) {
        let numero = num
        for (let i = 1; i < exp; i++) {
            numero = numero * num
        }
        return numero  
        // alternativa solo poner return num**exp
    }
    raizCuadrada(num){
        return Math.sqrt(num)
    }
    raizCubica(num){
        return Math.cbrt(num)
    }
}

const calculadora = new Calculadora()

alert('Qué operacion deseas realizar?')
operacion = prompt('1: suma,  2: resta, 3: dividir, 4: multiplicar, 5: potenciacion, 6: raiz, 7: raiz cubica')

if (operacion == 1) {
    let numero1 = prompt('Primer numero para sumar')
    let numero2 = prompt('segundo numero para sumar')
    resultado = calculadora.sumar(numero1, numero2)
    alert(`tu resultado es ${resultado}`)
}
else if (operacion == 2) {
    let numero1 = prompt('Primer numero para restar')
    let numero2 = prompt('segundo numero para restar')
    resultado = calculadora.restar(numero1, numero2)
    alert(`tu resultado es ${resultado}`)
}
else if (operacion == 3) {
    let numero1 = prompt('Primer numero para dividir')
    let numero2 = prompt('segundo numero para dividir')
    resultado = calculadora.dividir(numero1, numero2)
    alert(`tu resultado es ${resultado}`)
}
else if (operacion == 4) {
    let numero1 = prompt('Primer numero para multiplicar')
    let numero2 = prompt('segundo numero para multiplicar')
    resultado = calculadora.multiplicar(numero1, numero2)
    alert(`tu resultado es ${resultado}`)
}
else if (operacion == 5) {
    let numero1 = prompt('numero a potenciar')
    let numero2 = prompt('exponente')
    resultado = calculadora.potenciar(numero1, numero2)
    alert(`tu resultado es ${resultado}`)
}
else if (operacion == 6) {
    let numero1 = prompt('conocer la raiz cuadrada de: ')
    resultado = calculadora.raizCuadrada(numero1)
    alert(`tu resultado es ${resultado}`)
}
else if (operacion == 7) {
    let numero1 = prompt('conocer la raiz cubo:')
    resultado = calculadora.raizCubica(numero1)
    alert(`tu resultado es ${resultado}`)
}
else {
    alert('no se ha encontrado la operacion')
}


// CREAR UNA FUNCION QUE AL PASARLE COMO PARAMETRO LA MATERIA NOS DEVUELVA: 
// PROFESOR ASIGNADO ,  EL NOMBRE DE TODOS LOS ALUMNOS 


// CREAR FUNCION QUE NOS DIGA EN CUANTAS CLASES ESTA COFLA
// NOMBRAR LAS CLASES EN LAS QUE ESTA Y LOS PROFESORES  DE CADA UNA