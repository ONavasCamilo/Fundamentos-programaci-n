function contarNum(num){
    let arr = num.toString().split('')
    let contador = 0
    for(let i = 0; i < arr.length ; i++)
    contador +=1
console.log(contador)
}

contarNum(1234)  


function mayorMenorOIguales(a,b){
    if(a <= 0 || b <= 0){
        console.log('Solo aceptamos números mayores a 0')
    }
    else if(a < b){
        console.log(a + ' es menor a ' + b) 
    }
    else if(a > b){
        console.log(a + ' es mayor a ' + b)
    }
    else if(a === b){
        console.log(a +' y '+ b +' son iguales.' )
    }
    
    else{
        console.log('Solo aceptamos números')
    }
}

mayorMenorOIguales('s','s')


