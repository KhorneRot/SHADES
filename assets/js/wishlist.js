
const urlApi = "https://pokeapi.co/api/v2/pokemon/1"

const nProductos = 9;

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

        //let nombreP = producto.nombre
        //let precioP = producto.precio
       // let imgP = producto.imagen
        //nombrePrubea.innerHTML = nombreP

        //precioPrueba.innerHTML = "$ " + precioP
        //imgPrueba.src = imgP

        let templateRow = `<div class="row justify-content-center"
        id="cards">`
        let templateCard = ""
    while (i < nProductos) {
    i++
    templateCard += `<div class="col-3"
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
</div>`

}


templateRow+= templateCard
cards.innerHTML = templateRow






    } catch (error) {

        alert("Ha ocurido un error")
    }

}


//pWishlist(urlApi)



