package com.shades.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shades.modelos.CategoriaModelo;

@Repository
public interface CategoriaRepositorio extends JpaRepository<CategoriaModelo, Long>{

}
