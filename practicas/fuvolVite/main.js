const urlFuvol = 'https://api-football-standings.azharimm.dev/leagues'
let d = document

const $id = id => {
    let element = d.getElementById(id)
    return element
}

fetch(urlFuvol)
.then(res => res.json())
.then(data => {
    // const logoLiga = $id('logo__liga')
    // logoLiga.src = data.data[0].logos.dark

    let infoLigas = ''
    data.data.forEach(info => {
        infoLigas += `
        <a class="cont-ligas__enlace" href="liga.html?league=${info.id}"><div class="cont-ligas__cont">
        <p class="cont-ligas__name">${info.name}</p>
            <img class="cont-ligas__logo" src="${info.logos.dark}">
        </div>
        </a>
            `
    })
    $id('section__ligas').innerHTML = infoLigas
})
.catch(err => console.error('Error al obtener los datos:', err))


