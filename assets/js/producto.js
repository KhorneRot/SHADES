let btns = Object.values(document.getElementsByClassName("btn-light")); 
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


