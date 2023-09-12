let z

for(let i = 0; i < 10; i++){
    z = aleatorio(10, 20)
    document.write(z + ',')

}

function aleatorio(min, maxi) {
    let resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min
    return resultado
}