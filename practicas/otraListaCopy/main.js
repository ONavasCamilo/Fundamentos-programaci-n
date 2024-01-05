import {
  $areaDeTrabajo,
  $sidebarProyectos,
  $sidebarBtn,
  $sidebarInput,
  $contenidoPrincipal,
  getNotasInput,
} from "./const.js";

const $contListas = document.createElement("div");
$contListas.classList.add("principal__cont-listas");

const carpetas = [];
let cont = 0;

document.addEventListener("DOMContentLoaded", () => {
  $areaDeTrabajo.addEventListener("click", () => {});

  $sidebarBtn.addEventListener("click", () => {
    if ($sidebarInput.value.length === 0)
      return showToast("Nombra tu carpeta", "error");
    if (carpetas.some((carpeta) => carpeta.name === $sidebarInput.value)) {
      $sidebarInput.value = "";
      return showToast("Nombre de carpeta existente", "error");
    }
    cont++;
    showToast("Carpeta creada correctamente", "success");
    $sidebarProyectos.innerHTML += `
 <div id="${cont}" class="sidebar__proyecto">
 <span class="sidebar__proyecto-valor">${$sidebarInput.value}</span>
 </div>
 `;
    const carpeta = {
      id: cont,
      name: $sidebarInput.value,
      items: []
    };
    carpetas.push(carpeta);
    showFolder(carpeta);
    $sidebarInput.value = "";
  });
  $sidebarProyectos.addEventListener("click", (e) => {
    const carpetaClick = carpetas.find((c) => c.id === parseInt(e.target.id));
    showFolder(carpetaClick);
  });
  $contenidoPrincipal.addEventListener("click", (e) => {
    if (e.target.closest(".crear__notas-icono__lapiz")) {
      const $notasInput = getNotasInput();
      console.log(e.target)
      $contListas.innerHTML += `
      <div class="principal__cont-lista" data-carpeta-id="${carpeta.id}">
      <div class="cont-lista__div">
      <h2 class="cont-lista__title">${$notasInput.value}</h2>
      <svg class="cont-lista__icono" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#ffffff" d="M4.5 17.27q-.213 0-.356-.145Q4 16.981 4 16.77q0-.213.144-.356q.143-.144.356-.144h15q.213 0 .356.144t.144.357q0 .213-.144.356t-.356.143h-15Zm0-4.77q-.213 0-.356-.144Q4 12.212 4 12t.144-.356q.144-.143.356-.143h15q.213 0 .356.144q.144.144.144.357t-.144.356q-.143.143-.356.143h-15Zm0-4.77q-.213 0-.356-.143T4 7.23q0-.213.144-.356q.143-.143.356-.143h15q.213 0 .356.144q.144.144.144.356q0 .213-.144.357q-.144.143-.356.143h-15Z"/></svg>
    </div>
      <div class="cont-lista__agregar-nota">+ Agregar nota</div>
    </div>
       `
      const $constLista = e.target.closest('.principal__cont-lista')
      const carpetaId = $constLista.dataset.carpetaId
  
      const carpeta = carpetas.find((c) => c.id === parseInt(carpetaId));
  
      if (carpeta) {
        carpeta.items.push({
          title: $notasInput.value
        })
      }
      showFolder()
    }
  });
});

function showFolder(carpeta) {
  $contenidoPrincipal.innerHTML = `
    <div class="principal__cont-nombre">
    <span>${carpeta.name}</span>
    </div>
    <div class="principal__cont-crear__notas">
      <div class="crear__notas-cont">
      <p class="crear__notas-parrafo">Nueva lista</p>
      <svg class="crear__notas-icono__lapiz" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 26"><path d="M22.438-.063c-.375 0-.732.17-1.032.47l-.718.687l4.218 4.218l.688-.718c.6-.6.6-1.494 0-2.094L23.5.406c-.3-.3-.688-.469-1.063-.469zM20 1.688l-1.094.907l4.5 4.5l1-1L20 1.687zm-1.688 1.625l-9.03 8.938a.975.975 0 0 0-.126.125l-.062.031a.975.975 0 0 0-.219.438l-1.219 4.281a.975.975 0 0 0 1.219 1.219l4.281-1.219a.975.975 0 0 0 .656-.531l8.876-8.782L21 6v.094l-1.188-1.188h.094l-1.593-1.593zM.813 4A1 1 0 0 0 0 5v20a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V14a1 1 0 1 0-2 0v10H2V6h10a1 1 0 1 0 0-2H1a1 1 0 0 0-.094 0a1 1 0 0 0-.094 0zm9.813 9.813l1.375.093l.094 1.5l-1.375.406l-.531-.53l.437-1.47z"/></svg>
        </div>
         <input id="notas-input" class="crear__notas-input cont-proyectos__input">
    </div>
    `;
  $contenidoPrincipal.appendChild($contListas);
  const $notasInput = getNotasInput();
  $notasInput.focus();
}

function showToast(title, icon) {
  const data = {
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
    background: "#272727",
    iconColor: "#51c1a7",
    customClass: {
      popup: "sweet__alert-popup__success",
      timerProgressBar: "sweet__alert-progress__bar",
    },
    didOpen: (toast) => {
      //eventos
      toast.onclick = Swal.close;
    },
  };
  if (icon === "error") {
    data.iconColor = "rgb(185 28 28)";
    data.customClass.popup = "sweet__alert-popup__error";
  }
  const Toast = Swal.mixin(data);
  Toast.fire({
    icon,
    title,
  });
}


console.log(carpetas)