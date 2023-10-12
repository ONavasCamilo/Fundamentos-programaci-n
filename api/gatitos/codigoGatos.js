

const URL = 'https://api.thecatapi.com/v1/images/search?limit=10'


fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector('img')
        img.src = data[0].url
    })


const cambio = () => {
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector('img')
        img.src = data[0].url
    })
    
}
const boton = document.querySelector('#boton')

boton.addEventListener('click', cambio)

// fetch(URL)
//     .then((response)=> response.json())
//     .then((data)=>{
//         const imageContainer = document.getElementById('image-container')
//             data.forEach(catImage => {
//                 const img = document.createElement('img')
//                 img.src = catImage.url
//                 imageContainer.appendChild(img)
//             });
//         });
//     .catch((err) => console.log('Error:', err))