package com.shades.servicios;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shades.modelos.CategoriaModelo;
import com.shades.repositorios.CategoriaRepositorio;

@Service
public class CategoriaServicio {

	@Autowired
	private CategoriaRepositorio categoriaRepositorio;
	
	// Obtener todos los tipos de pago
			public ArrayList<CategoriaModelo> obtenerCategoria(){
				return (ArrayList<CategoriaModelo>) categoriaRepositorio.findAll();
		    }
			
			// Obtener Categoria por id
		    public CategoriaModelo obtenerCategoria(Long id) {
		        Optional<CategoriaModelo> pago = categoriaRepositorio.findById(id);
		        return pago.orElse(null);
		    }
		    
		    // Guardar Categoria
		    public CategoriaModelo guardarCategoria(CategoriaModelo tipoDePago){
		        return categoriaRepositorio.save(tipoDePago);
		    }
		    
		    // Actualizar datos de Categoria
		    public CategoriaModelo actualizar(CategoriaModelo categoriaModelo) {
		        return categoriaRepositorio.save(categoriaModelo);
		    }
		    
		    // Eliminar Categoria
		    public boolean eliminar(Long id) {
		        try{
		            categoriaRepositorio.deleteById(id);
		            return true;
		        }catch(Exception err){
		            return false;
		        }
		    }
}
