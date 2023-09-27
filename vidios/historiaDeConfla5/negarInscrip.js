let materias = {
    fisica: ['Dalto', 'pedro', 'pepito', 'cofla', 'maria'],
    programacion: ['Hnery', 'pedro', 'juan', 'pepito'],
    logica: ['Perez', 'pedro', 'juan', 'pepito', 'cofla', 'maria'],
    quimica: ['Alfonso', 'pedro', 'juan', 'pepito', 'cofla', 'maria']
}

const inscribir = (alumno, materia) => {
    alumnos = materias[materia]
    if (alumnos.length >= 21) {
        document.write(`Lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya están llenas`)
    } else {
        alumnos.push(alumno)
        if (materia == 'fisica') {
            materias = {
                fisica: alumnos,
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: materias['quimica']
            }
        }
        else if (materia == 'programacion') {
            materias = {
                fisica: materias['fisica'],
                programacion: alumnos,
                logica: materias['logica'],
                quimica: materias['quimica']
            }
        } else if (materia == 'logica') {
            materias = {
                fisica: materias['fisica'],
                programacion: materia['programacion'],
                logica: alumnos,
                quimica: materias['quimica']
            }
        } else if (materia == 'quimica') {
            materias = {
                fisica: materias['fisica'],
                programacion: materia['programacion'],
                logica: materias['logica'],
                quimica: alumnos
            }
        }
        document.write(`Felicidades ${alumno}, te has inscrito a ${materia} de forma correcta<br>`)
    }
}

document.write(materias['fisica'] + '<br>')

inscribir('pedrito', 'fisica')
inscribir('pedrito', 'fisica')
inscribir('pedrito', 'fisica')
inscribir('pedrito', 'fisica')
inscribir('pedrito', 'fisica')
inscribir('pedrito', 'fisica')
inscribir('pedrito', 'fisica')
inscribir('pedrito', 'fisica')
inscribir('pedrito', 'fisica')
inscribir('pedrito', 'fisica')
inscribir('pedrito', 'fisica')
inscribir('pedrito', 'fisica')
inscribir('pedrito', 'fisica')
inscribir('andriu', 'fisica')
inscribir('alberto', 'fisica')
inscribir('carlos', 'fisica')
inscribir('ferlon', 'fisica')
inscribir('merlon', 'fisica')
inscribir('luis', 'fisica')
inscribir('andres', 'fisica')
inscribir('fernan', 'fisica')
inscribir('camgrejo', 'fisica')
inscribir('fantonio', 'fisica')
inscribir('federico', 'fisica')
inscribir('ferlon', 'fisica')
inscribir('merlon', 'fisica')
inscribir('luis', 'fisica')
inscribir('andres', 'fisica')
inscribir('fernan', 'fisica')
inscribir('camgrejo', 'fisica')
inscribir('fantonio', 'fisica')
inscribir('federico', 'fisica')

document.write('<br>' + materias['fisica'])
