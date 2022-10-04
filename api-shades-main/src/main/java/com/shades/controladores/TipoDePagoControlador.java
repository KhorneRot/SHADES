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

import com.shades.modelos.TipoDePagoModelo;
import com.shades.servicios.TipoDePagoServicio;


@RestController
@RequestMapping("/api/tipodepago")
public class TipoDePagoControlador {
	
	@Autowired
	private TipoDePagoServicio tipoDePagoServicio;
	
	// obtener todos los tipos de pago
	@GetMapping() // http://localhost:8080/iipoDePago
	public ArrayList<TipoDePagoModelo> obtenerTipoDePago() {
		return tipoDePagoServicio.obtenerTipoDePago();
	}

	@GetMapping("/{id}") // http://localhost:8080/tipodepago/1
	public TipoDePagoModelo getTipoDePago(@PathVariable Long id) {
		return tipoDePagoServicio.obtenerTipoDePago(id);
	}
	
	// Crear Tipo de Pago
	@PostMapping() // http://localhost:8080/tipodepago
	public TipoDePagoModelo guardarTipoDePago(@RequestBody TipoDePagoModelo tipoDePagoModelo) {
		return tipoDePagoServicio.guardarTipoDePago(tipoDePagoModelo);
	}

	// Editar tipo de pago
	@PutMapping("/actualizar") // http://localhost:8080/tipodepago/actualizar
	public TipoDePagoModelo update(@RequestBody TipoDePagoModelo tipoDePagoModelo) {
		return tipoDePagoServicio.actualizar(tipoDePagoModelo);
	}

	// Eliminar tipo de pago
	@DeleteMapping("/eliminar/{id}") // http://localhost:8080/tipodepago/eliminar/1
	public void eliminar(@PathVariable Long id) {
		tipoDePagoServicio.eliminar(id);
	}
}
