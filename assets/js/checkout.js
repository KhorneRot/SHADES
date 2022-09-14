let nombre = document.getElementById("nombre");
let correo = document.getElementById("correo");
let calle = document.getElementById("calle");
let ciudad = document.getElementById("ciudad");
let estado = document.getElementById("estado");
let cp = document.getElementById("cp");
let tarjeta = document.getElementById("tarjeta");
let numtarjeta = document.getElementById("numtarjeta");
let expira = document.getElementById("expira");
let año = document.getElementById("año");
let cv = document.getElementById("cv");
error.style.color = 'red'

    function procederalpago(){

        console.log('Procesando el pago');

    let mensajesError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajesError.prompt("Ingresa tu Nombre");
    }

    if(correo.value === null || correo.value === ''){
        mensajesError.prompt("Ingresa tu Correo");
    }

    if(calle.value === null || calle.value === ''){
        mensajesError.prompt("Ingresa tu Calle");
    }

    if(ciudad.value === null || ciudad.value === ''){
        mensajesError.prompt("Ingresa tu Ciudad");
    }

    if(estado.value === null || estado.value === ''){
        mensajesError.prompt("Ingresa tu Estado");
    }

    if(cp.value === null || cp.value === ''){
        mensajesError.prompt("Ingresa tu Codigo Postal");
    }

    if(tarjeta.value === null || tarjeta.value === ''){
        mensajesError.prompt("Ingresa el titular de la tarjeta");
    }

    if(numtarjeta.value === null || numtarjeta.value === ''){
        mensajesError.prompt("Ingresa el Numero de la tarjeta");
    }

    if(expira.value === null || expira.value === ''){
        mensajesError.prompt("Ingresa la fecha de expiración de tu tarjeta");
    }

    if(año.value === null || año.value === ''){
        mensajesError.prompt("Ingresa el año de Expiración")
    }

    if(cv.value === null || cv.value === ''){
        mensajesError.prompt("Ingresa el CV")
    }

        mensajesError.join(', ');

        return false;
    }