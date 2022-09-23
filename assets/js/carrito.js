/* Variables */
const cards = document.getElementById('cards')
const templateCard = document.getElementById('template-card').content
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
let carrito = {}

/* LocalStorage retiene elementos */
document.addEventListener('DOMContentLoaded', ()=>{
	fetchData()
	if(localStorage.getItem('carrito')){
		carrito = JSON.parse(localStorage.getItem('carrito'))
		pintarCarrito()
	}
}
)

/* Botones */
cards.addEventListener('click', e =>{
	addCarrito(e)
})

items.addEventListener('click', e=>{
	btnAccion(e)
})

/* Funciones */
const fetchData = async()=>{
	try{
		const res = await fetch('http://localhost:8080/api/productos/')
		const data = await res.json()
		pintarCard(data)

	}catch(error){
		console.log(error)
	}
}
/* Pintar carrito con elementos del json */
const pintarCard = data=>{
	data.slice(-3).forEach(item => {
		templateCard.querySelector('h5').textContent = item.nombreProducto
		templateCard.querySelector('p').textContent = "$" + item.precio;
		templateCard.querySelector('img').setAttribute('src', item.imageUrl)
		templateCard.querySelector('.btn-dark').dataset.id = item.productoId
		const clone = templateCard.cloneNode(true)
		fragment.appendChild(clone)
	})
	cards.appendChild(fragment)
}
/* Agregar elementos al carrito */
const addCarrito = e =>{
	//console.log(e.target)
	//console.log(e.target.classList.contains('btn-dark'))
	if(e.target.classList.contains('btn-dark')){
		setCarrito(e.target.parentElement)
	}

e.stopPropagation()
}


/* Almacenar elementos únicos dentro del json */
const setCarrito = item => {
	//console.log(objeto)
	const producto = {
		title: item.querySelector('h5').textContent,
		precio: Number(item.querySelector('p').textContent.replace('$','')),
		id: item.querySelector('.btn-dark').dataset.id,
		cantidad: 1
	}

	if(carrito.hasOwnProperty(producto.id)){
		producto.cantidad = carrito[producto.id].cantidad + 1
	}

	carrito[producto.id] = { ...producto}
	pintarCarrito()
}

const pintarCarrito = ()=> {
/* dentro del propio carrito, selectores */	
	items.innerHTML = ''
	Object.values(carrito).forEach(producto => {
		templateCarrito.querySelector('th').textContent = producto.id
		templateCarrito.querySelectorAll('td')[0].textContent = producto.title
		templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
		templateCarrito.querySelector('.btn-info').dataset.id = producto.id
		templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
		templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio
		const clone = templateCarrito.cloneNode(true)
		fragment.appendChild(clone)
	})

	items.appendChild(fragment)

	pintarFooter()

	localStorage.setItem('carrito', JSON.stringify(carrito))

}
/* va llenando la tabla, si no hay nada se pinta con vacío */
const pintarFooter = () => {
		footer.innerHTML = ''
		if(Object.keys(carrito).length === 0){
			footer.innerHTML = `
			<th scope="row" colspan="5">Carrito vacío</th>
			`
			return
		}
/* hace el cálculo del precio respecto a la cantidad */
		
		const nCantidad = Object.values(carrito).reduce((acc, {cantidad})=> acc + cantidad, 0);
		const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0);

		
		templateFooter.querySelectorAll('td')[0].textContent = nCantidad
		templateFooter.querySelector('span').textContent = nPrecio;

	/* cards */
		const clone = templateFooter.cloneNode(true)
		fragment.appendChild(clone)
		footer.appendChild(fragment)
	/* regresa el carrito a valores vacíos */
		const btnVaciar = document.getElementById('vaciar-carrito')
		btnVaciar.addEventListener('click', ()=>{
			carrito = {}
			pintarCarrito()
		})
	}


const btnAccion = e =>{
	
	if(e.target.classList.contains('btn-info')){
		
		const producto = carrito[e.target.dataset.id]
		producto.cantidad++

		carrito[e.target.dataset.id] = {...producto}
		pintarCarrito()
	}

	if(e.target.classList.contains('btn-danger')){
		const producto = carrito[e.target.dataset.id]
		producto.cantidad--
		if(producto.cantidad ===0){
			delete carrito[e.target.dataset.id]
		}
		pintarCarrito()

	}

	e.stopPropagation()
}