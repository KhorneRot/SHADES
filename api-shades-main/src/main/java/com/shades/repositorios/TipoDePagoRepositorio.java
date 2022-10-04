package com.shades.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shades.modelos.TipoDePagoModelo;

@Repository
public interface TipoDePagoRepositorio extends JpaRepository<TipoDePagoModelo, Long>{
	
}
