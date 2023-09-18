// CREAR UNA FUNCION QUE AL PASARLE COMO PARAMETRO LA MATERIA NOS DEVUELVA: 
// PROFESOR ASIGNADO ,  EL NOMBRE DE TODOS LOS ALUMNOS 

const obtenerInformacion = (materia) => {
    materias = {
        fisica: ['Dalto', 'pedro', 'pepito', 'cofla', 'maria'],
        programacion: ['Hnery', 'pedro', 'juan', 'pepito'],
        logica: ['Perez', 'pedro', 'juan', 'pepito', 'cofla', 'maria'],
        quimica: ['Alfonso', 'pedro', 'juan', 'pepito', 'cofla', 'maria']
    }
    if (materias[materia] !== undefined) {
        return [materias[materia], materia, materias]
    } else {
        return materias
    }
}
const mostrarInformacion = (materia) => {
    let informacion = obtenerInformacion(materia)

    if (informacion !== false) {
        let profesor = informacion[0][0]
        alumnos = informacion[0]
        alumnos.shift()
        // document.write(`alumnos presentes en <b>${informacion[1]}</b>: <b style='color: red'>${informacion[0]}</b><br>`)
        document.write(`El profesor de <b>${informacion[1]}</b> es: <b style='color red'>${profesor}</b><br>
    los alumnos son: <b style='color:blue'>${alumnos}</b><br><br>
    `)
    }
}




// CREAR FUNCION QUE NOS DIGA EN CUANTAS CLASES ESTA COFLA


const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion()
    let clasesPresentes = []
    let cantidadTotal = 0
    for(info in informacion){
        if (informacion[info].includes(alumno)){
            cantidadTotal++
            clasesPresentes.push(' ' + info)
        }
    }
    return `<b style='color:blue'>
    ${alumno}</b> está en <b>${cantidadTotal} clases</b>: <b style='color:green'>${clasesPresentes}
     </b><br><br>`
}

mostrarInformacion('fisica')
mostrarInformacion('quimica')
mostrarInformacion('programacion')
mostrarInformacion('logica')

document.write(cantidadDeClases('cofla'))
document.write(cantidadDeClases('maria'))


// CREAR UNA FUNCION PARA PREGUNTARLE A COFLA EN QUE MATERIA SE QUIERE INSCRIBIR
// SI YA HAY 20 ALUMNOS ANOTADOS EN LA MATERIA NEGARLE LA INSCRIPCION
// SI HAY MENOS DE 20 ALUMNOS INSCRIBIR A COFLA Y AÑADIRLO A LA LISTA DE ALUMNOS

