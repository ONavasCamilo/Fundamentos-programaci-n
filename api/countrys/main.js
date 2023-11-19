// const URLcol = 'https://restcountries.com/v3.1/alpha/coal'
const URLpaises = 'https://restcountries.com/v3.1/all'

// fetch(URLcol)
// .then(res => res.json())
// .then(data =>{
//     // console.log(data)
//         if(data.status === 400) throw new Error(data.message)
//      console.log(data) 
//   const banderaCol = document.getElementById('bandera__col')
//   banderaCol.src = data[0].flags.png
// })
// .catch(err => console.log(err, 'error 400'))



fetch(URLpaises)
.then(res => res.json())
.then(data => {
    
    // bandera.textContent = data[0].name.common
    // bandera.textContent = data[0].capital
    let paises = ''
    data.forEach(pais => {
        // const nombrePais = document.createElement('p')
        // const nombreCapital = document.createElement('span')
        // const bandera = document.createElement('img')
        
        // nombrePais.innerHTML = pais.name.common
        // nombreCapital.innerHTML = ' > ' + pais.capital
        // bandera.src = pais.flags.png
        paises += `
        <p class="nombre__pais">${pais.name.common} 
        <span class="capital__pais">${pais.capital}
        </span>
        </p>
        <img src="${pais.flags.png}" alt="" class="bandera__pais">
        `
    }); 
     document.getElementById('banderas__paises').innerHTML  = paises
})


