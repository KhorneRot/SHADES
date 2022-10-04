package com.shades.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shades.modelos.MetodoDePagoModelo;

@Repository
public interface MetodoPagoRepositorio extends JpaRepository<MetodoDePagoModelo, Long> {

}
