import { $areaDeTrabajo, $sidebarProyectos, $sidebarBtn, $sidebarInput, $contenidoPrincipal } from "./const.js"

const carpetas = []

let cont = 0

document.addEventListener('DOMContentLoaded', () => {
 $areaDeTrabajo.addEventListener('click', () => {
 
 })

 $sidebarBtn.addEventListener('click', () => {
 if($sidebarInput.value.length === 0) return
 cont++
 $sidebarProyectos.innerHTML += `
 <div id="${cont}" class="sidebar__proyecto">
 <span class="sidebar__proyecto-valor">${$sidebarInput.value}</span>
 </div>
 `
 const carpeta = {
    id: cont,
    name: $sidebarInput.value,
    items: []
 }
  carpetas.push(carpeta)

 $contenidoPrincipal.innerHTML = `
 <div class="principal__cont-nombre">
 <span>${$sidebarInput.value}</span>
 </div>
 `
 $sidebarInput.value = ''
 })
 $sidebarProyectos.addEventListener('click', (e) => {
     const carpetaClick = carpetas.find(c => c.id === parseInt(e.target.id))
     console.log(carpetaClick.id)
})
})