const navbar = document.getElementById('navbar')
const BTLOGIN = document.getElementById('button-login')
const DROPLIST1 = document.getElementById('dropnav1')
const DROPLIST2 = document.getElementById('dropnav2')
const LOGO = document.getElementById('logo')
const Clogo = document.getElementById('logo')

document.addEventListener('scroll', function () {
    if (window.scrollY > 80) {
        navbar.classList.replace('nav--color', 'nav--transp')
        BTLOGIN.classList.replace('aguamarina', 'transparent-efect')
        DROPLIST1.classList.replace('aguamarina', 'nav--transp')
        DROPLIST2.classList.replace('aguamarina', 'nav--transp')
        LOGO.classList.replace('text-negro', 'color-semiwhite') //que pendiente el cambio de color
        Clogo.classList.replace('nav-brand', 'nav-brandt')
    } else {
        navbar.classList.replace('nav--transp', 'nav--color')
        BTLOGIN.classList.replace('transparent-efect', 'aguamarina')
        DROPLIST1.classList.replace('nav--transp', 'aguamarina')
        DROPLIST2.classList.replace('nav--transp', 'aguamarina')
        LOGO.classList.replace('color-semiwhite', 'text-negro') //que pendiente el cambio de color
        Clogo.classList.replace('nav-brandt', 'nav-brand')
    }
})

let correo = 'estecorreoesmio@exaple.com'
let password = 'Del1al9po1'

let datos = {
    correo,
    password
}

//para almacenar informacion en el localstorages
localStorage.setItem('usuario', JSON.stringify(datos))
// window.location = registro.action

function cancelarEvento(event) {
    event.preventDefault();
}

let correoDefault = 'correo@example.com'
let passDefault = 'aaaAAA123'
const login = document.getElementById('registro')

login.addEventListener('submit', cancelarEvento);
login.addEventListener('submit', function () {
    let correo = login['correo'].value
    let password = login['password'].value

    if (localStorage.key('usuario') != null) {
        let userData = JSON.parse(localStorage.getItem('usuario'))
        correoDefault = userData.correo
        passDefault = userData.password
    }

    login.classList.remove('form-error')
    if ((correo == correoDefault) && (password == passDefault)) {
        window.location = login.action
    } else {
        login.classList.add('form-error')

        let alerta = document.getElementById('mensaje-login')
        alerta.textContent = 'Correo o Usuario Erroneo'
        alerta.hidden = false
    }
})