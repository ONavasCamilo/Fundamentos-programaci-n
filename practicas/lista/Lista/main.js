const boton = document.getElementById('agregados__boton')
const contenedor  = document.getElementById('container')
const tarea = document.getElementById('agregados__tarea')  // se traen ID de HTML



boton.addEventListener('click', () =>{                   // evento al hacer click en el boton
    if(tarea.value === ''){
        return alert('ingresa algo pues')
    }   
    const tareaNueva = document.createElement('div')     // se crea nodo tipo elemento div para usarlo y luego hacer que aparezca al dar click
    const iconos = document.createElement('div')    // se crea div para organizar iconos 
    const basurero = document.createElement('i')         // se crea nodo tipo elemento icono 
    const hecho = document.createElement('i')               // se crea nodo para el check

    iconos.classList.add('agregados__iconos')
    tareaNueva.classList.add('agregados__agregar')       // se crea clase al elemento creado para modificar css
    basurero.classList.add('fa-solid', 'fa-trash', 'agregados__basura')    // se crean las clases para el nodo - icono de biblioteca y estilo
    hecho.classList.add('fa-solid', 'fa-check', 'agregados__hecho')      // se crean clases para icono check

    tareaNueva.innerHTML = tarea.value              // agarramos el div creado y escribiremos adentro el valor del input que dio el usuario

    basurero.addEventListener('click', ()=>{               // evento click en icono basura, elimina el div en el que esta
        tareaNueva.remove()                             // remover padre div
    })
    hecho.addEventListener('click', ()=>{                   // evento CHECK cambiar tarea
        tareaNueva.classList.remove('agregados__agregar')           // se elimina clase estilo
        tareaNueva.classList.add('agregados__realizado')            // se da clase nueva
    })

    contenedor.appendChild(tareaNueva)              // hacemos que la tarea nueva sea hijo del contenedor   
    tareaNueva.appendChild(iconos)                  //  se agrega iconos como hijo del div 
    iconos.appendChild(hecho)                      // icono check al div de iconos
    iconos.appendChild(basurero)                // icono basura al div de iconos
    tarea.value = ''                                  // devuelve input vacio
})


   
    
    

            




    
 

    contenedor.appendChild(tareaNueva)    
          //  se agrega iconos como hijo del div 
               // icono check al div de iconos
           // icono basura al div de iconos
    
