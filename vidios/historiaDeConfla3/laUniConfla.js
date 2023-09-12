// En el curso de Confla se rompió el sistema de registro de asistencias y durante los proximos
//  30 dias no se podran hacer registro de datos de ningun tipo, por ende las clases no comenzaran
//  hasta estar solucionado. 19 ALUMNOS.

//  - CREAR MINISISTEMA QUE NOS PERMITA REGISTRAR LOS ALUMNOS QUE ESTAN PRESENTES (P)
//  y ausentes (A) en clase.

//  - Pasados los 30 dias mostrar la situacion final de todos los alumnos (Nro total de
//     presentes y ausentes)

// - se puede tener un maximo de 10%  de ausencias por semestre, si se tienen mas aclarar
// que esta reprobado


let cant = prompt('cuantos alumnos son?')
let alumnosTotales = []

for (i = 0; i < cant; i++) {
    alumnosTotales[i] = [prompt('Nombre del alumno ' + (i+1)),0]
}

const tomarAsistencia = (nombre, p) => {
    let presencia = prompt(nombre)
    if (presencia == 'p' || presencia == 'P') {
        alumnosTotales[p][1]++;
    }   
}

for (i = 0; i < 30; i++) {
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0],alumno)
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ________Asistencias: ${alumnosTotales[alumno][1]} <br>
    ________Ausencias: ${30 - alumnosTotales[alumno][1]}`
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>"
    } else {
        resultado+= "<br><br>"
    }
    document.write(resultado)       
}

