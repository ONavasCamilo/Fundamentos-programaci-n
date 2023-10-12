const toNumber = (n) => Number(n)
const multiply = (n) => {
    console.log('multiply', n)
    if (n > 10) throw new Error('error')
    return n * 2
}

const print = (n) => console.log(n)

// const thenFn = (n) => {
//     let number = toNumber(n)
//     number = multiply(number)
//     print(number)
// }

const thenAlt = (n) => console.log(n)

const catchAndPrint = (err) => {
    console.log(err)
}

const request = url => {
    return new Promise((resolve, reject) => {

        const req = new XMLHttpRequest()
        req.open('GET', url)

        req.onload = () => {
            if (req.status === 200) {
                resolve(req.responseText)
            } else {
                reject(new Error("Error al cargar"))
            }
        }

        req.onerror = () => {
            reject(new Error("Error de red"))
        }

        req.send()

    })
}

const prom = async () => {
    
}


const call = async (url) => {
    let response, response2

    try {
        response = await request(url)
    } catch (error) {
        catchAndPrint(error)
        response = 7
    }

    try {

        response2 = await request(url)
    } catch (error) {
        catchAndPrint(error)
        response2 = 8
    }

    const n1 = toNumber(response)
    const n2 = toNumber(response2)

    print(n1 * n2)

}

call('./numero2.txt')


// request('./numero2.txt')
// .then(toNumber)
// .then(multiply)
// .then(print)
// .catch(catchAndPrint)


// request("http://meloinventomucho.com/a.txt")
// .then(toNumber)
// .then(multiply)
// .then(print)




new Promise((resolve, reject) => {
    resolve(5)
    reject(new Error())
})