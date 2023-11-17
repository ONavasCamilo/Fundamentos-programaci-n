const gatitos = document.querySelector('.gatitos')
const urlGatito = 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRoT6NNDUONDQmlthWrqIi_frTjsjQT4UZtsJsuxqxLiaFGNl5s3_pBIVxS6-VsFUP_'

const alerta = ()=>{
    const img = document.createElement('img')
    img.src = urlGatito
    img.className = 'gatoAleat'
    gatitos.insertAdjacentElement('afterend', img)
}

gatitos.addEventListener('click', alerta)