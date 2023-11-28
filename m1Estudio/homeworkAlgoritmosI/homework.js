function factorear(num){
    //Factorear el numero recibido como parametro y devolver en un array
    //los factores por los cuales se va dividiendo a dicho numero (de menor a mayor)
    //ej: factorear(180) --> [1, 2, 2, 3, 3, 5] ya que 1x2x2x3x3x5 = 180 y son todos
    //numeros primos
    // 180 / 2 R=0
    // 90 / 2 R=0
    // 45 / 3 R=0
    // 15 / 3 R=0
    // 5 / 5 R=0
    // 1
    let array = [1] 
    let i = 2
    while(num !== 1){
        if(num % i === 0){
            num = num / i
            array.push(i)
        } else {
            i++
            // i = i +1
        }
    }
    return array
}


function bubbleSort(array){
    //Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    //el array recibido como parametro
    //devolver el array ordenado resultante
    let swap = true //swap indica si hicimos un cambio
    while(swap){
        swap = false
        for(let i = 0; i < array.length - 1; i++){
            if(array[i] > array[i+1]){
                let aux = array[i]
                array[i] = array[i+1]
                array[i+1] = aux
                swap = true
            }
        }
    }
    return array
}

function insertionSort(array){
    //Implementar el método conocido como insertionSort para ordenar de menor a mayor el array recibido como parametro
    //usando arreglos devolver el array ordenado resultante
    for(let i = 1; i < array.length; i++){
        let j = i -1
        let aux = array[i]
        while(j >= 0 && aux < array[j]){
            array[j+1] = array[j]
            j--
        }
        array[j+1] = aux
    }
    return array
}

function selectionSort(array){
    //Implementar el método conocido como selectionSort para ordenar de menor a mayoir
    //el array recibido como parametro utilizando dos arreglos
    //devolver el array ordenado resultante
    for(let i = 0; i < array.length - 1; i++){
        let min = i
        for(let j = i+1; j < array.length; j++){
            if(array[j] < array[min]){
                min = j
            }
        }
        if(i !== min){
        let aux = array[i]
        array[i] = array[min]
        array[min] = aux
        }
    }
    return array
}