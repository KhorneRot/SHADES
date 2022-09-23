const $formRegistro = document.getElementById('form-registro');

$formRegistro.addEventListener('submit', (e) => {
  e.preventDefault();

  let nombre = document.getElementById('nombre').value;
  let correo = document.getElementById('correo').value;
  let password = document.getElementById('password').value;
  let password2 = document.getElementById('password2').value;

  if (nombre === "" && correo === "" && password === "" && password2 === "") return alert("Todos los espacios están vacíos"); 
  if (password !== password2) return console.error("Las contraseñas no coinciden"); 

  const datos = Object.fromEntries(
    new FormData(e.target)
  );

  $formRegistro.reset();

  fetch('http://localhost:8080/api/usuarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      nombre: datos.nombre,
      correo: datos.correo,
      contrasenia: datos.password
    }) //,
  }) // fin de fetch
  .then(respuesta => {
    if (respuesta.ok) {
      url = window.location;
      const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1)
      location.href = path +  'index.html';
    }
  }) // Fin de .then
  .catch(error => {
    console.error('Error:', error);
  });
  
});