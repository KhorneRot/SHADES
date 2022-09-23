/* let btns = Object.values(document.getElementsByClassName("btn-light")); 
let cont = 0; 
let tarjetaProd = document.getElementsByClassName("crds"); 
let item = {"title":"", "precio": 0, "id": 0,  "cantidad": 0};



btns.forEach(element => { 
    element.addEventListener("click", function (e) {
        cont++; 
        item.cantidad = cont; 
        item.id = 5 + btns.indexOf(element); 
        item.precio = tarjetaProd[btns.indexOf(element)].querySelector("h5").textContent.slice(1); 
        item.title = tarjetaProd[btns.indexOf(element)].querySelector("p").textContent 
        let tmp = Object.values(JSON.parse(localStorage.getItem('carrito'))); 
        tmp.push(item); 
        localStorage.setItem('carrito', JSON.stringify(tmp)); 
    });
    
});
 */

const idInfo = window.location.href.split('=').pop();
console.log(idInfo);

const urlApi = "https://api-shades-test.herokuapp.com/api/productos/"

const cards = document.getElementById("columnas3")

async function pintarProducto(urlApi) {

    try {
        
        const prod = await fetch(urlApi);
        const datos = await prod.json();
        console.log(datos);
  
        
        const producto = datos.find(el => el.productoId === Number(idInfo))
       
  
        cards.innerHTML += `
             <div class="row align-items-center">
      <div class="col-sm-4 crds">
        <ul id="tituloCard">
      <p>
      <h3>
      ${producto.nombreProducto}
      </h4>
      </p>
          <!-- Estrellas -->
          <ul id="precioCard">
            <h5> $ ${producto.precio} </h5></ul>
          
            <form >
              <a href="./carrito.html">
                <button class="btn btn-light btn-sm" id="añadir">¡Añadir a carrito!</button> </a>
          </form>
        
        </ul>
      </div>

      <!--Columna 2 donde metemos la imagen del produco-->
      <div class="col-sm-4"> 
      <div class="ecommerce-gallery" data-mdb-zoom-effect="true" data-mdb-auto-height="true">
        <div class="row py-3 shadow-5">
          <div class="col-12 mb-1">
            <div class="lightbox">
              <img
                src="${producto.imageUrl}"
                class="ecommerce-gallery-main-img active w-100"
              />
            </div>
          </div>
         
        </div>
      </div>
    </div>


      <!--Columna 3 donde metemos la descripcion del produco-->
      <div class="col-sm-4">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${producto.descripcion}</li>
            
                
            <a href="./Formulario de pago.html">
            <button type="button" id="comprarAhora" role="button" aria-pressed="true">Comprar ahora</button></a>
        </ul>
      </div>
      </div>

      
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div id="carousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row">
            <div class="col">
              <div class="bg-white py-4 text-white text-center">
                <img id="carrusel2" src="assets/img/articulo/carrusel2.jpg" alt="">
              </div>
            </div>
            <div class="col">
              <div class="bg-white py-4 text-white text-center">
                <img id="carrusel3" src="assets/img/articulo/carrusel3.jpg" alt="">
              </div>
            </div>
            <div class="col">
              <div class="bg-white py-4 text-white text-center">
                <img id="carrusel4" ca src="assets/img/articulo/carrusel4.jpg" alt="">
              </div>
            </div>
            <div class="col">
              <div class="bg-white py-4 text-white text-center">
                <img id="carrusel5" src="assets/img/articulo/carrusel5.jpg" alt="">
              </div>
            </div>
            <div class="col">
              <div class="bg-white py-4 text-white text-center">
                <img id="carrusel6" src="assets/img/articulo/carrusel6.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <div class="bg-white py-4 text-white text-center">
                <img id="carrusel7" src="assets/img/articulo/carrusel7.jpg" alt="">
              </div>
            </div>
            <div class="col">
              <div class="bg-white py-4 text-white text-center">
                <img id="carrusel8" src="assets/img/articulo/carrusel8.jpg" alt="">
              </div>
            </div>
            <div class="col">
              <div class="bg-white py-4 text-white text-center">
                <img id="carrusel9" src="assets/img/articulo/carrusel9.jpg" alt="">
              </div>
            </div>
            <div class="col">
              <div class="bg-white py-4 text-white text-center">
                <img id="carrusel10" c src="assets/img/articulo/carrusel10.jpg" alt="">
              </div>
            </div>
            <div class="col">
              <div class="bg-white py-4 text-white text-center">
                <img id="carrusel11" src="assets/img/articulo/carrusel11.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <div class="bg-white py-4 text-white text-center">
                <img id="carrusel12" src="assets/img/articulo/carrusel12.jpg" alt="">
              </div>
            </div>
            <div class="col">
              <div class="bg-white py-4 text-white text-center">
                <img id="carrusel13" src="assets/img/articulo/carrusel13.jpg" alt="">
              </div>
            </div>
            <div class="col">
              <div class="bg-white py-4 text-white text-center">
                <img id="carrusel14" src="assets/img/articulo/carrusel14.jpg" alt="">
              </div>
            </div>
            <div class="col">
              <div class="bg-white py-4 text-white text-center">
                <img id="carrusel15" src="assets/img/articulo/carrusel15.jpg" alt="">
              </div>
              <div class="col">
                <div class="bg-white py-4 text-white text-center">
                  <img id="carrusel1" src="assets/img/articulo/salman-hossain-saif-ypedT9JgDbQ-unsplash.jpg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" role="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" role="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>


         `
  }

     catch (error) {

        alert("Ha ocurido un error")
    }
}
pintarProducto(urlApi)
