const formularioInput = document.getElementById("formularioInput")

const correo = document.getElementById("correo")


const nombre = document.getElementById("nombre")
const mensaje = document.getElementById("mensaje")

var contactoObj

formularioInput.addEventListener("submit", (e) =>{
    e.preventDefault()
    contactoObj = {
        correoValor : correo.value ,
        nombreValor : nombre.value,
        mensajeValor : mensaje.value,
    };  
    
    console.log(contactoObj);
    return contactoObj
});


