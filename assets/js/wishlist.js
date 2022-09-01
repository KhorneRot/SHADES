const urlApi = "https://pokeapi.co/api/v2/pokemon/1"

const imgPrueba = document.getElementById("imgPrueba")//?CAmbiar por  imagen


const precioPrueba = document.getElementById("precioPrueba")//?Cambiar por precio


const nombrePrubea = document.getElementById("nombrePrubea")//?nombre

const productos = 4;

const cards = document.getElementById("centro")

//! Este sirve maso
/* 
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
        nombrePrubea.innerHTML = nombreP

        precioPrueba.innerHTML = "$ " + precioP
        imgPrueba.src = imgP


        let templateCard = ""


        templateCard += `<div class="col"
            id="cards">
            <div class="card h-60 mb-3">
    <img id="imgTienda"
        src="/assets/img/articulo/arcoiris.jpg"
        class="card-img-top"
        alt="...">
    <div id="cardBody"
        class="card-body">
        <h5 class="card-title">Serum Anti-acné</h5>
        <p class="card-text">$499.00 

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


        cards.innerHTML = templateCard






    } catch (error) {

        alert("Ha ocurido un error")
    }

}




pWishlist(urlApi)
*/
//! Este sirve maso

async function pWishlist(urlApi)
try {
    
    const resp = await fetch(urlApi)
    const datos = await resp.json()
    const template =  `<div class= "col" id="cards">
    <div class="card h-60 mb-3">
<img id="imgTienda"
src="/assets/img/articulo/arcoiris.jpg"
class="card-img-top"
alt="...">
<div id="cardBody"
class="card-body">
<h5 class="card-title">Serum Anti-acné</h5>
<p class="card-text">$499.00 

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
    
    productos.forEach(producto => {
        




    });


} catch (error) {
    alert("No funciono algo")
}


pWishlist(urlApi)