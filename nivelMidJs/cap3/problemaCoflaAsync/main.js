const $id = (id) => document.querySelector(id)

const materiasHTML = $id('.materias')

const materias = [
    {
        nombre: 'Fisica 1',
        nota: 7
    },
    {
        nombre: 'bases de datos 3',
        nota: 9
    },
    {
        nombre: 'calculo 6',
        nota: 9
    },
    {
        nombre: 'matematicas discretas 2',
        nota: 10
    },
    {
        nombre: 'javascript avanzado',
        nota: 10
    }
]

const obtenerMateria = (id) => {
    return new Promise((resolve, reject) =>{
        materia = materias[id]
        if (materia == undefined) reject('La materia no existe')
        else setTimeout(()=>{resolve(materia)},Math.random()*1400)
    })
}

// obtenerMateria(1)
// .then(res => console.log(res))

const devolverMaterias = async () => {
    let materia = []
    for (let i = 0; i < materias.length ; i++){
        materia[i] = await obtenerMateria(i)
        let newHTMLCode = `
        <div class="materia">
        <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>
        `
        materiasHTML.innerHTML += newHTMLCode
    }
}

devolverMaterias()