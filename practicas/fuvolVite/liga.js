document.addEventListener('DOMContentLoaded', () => {
    // Obtener el parámetro de consulta "league" de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const leagueId = urlParams.get('league');

    // Lógica para cargar información específica de la liga usando el identificador único
    fetch(`https://api-football-standings.azharimm.dev/leagues/${leagueId}/standings?season=2023&sort=asc`)
        .then(res => res.json())
        .then(data => {
            let infoEquipos = ''
            data.data.standings.forEach(teamInfo => {
                const team = teamInfo.team
                infoEquipos += `
                <div class="cont-equipos__cont">
        <p class="cont-equipos__name">${team.name}</p>
            <img class="cont-equipos__logo" src="${team.logos[0].href}">
        </div>`
            })
            document.getElementById('section__equipos').innerHTML = infoEquipos
        })
        .catch(err => console.error('Error al obtener los datos de los equipos:', err));
});
