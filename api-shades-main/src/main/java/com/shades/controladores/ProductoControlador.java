package com.shades.controladores;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shades.modelos.ProductoModelo;
import com.shades.servicios.ProductoServicio;

@RestController
@RequestMapping("/api/productos")

public class ProductoControlador {

	@Autowired
	ProductoServicio productoServicio;
	
	// obtener todos los productos
	@GetMapping()
	public ArrayList<ProductoModelo> obtenerProductos() {
		return productoServicio.obtenerProducto();
	}
	
	// Obtener productos individuales
	@GetMapping(path = "/{productoId}")
	public ProductoModelo obtenerProductoPorId(@PathVariable("productoId") Long productoId) {
		return this.productoServicio.obtenerProducto(productoId);
	}

	// Crear Productos
	@PostMapping()
	public ProductoModelo guardarProducto(@RequestBody ProductoModelo producto) {
		return this.productoServicio.guardarProducto(producto);
	}

	
	// Eliminar productos
	@DeleteMapping(path = "/{productoId}")
	public String eliminarPorId(@PathVariable("productoId") Long productoId) {
		boolean ok = this.productoServicio.eliminarProducto(productoId);
		if (ok) {
			return "Se eliminó el producto con id " + productoId;
		} else {
			return "No pudo eliminar el producto con id" + productoId;
		}
	}

}
