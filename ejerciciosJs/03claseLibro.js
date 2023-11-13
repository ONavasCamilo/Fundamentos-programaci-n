// Para este ejercicio deberás definir una clase Libro con sus propiedades y metodos

//las propiedades de la clase libro son:  titulo, autor, traducciones 


// el constructor de la clase recibe esos tres datos por parametro.
// los metodos son:

// getTitulo, permite obtener el titulo del libro
// getAutor,  permite obtener el autor del libro
// getTraducciones,  retorna un arreglo con todos los idiomas de las traducciones 
// addTraduccion   a partir de los parametros recibidos, agrega un objeto al arreglo 
// de traducciones



class Libro {
    constructor(titulo, autor, traducciones){
        this.titulo = titulo
        this.autor = autor
        this.traducciones = traducciones
    }
}




class Libro {
    constructor(titulo, autor, traducciones) {
        this.titulo = titulo;
        this.autor = autor;
        this.traducciones = traducciones;
    }

    getTitulo() {
        console.log(`El nombre de esta gran obra de arte es: ${this.titulo}`)    
    }

    getAutor() {
        return this.autor
    }

    getTraducciones() {

    }

    addTraduccion() {
        
    }
}

const lluviaDePerros = new Libro('lluvia de los perros mas lindos del planeta', 'canino fernandez', ['ingles', 'frances', 'españolete', 'turco', 'ebreo', 'crackero'])

        const cocinaConAntonio = {
            titulo: 'cocinando con antonio',
            autor: 'antonio de la paz',
            traducciones: ['ingles', 'italiano', 'romano', 'españolin', 'aleman de la india rosada']
        }


cocinaConAntonio.getTitulo()    
