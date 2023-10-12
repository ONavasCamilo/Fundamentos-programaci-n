let pagina = 1
const btnAnterior = document.querySelector('#btnAnterior')
const btnSiguiente = document.querySelector('#btnSiguiente')

btnSiguiente.addEventListener('click', () =>{
    if(pagina < 1000){

        pagina+= 1
        cargarPeliculas()
    }
})

btnAnterior.addEventListener('click', ()=>{
    if(pagina > 1){
        pagina -= 1
        cargarPeliculas()
    }
})

const cargarPeliculas = async () =>{
    try {

        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=47ab58d081a5e6323eb2a7ac848d8a85&language=es-ES&page=${pagina}`)
        
        // console.log(respuesta)
        
        if(respuesta.status === 200){
            const datos = await respuesta.json()

            let peliculas = ''
            datos.results.forEach(pelicula => {
                peliculas+=  `
                <div class='pelicula'>
                <img class='poster' src='https://image.tmdb.org/t/p/w500/${pelicula.poster_path}
                '>
                <h3 class='titulo'>${pelicula.title}</h3>
                </div>
                `
            });

            document.getElementById('contenedor').innerHTML = peliculas
        } else if(respuesta.status === 401){
            console.log('Error 401, no tienes acceso mira tu key padre')
        } else if(respuesta.status === 404){
            console.log('Error 404 padre, pelicula no existente URL mal puesta alguna mamada de esas')
        } else{
            console.log('Hubo un error y no soy senior aun investigue we')
        }

    } catch (err){
        console.log(err)
    }
}

cargarPeliculas()