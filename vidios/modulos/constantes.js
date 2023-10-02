export const PI = Math.PI;

export let usuario = 'Jon'
// export default const password = 'qwerty' NO SE PUEDE  FUNCIONES Y CLASES PERMITEN EXPORT DEFAULT

const hello = () => console.log('hola')

// NO SE PUEDEN TENER DOS FUNCIONES O VARIABLES POR EXPORT DEFAULT 
export default function saludar(){
    console.log('hola')
}

export class Saludar{
    constructor(){
        console.log('Hola modulos')
    }
}