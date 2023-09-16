class App{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas
        this.puntuacion = puntuacion
        this.peso = peso
        this.iniciada = false
        this.instalada = false
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true
            alert('app instalada correctamente')
        }
    }
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false
            alert('app desinstalada correctamente')
        }
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true
            alert('app iniciada')
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false
            alert('app cerrada')
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuación: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        `
    }
}

tinder = new App('3564', '4.7', '530mb')
facebo = new App('32364', '4.5', '830mb')
instagra = new App('13564', '5', '130mb')
tuite = new App('6564', '2.5', '330mb')
redit = new App('564', '3.5', '130mb')
tuich = new App('25364', '4.0', '30mb')
yutu = new App('155564', '4.8', '1GB')

document.write(`
${tinder.appInfo()} <br>
${facebo.appInfo()} <br>
${instagra.appInfo()} <br>
${tuite.appInfo()} <br>
${redit.appInfo()} <br>
${tuich.appInfo()} <br>
${yutu.appInfo()} <br>
`)


// tinder.instalar()
// tinder.abrir()
// tinder.cerrar()
// tinder.desinstalar()