/**
 * Imprime error
 * @param {string|number} msg
 */
function mostrarError(msg) {

    let contenedor = document.getElementById('error');

    contenedor.innerHTML = msg;
    contenedor.style.display = 'block';
    contenedor.style.fontWeight = '800';

}

/**
 Validacion del formulario
 */
function validacionFormulario() {

    /** @type {string}*/ let nombre = document.getElementById('nombre').value;
    /** @type {string}*/ let archivo = document.getElementById('archivo').value;
    /** @type {string}*/ let privacidad = document.getElementById('privacidad').value;
    /** @type {string}*/ let contasena = document.getElementById('password').value;
    /** @type {string}*/ let autodestruir = document.getElementById('autodestruir').value;
    /** @type {string}*/ let comentario = document.getElementById('comentario').value;

    message = "ERROR<br>Su formulario falló en: ";
    istrue = false;

    let regex = /^[a-zA-Z ]*$/;
    if (nombre.length < 10 || nombre.length > 100 || !regex.test(nombre)) {
        message = message + "Nombre, ";
        istrue = false;
    }

    if (archivo === '') {
        message = message + "Archivo, ";
        istrue = false;
    }

    if (privacidad === '') {
        message = message + "Privacidad, ";
        istrue = false;
    }

    if (contasena.length>10){
        message=message+"Contraseña, ";
        istrue=false;
    }

    let contrasinvalidas = ['password', '1234', 'pass', 'user', 'hackbox']
    for (let i=0; i<contrasinvalidas.length; i++){
        if (contasena===contrasinvalidas[i]){
            message=message+"Contraseña, ";
            istrue=false;
        }
    }

    if (!/^[0-9]*$/.test(autodestruir)){
        message=message+"Autodestruir, ";
        istrue=false;
    }

    if (/^[0-9]+$/.test(autodestruir)){
        if (parseInt(autodestruir)>0 || parseInt(autodestruir)<=3153600){
            message=message+"Autodestruir, "
            istrue=false;
        }
    }

    if (comentario.length > 1000){
        message=message+"Comentario, ";
        istrue=false;
    }

    if (!istrue){
        mostrarError(message.substring(0, message.length - 2));
        return false;
    }
    return true;
}

function resetear(){
    document.getElementById('error').style.display='none';
}

console.log('app v1.0'); // stack trace