// let materias = {
//     fisica: [90, 6, 3, 'fisica'],
//     matematica: [89, 7, 4, 'matematica'],
//     logica: [90, 9, 3, 'logica'],
//     quimica: [86, 8, 4, 'quimica'],
//     calculo: [80, 6, 3, 'calculo'],
//     programacion: [79, 7, 2, 'programacion'],
//     biologia: [87, 10, 3, 'biologia'],
//     bbdd: [100, 8, 4, 'fisica'],
//     algebra: [100, 6, 4, 'algebra']
// }

// const aprobo = () => {

//     for (materia in materias) {

//         let asistencias = materias[materia][0]
//         let promedio = materias[materia][1]
//         let trabajos = materias[materia][2]

//         console.log(materias[materia][3])

//         if (asistencias >= 90) {
//             console.log('%cAprobado', 'color: green')
//         }
//         else {
//             console.log('%cDesaprobado', 'color: red')
//         }
//         if (promedio >= 7){
//             console.log('%c    Promedio en orden', 'color: green')
//         }else{
//             console.log('%c   Promedio desaprobado', 'color: red')
//         }
//         if (trabajos >= 3){
//             console.log('%c     Trabajos practicos en orden', 'color: green')
//         }else{
//             console.log('%c       Trabajos practicos desaprobados', 'color: red')
//         }
//     }
// }

// aprobo()



// organizar las actividades diariamente
// utilizar la consola para organizar todo
// el tiempo por tarea no debe superar las 4 horas



let tp = '100 minutos de trabajos practicos'
let estudio = '100 minutos de estudio'
let trabajo = '240 minutos de trabajo'
let homework = '30 minutos de cosas de la casa'
let descanso = '10 minutos de descanso'


console.log('TAREAS')

//  console.group('dia 1')
//  console.log(trabajo)
//  console.log(descanso)
//  console.log(estudio)
//  console.log(tp)
//  console.log(homework)

for (var i = 0; i < 14; i++) {
    if (i == 0) {
        console.group('semana 1')
    }
    console.groupCollapsed('dia ' + (i + 1))
    console.log(trabajo)
    console.log(descanso)
    console.log(estudio)
    console.log(tp)
    console.log(homework)
    console.groupEnd()
    if (i == 7) {
        console.groupEnd()
        console.groupCollapsed('semana 2')
       }
}

console.groupEnd()
console.groupEnd()