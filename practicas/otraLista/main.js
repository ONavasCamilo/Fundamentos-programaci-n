import { $areaDeTrabajo, $sidebarProyectos, $sidebarBtn, $sidebarInput } from "./const.js"

const d = document

document.addEventListener('DOMContentLoaded', () => {
 $areaDeTrabajo.addEventListener('click', () => {
 
 })

 $sidebarBtn.addEventListener('click', () => {
 $sidebarProyectos.innerHTML += `
 <div class="sidebar__proyecto">
 <span>${$sidebarInput.value}</span>
</div>
 `
 })
})