
var busqueda = document.getElementById("buscar");

//Eventos:
buscar.addEventListener("keypress", (e)=>{
    e.preventDefault(); //Lo usamos para que no recargue la pagina hasta que yo le diga, por eso lo primero que hacemos es detener el efecto
    
        if (e.key === 'Enter') {
            const inputBusqueda = document.getElementById("buscar"); //Con esto traemos el input del HTML
            console.log(inputBusqueda.value);
            alert("Has buscado algo");
        }
    

})
