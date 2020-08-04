const seccionUno = document.getElementById('seccion_belleza')
const seccionDos = document.getElementById('seccion_salud')
const seccionTres = document.getElementById('seccion_training')

// Primer evento

const botnFirst = document.getElementById('first-btn')

function borrarUno() {
    seccionUno.hidden = false
    seccionDos.hidden = true
    seccionTres.hidden = true
}
botnFirst.addEventListener('click', borrarUno)

// Segundo evento
const botnSecond = document.getElementById('second-btn')

function borrarDos() {
    seccionUno.hidden = true
    seccionDos.hidden = false
    seccionTres.hidden = true
}
botnSecond.addEventListener('click', borrarDos)
// tercer evento
const botnThird = document.getElementById('third-btn')

function borrarTres() {
    seccionUno.hidden = true
    seccionDos.hidden = true
    seccionTres.hidden = false
}
botnThird.addEventListener('click', borrarTres)