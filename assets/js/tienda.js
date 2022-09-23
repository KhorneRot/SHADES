const urlApi = "https://api-shades-test.herokuapp.com/api/productos/"

const cards = document.getElementById("centro")

async function pApi(urlApi) {
  
  try {
        const resp = await fetch(urlApi)
        const datos = await resp.json()
        
        datos.forEach(datos => {           
          
             cards.innerHTML += `
             <div class=" col-sm-4 " id="cards">
             <div class="card "id="${datos.productoId}">
             <a title= "Detalles del producto" href="producto.html?id=${datos.productoId}" >  <img id= "imgTienda" src="${datos.imageUrl}" class="card-img-top" alt="... " onclick="pasarValor()"></a>
             <div id="cardBody" class="card-body">
             <h5 class="card-title">${datos.nombreProducto}</h5>
             <p class="card-text">$ ${datos.precio}</p>
             <a title= "Añadir a carrito" href="carrito.html"><button id="1" type="button" class="btn-light btn-sm" style="background-color:#D49090; color:white; float: right;">¡Añadir a carrito!</button></a>
             </div>
             </div>
             </div>
             `
            });
            

    } catch (error) {

      alert("Ha ocurido un error")
    }
  }
  pApi("https://api-shades-test.herokuapp.com/api/productos/")
  
   /*  
    
    async function categoria(urlApi) {
    
    try {
          const resp = await fetch(urlApi)
          const datos = await resp.json()
        console.log(datos);  
        console.log(datos.categoriaId);
        console.log(datos.categoriaId);
      
     /*  if (datos.categoriaId.value == 1)  {
      
      console.log(hola);
      }   */
        
        /* datos.forEach(producCat => {           
            console.log(datos);
          cards.innerHTML += `
          <div class="col" id="cards">
               <div class="card "id="${datos.productoModelo.productoId}">
               <a title= "Detalles del producto" href="producto.html?id=${datos.productoId}" >  <img id= "imgTienda" src="${datos.productoModelo.imageUrl}" class="card-img-top" alt="... " onclick="pasarValor()"></a>
               <div id="cardBody" class="card-body">
               <h5 class="card-title">${datos.productoModelo.nombreProducto}</h5>
               <p class="card-text">${datos.productoModelo.precio}</p>
               <a title= "Añadir a carrito" href="carrito.html"><button id="1" type="button" class="btn-light btn-sm" style="background-color:#D49090; color:white; float: right;">¡Añadir a carrito!</button></a>
               </div>
               </div>
               </div>
               `
              });
              
            }
               
            } catch (error) {
              
              alert("Ha ocurido un error")
            }
            
            
          }
          
  
   */