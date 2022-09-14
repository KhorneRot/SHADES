const emailFormulario = document.getElementById('correo-electronico-suscripcion');
const formularioSuscripcion = document.getElementById('suscripcion-formulario');

const requerido = (valor) => valor === '' ? false : true;

const emailValido = (email) => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regEx.test(email);
}

const mostrarError = (input, mensaje) => {
  const campoFormulario = input.parentElement;
  const error = campoFormulario.querySelector('small');
  error.textContent = mensaje;
  //console.log('fail');
}

const mostrarExito = (input) => {
  const campoFormulario = input.parentElement;
  const error = campoFormulario.querySelector('small');
  error.textContent = '';
  //console.log("succ");
}

const verificarCorreo = () => {
  let valido = false;
  const email = emailFormulario.value.trim();

  if (!requerido(email)) {
    mostrarError(emailFormulario, 'Este campo no puede estar vacío');
  } else if (!emailValido(email)) {
    mostrarError(emailFormulario, 'Ingresa un correo válido');
  } else {
    mostrarExito(emailFormulario);
    valido = true;
  }

  return valido;

}

formularioSuscripcion.addEventListener('submit', function(e) {
  e.preventDefault();

    let emailValido = verificarCorreo();
    const email = emailFormulario.value.trim();

    if (emailValido) {
      correoObj = {
        correo: email
      }
      //console.log(correoObj);
    }
});

