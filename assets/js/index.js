// Obtener elementos del DOM
const iconoCorazon = document.querySelectorAll('.icono-corazon');
const iconoCarrito = document.querySelectorAll('.icono-carrito');

/* Declaracion de funciones*/
const animarCarrito = function(evento) {

  if (evento.currentTarget.classList.contains('activo')) {

    console.log(evento.currentTarget);
    evento.currentTarget.innerHTML = '<path fill="currentColor" d="M94 216a14 14 0 1 1-14-14a14 14 0 0 1 14 14Zm90-14a14 14 0 1 0 14 14a14 14 0 0 0-14-14Zm43.5-128.4L201.1 166a22.2 22.2 0 0 1-21.2 16H84.1a22.2 22.2 0 0 1-21.2-16L36.5 73.8v-.3l-9.8-34a1.9 1.9 0 0 0-1.9-1.5H8a6 6 0 0 1 0-12h16.8a14.1 14.1 0 0 1 13.5 10.2L46.8 66h174.9a6 6 0 0 1 4.8 2.4a6 6 0 0 1 1 5.2ZM213.8 78H50.2l24.3 84.7a10 10 0 0 0 9.6 7.3h95.8a10 10 0 0 0 9.6-7.3Z"/>';
    evento.currentTarget.classList.remove('activo');
    evento.currentTarget.classList.add('inactivo');

  } else if (
    evento.currentTarget.classList.contains('inactivo')
    ||
    (!evento.currentTarget.classList.contains('inactivo') && !evento.currentTarget.classList.contains('activo'))
  ) {

    console.log(evento.currentTarget);
    evento.currentTarget.innerHTML = '<path fill="currentColor" d="M200 216a16 16 0 1 1-16-16a16 16 0 0 1 16 16ZM80 200a16 16 0 1 0 16 16a16 16 0 0 0-16-16ZM228.1 67.2a8.1 8.1 0 0 0-6.4-3.2H48.3l-8.1-28.4A16.1 16.1 0 0 0 24.8 24H8a8 8 0 0 0 0 16h16.8l9.8 34.1v.2L61 166.6A24.1 24.1 0 0 0 84.1 184h95.8a24.1 24.1 0 0 0 23.1-17.4l26.4-92.4a8 8 0 0 0-1.3-7Z"/>';
    evento.currentTarget.classList.remove('inactivo');
    evento.currentTarget.classList.add('activo');


  }

}

// Generar EventListeners para iconos de carrito
iconoCarrito.forEach( function(elemento) {
  elemento.addEventListener('click', animarCarrito)
});

