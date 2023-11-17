arrWally = ['Albert', 'Einsten', 'Arturito', 'Wally', 'Matip', 'Messi']
//hacer funcion que encuentre a Wally y el index

function encontrarAWally(arr) {
 let encontrado = ''
 for(let i = 0; i < arr.length; i++){
    if(arr[i] === 'Wally') encontrado = `Wally encontrado en la posicion ${i}`
 }
 return encontrado
}

console.log(encontrarAWally(arrWally))