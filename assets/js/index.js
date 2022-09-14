// Obtener elementos del DOM
const iconoCorazon = document.querySelectorAll('.icono-corazon');
const iconoCarrito = document.querySelectorAll('.icono-carrito');

/* Declaracion de funciones*/
const animarCorazon = function(evento) {

  if (evento.currentTarget.classList.contains('activo')) {

    console.log(evento.currentTarget);
    evento.currentTarget.innerHTML = '<path fill="CurrentColor" d="M128 222a6 6 0 0 1-2.9-.8c-1.1-.5-25.9-14.6-51.1-37.2c-34.5-31.1-52-62-52-92a58 58 0 0 1 106-32.6A58 58 0 0 1 234 92c0 30-17.5 60.9-52 92c-25.2 22.6-50 36.7-51.1 37.2a6 6 0 0 1-2.9.8ZM80 46a46 46 0 0 0-46 46c0 57.3 77.8 107.3 94 117c16.2-9.7 94-59.7 94-117a46 46 0 0 0-88.5-17.7a5.9 5.9 0 0 1-11 0A46 46 0 0 0 80 46Z"/>';
    evento.currentTarget.classList.remove('activo');
    evento.currentTarget.classList.add('inactivo');

  } else if (
    evento.currentTarget.classList.contains('inactivo')
    ||
    (!evento.currentTarget.classList.contains('inactivo') && !evento.currentTarget.classList.contains('activo'))
  ) {

    console.log(evento.currentTarget);
    evento.currentTarget.innerHTML = '<path fill="CurrentColor" d="M236 92c0 30.6-17.7 62-52.6 93.4a314.3 314.3 0 0 1-51.5 37.6a8.1 8.1 0 0 1-7.8 0C119.8 220.6 20 163.9 20 92a60 60 0 0 1 108-36a60 60 0 0 1 108 36Z"/>';
    evento.currentTarget.classList.remove('inactivo');
    evento.currentTarget.classList.add('activo');


  }

}

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


// Generar EventListeners para cada icono de corazon
iconoCorazon.forEach( function(elemento) {
  elemento.addEventListener('click', animarCorazon);
} );

// Generar EventListeners para iconos de carrito
iconoCarrito.forEach( function(elemento) {
  elemento.addEventListener('click', animarCarrito)
});

