// CREAR UN SISTEMA PARA MOSTRARLE A COFLA  LAS PARTICULARIDADES 
// DE LOS 3 CELULARES.

// CADA CELULAR DEBE TENER UN COLOR, PESO, RESOLUCION PANTALLA ,RESOLUCION DE CAMARA Y MEMORIA RAM

// CADA CELULAR DEBE PODER PRENDER, REINICIAR, APAGAR, TOMAR FOTOS Y GRABAR 


class Celulares {
    constructor(color, peso, rdp, rdc, ram) {
        this.color = color
        this.peso = peso
        this.rdp = rdp
        this.rdc = rdc
        this.ram = ram
        this.encendido = false
    }
    presionarBotonEncendido() {
        if (this.encendido == false) {
            alert('Celular prendido')
            this.encendido = true
        }
        else {
            alert('celular apagado')
        }
    }
    reiniciar() {
        if (this.encendido == true) {
            alert('reiniciando celular')
        }
        else {
            alert('celular apagago')
        }
    }
    tomarFotos() {
        alert(`foto tomada en una resolución de: ${this.rdc}`)
    }
    grabarVideo() {
        alert(`grabando video en ${this.rdc}`)
    }
    mobileInfo() {
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Resolución de Pantalla: <b>${this.rdp}</b><br>
        Resolución de Cámara: <b>${this.rdc}</b><br>
        Memoria Ram: <b>${this.ram}</b><br>
        `
    }
}


// celular1 = new Celulares('rojo', '150gr', "5'", '18mp', '2GB')
// celular2 = new Celulares('azul', '143gr', "6.2'", '24mp', '4GB')
// celular3 = new Celulares('verde', '200gr', "5.2'", '8mp', '2GB')



// celular1.tomarFotos()





// HACER UN SISTEMA QUE IMPLEMENTE TODO ESTO EN ALTA GAMA
// PUEDE: GRABAR EN CAMARA SUPER LENTA, TIENE RECONOCIMIENTO FACIAL Y UNA CAMARA EXTRA


class CelularAltaGama extends Celulares {
    constructor(color, peso, rdp, rdc, ram, rdce) {
        super(color, peso, rdp, rdc, ram)
        this.resolucionDeCamaraExtra = rdce
    }
    grabarVideoLento() {
        alert('estás grabando en camara lenta')
    }
    reconomientoFacil() {
        alert('vamos a iniciar reconocimiento facial')
    }
    infoAltaGama() {
        return this.mobileInfo() + `Resolución de cámara Extra: ${this.resolucionDeCamaraExtra}<br>`
    }
}


celular1 = new CelularAltaGama('rojo', '130g', '5.2', '4K', '4GB', 'FULL HD')
celular2 = new CelularAltaGama('verde', '120', '5.3', '4K', '6GB', 'HD')

document.write(`
        ${celular1.infoAltaGama()}<br> 
        ${celular2.infoAltaGama()}<br> 
        `)


        