package com.shades.servicios;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shades.modelos.ProductoModelo;
import com.shades.repositorios.ProductoRepositorio;

@Service
public class ProductoServicio {

	@Autowired
	ProductoRepositorio productoRepositorio;

	// Obtener todos los productos
	public ArrayList<ProductoModelo> obtenerProducto() {
		return (ArrayList<ProductoModelo>) productoRepositorio.findAll();
	}

	// Obtener productos individuales
	public ProductoModelo obtenerProducto(Long id) {
		Optional<ProductoModelo> prod = productoRepositorio.findById(id);
		return prod.orElse(null);
	}

	// Crear un nuevo producto
	public ProductoModelo guardarProducto(ProductoModelo producto) {
		return productoRepositorio.save(producto);
	}

	// Actualizar datos de TipoDePago
	public ProductoModelo actualizar(ProductoModelo productoModelo) {
		return productoRepositorio.save(productoModelo);
	}

	// Eliminar un producto
	public boolean eliminarProducto(Long productoId) {
		try {
			productoRepositorio.deleteById(productoId);
			return true;
		} catch (Exception err) {
			return false;
		}
	}

}
