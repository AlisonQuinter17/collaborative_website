ocultarUno.hidden = true
const ocultarUno = document.getElementsByClassName('ocultarUno')
// Primer evento

const botnFirst = document.getElementById('first-btn')

function borrarUno(params) {
    ocultarUno.hidden = true
}
botnFirst.addEventListener('click', borrarUno)