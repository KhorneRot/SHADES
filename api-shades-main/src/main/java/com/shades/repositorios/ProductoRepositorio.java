package com.shades.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shades.modelos.ProductoModelo;

@Repository
public interface ProductoRepositorio extends JpaRepository<ProductoModelo, Long> {
	
}
