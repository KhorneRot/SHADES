package com.shades.servicios;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shades.modelos.TipoDePagoModelo;
import com.shades.repositorios.TipoDePagoRepositorio;

@Service // Agregar la anotacion resuelve el error: "field required a bean that could not
			// be found"
public class TipoDePagoServicio {

	@Autowired
	private TipoDePagoRepositorio tipoDePagoRepositorio;

	// Obtener todos los tipos de pago
	public ArrayList<TipoDePagoModelo> obtenerTipoDePago() {
		return (ArrayList<TipoDePagoModelo>) tipoDePagoRepositorio.findAll();
	}

	// Obtener TipoDePago por id
	public TipoDePagoModelo obtenerTipoDePago(Long id) {
		Optional<TipoDePagoModelo> pago = tipoDePagoRepositorio.findById(id);
		return pago.orElse(null);
	}

	// Guardar TipoDePago
	public TipoDePagoModelo guardarTipoDePago(TipoDePagoModelo tipoDePago) {
		return tipoDePagoRepositorio.save(tipoDePago);
	}

	// Actualizar datos de TipoDePago
	public TipoDePagoModelo actualizar(TipoDePagoModelo tipoDePagoModelo) {
		return tipoDePagoRepositorio.save(tipoDePagoModelo);
	}

	// Eliminar TipoDePago
	public boolean eliminar(Long id) {
		try {
			tipoDePagoRepositorio.deleteById(id);
			return true;
		} catch (Exception err) {
			return false;
		}
	}
}
