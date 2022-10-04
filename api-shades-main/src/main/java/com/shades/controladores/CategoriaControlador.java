package com.shades.controladores;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shades.modelos.CategoriaModelo;
import com.shades.servicios.CategoriaServicio;

@RestController
@RequestMapping("/api/categorias")
public class CategoriaControlador {

	@Autowired
	CategoriaServicio categoriaServicio;
	
	// obtener todos los tipos de pago
		@GetMapping() // http://localhost:8080/iipoDePago
		public ArrayList<CategoriaModelo> obtenerCategoria() {
			return categoriaServicio.obtenerCategoria();
		}

		@GetMapping("/{id}") // http://localhost:8080/categorias/1
		public CategoriaModelo getCategoria(@PathVariable Long id) {
			return categoriaServicio.obtenerCategoria(id);
		}
		
		// Crear Tipo de Pago
		@PostMapping() // http://localhost:8080/categorias
		public CategoriaModelo guardarCategoria(@RequestBody CategoriaModelo categoriaModelo) {
			return categoriaServicio.guardarCategoria(categoriaModelo);
		}

		// Editar tipo de pago
		@PutMapping("/actualizar") // http://localhost:8080/categorias/actualizar
		public CategoriaModelo update(@RequestBody CategoriaModelo categoriaModelo) {
			return categoriaServicio.actualizar(categoriaModelo);
		}

		// Eliminar tipo de pago
		@DeleteMapping("/eliminar/{id}") // http://localhost:8080/categorias/eliminar/1
		public void eliminar(@PathVariable Long id) {
			categoriaServicio.eliminar(id);
		}
}
