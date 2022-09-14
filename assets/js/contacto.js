/*

)
*/
const expresiones = { 
    nombre: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
    mensaje: /^[a-zA-Z0-9-À-ÿ\s]{20,250}$/ ,// 20 a 150 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const formularioInput = document.getElementById("formularioInput")
const email = document.getElementById("email")
const nombre = document.getElementById("nombre")
const mensaje = document.getElementById("mensaje")
const errores = document.getElementById("errores")

var contactoObj


formularioInput.addEventListener("submit", (e) =>{
    e.preventDefault()
    let alertas = ""
    let errorF = false


    if(expresiones.email.test(email.value)) {
        console.log("bien");
    }
    else {console.log("bad");
    alertas+=`Email invalido<br>`
        errorF=true
    }
    if(expresiones.nombre.test(nombre.value)) console.log("bien nomrbe")
    else{
        console.log("badnomrbe");
        alertas+=`Nombre invalido <br>`
    }
    
    if(expresiones.mensaje.test(mensaje.value)) console.log("bien mensaje")
    else{
        console.log("bad mensaje");
        alertas+=`Mensaje invalido <br>`
    }
    console.log(alertas.value);

    if(alertas.includes("invalido")){
        console.log(alertas);

        errores.innerHTML = alertas;
    }else{
        
        contactoObj = {
            correoValor : email.value ,
            nombreValor : nombre.value,
            mensajeValor : mensaje.value,
        };  
        
        
        console.log(contactoObj);
        formularioInput.reset()
        errores.innerHTML = "<div style='color: green'>Formulario enviado</div>";

    }
    
    
    return contactoObj 
})










/*
formulario.addEventListener("submit",(e) =>{

	e.preventDefault();
	const check = document.querySelector("#terminos").checked;
	
	if(!Object.values(datos).includes(false) && check){
		
		console.log("enviado");
		document.querySelector(".alert-danger").style.display = "none"
		
		const datos = Object.fromEntries(
			new FormData(e.target)
		);
		console.log(datos);
	}
	else{
		console.log("No enviado");
		document.querySelector(".alert-danger").style.display = "block";
	}
})
 */