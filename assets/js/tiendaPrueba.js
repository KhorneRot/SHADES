const prueba1 = document.getElementById("prueba1")
const prueba2 = document.getElementById("prueba2")
const prueba3 = document.getElementById("prueba3")


///!----- sirve con api poke inicio

const urlApi = "https://pokeapi.co/api/v2/pokemon/"

let nProductos = 25;

const cards = document.getElementById("centro")


let i = 0;
async function pWishlist(urlApi) {

    try {
        const resp = await fetch(urlApi)
        const datos = await resp.json()

        const producto = {
            nombre: datos.forms[0].name,
            habilidades: datos.abilities,
            precio: datos.id,
            imagen: datos.sprites.other["official-artwork"].front_default,

        }

        let nombreP = producto.nombre
        let precioP = producto.precio
        let imgP = producto.imagen
        //nombrePrubea.innerHTML = nombreP

        //precioPrueba.innerHTML = "$ " + precioP
        //imgPrueba.src = imgP

        let templateRow = <div class="row justify-content-center"
        id="cards">
        let templateCard = ""
    while (i < nProductos) {
    i++
    templateCard += <div class="col-md-3 col-lg-3 "
    id="cards">
            <div class="card h-60 mb-3">
    <img id="imgTienda"
        src="${producto.imagen}"
        class="card-img-top"
        alt="...">
        <div id="cardBody"
        class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${i }

            <img id="icon"
            src="/assets/img/iconos/Corazon.svg"
            alt="Icono Me gusta"
            srcset="">
            <img id="icon"
            src="/assets/img/iconos/Carrito.svg"
            alt="Icono Carrito"
            srcset="">
        </p>

        </div>
</div>
</div>

}


templateRow+= templateCard
cards.innerHTML = templateRow






    } catch (error) {

        alert("Ha ocurido un error")
    }

}

//!----- sirve con api poke fin


prueba1.addEventListener("click",(e) =>{
    e.preventDefault()
    let link = urlApi + 1
    pWishlist(link)
})


prueba2.addEventListener("click",(e) =>{
    e.preventDefault()
    let link = urlApi + 7
    nProductos = 5
    pWishlist(link)
})

prueba3.addEventListener("click",(e) =>{
    e.preventDefault()
    let link = urlApi + 5
    nProductos = 10
    pWishlist(link)
})