const mazo = [4, 2, 6, 1, 9, 3];

function BubbleSort(mzt = []) {
  let revisar = true;
  while (revisar) {
    revisar = false
    for (let i = 0; i < mzt.length; i++) {
      let izq = mzt[i];
      let der = mzt[i + 1];
      if (izq > der) {
        revisar = true;
        mzt[i] = der;
        mzt[i + 1] = izq;
      }
    }
  }
  return mzt
}

const mazos = [4, 2, 6, 1, 9, 3];

for (let i = mazos.length - 1; i >= 0; i--) {
    console.log(mazo[i]);
}

// Insertion

function insertionSort(array){
  for(let i = 1; i < array.length; i++){
    let sacarPelota = array[i]
    let lugarEnElQueEstamos = i
    let posicionAnterior = lugarEnElQueEstamos - 1
    
    while(posicionAnterior >= 0 && array[posicionAnterior] > sacarPelota){
      array[lugarEnElQueEstamos] = array[posicionAnterior]
      lugarEnElQueEstamos = posicionAnterior
      posicionAnterior = lugarEnElQueEstamos - 1
    }
    array[lugarEnElQueEstamos] = sacarPelota
  }
  console.log('El array está ordenado de la siguiente manera', array)
  return array
}

let arraysito = [5,4,3,6,2,1]
insertionSort(arraysito)
