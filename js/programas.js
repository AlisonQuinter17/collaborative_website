const botonCierre1 = document.getElementById('botoncierre1')
const videoYoutube = document.getElementById('videoyoutube')
const abrir = document.getElementById('btn')
console.log(videoYoutube.src)
const src = videoYoutube.src
const hola = document.getElementById('hola')
const favicon = document.getElementById('favicon')



console.log(favicon)


console.log(videoYoutube)


function detenerVideo() {
    videoYoutube.src = ('')
}

botonCierre1.addEventListener('click', detenerVideo)

function abrirVideo() {
    videoYoutube.src = src

}
abrir.addEventListener('click', abrirVideo)




function cambioImg() {
    favicon.classList.replace('fa-angle-down', 'fa-angle-up')

}

hola.addEventListener('click', cambioImg)