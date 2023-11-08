let d = document

const $id = (id) => {
    let element = d.getElementById(id)
    return element
}

export const pantallaSpan = $id('pantalla__texto')
export const calculadora = $id('calculadora')