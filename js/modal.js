const registrarse = document.getElementById('enviar');


registrarse.addEventListener('click', () => {

    var correo = document.getElementById("emaili").value;
    var contrasena = document.getElementById("passwd1").value;

    alert("Bienvenid@!  " + correo);

});