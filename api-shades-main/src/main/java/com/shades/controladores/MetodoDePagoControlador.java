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

import com.shades.modelos.MetodoDePagoModelo;
import com.shades.servicios.MetodoPagoServicio;

@RestController
@RequestMapping("/api/metodopago")
public class MetodoDePagoControlador {

	 @Autowired
	    MetodoPagoServicio metodoPagoServicio;

	    @GetMapping()
	    public ArrayList<MetodoDePagoModelo> obtenerMetodoPago(){
	        return metodoPagoServicio.obtenerMetodoPago();
	        }
	    
	    @GetMapping("{id}")
	    public MetodoDePagoModelo getMetodoPago(@PathVariable Long id) {
	    	return metodoPagoServicio.obtenerMetodoPago(id);
	    }
	    
	    @PostMapping()
	    public MetodoDePagoModelo guarMetodoPago(@RequestBody MetodoDePagoModelo metodo) {
	        return metodoPagoServicio.guardarMetodoPago(metodo);
	    }


	    @PutMapping("/actualizar")
	    public MetodoDePagoModelo actualizar(@RequestBody MetodoDePagoModelo metodoPagoModel) {
	        return metodoPagoServicio.modificarMetodoPago(metodoPagoModel);
	    }



	    @DeleteMapping("/borrar/{metodopagoId}")
	    public String eliminarporId(@PathVariable("metodopagoId") Long metodopagoId) {
	        boolean ok = this.metodoPagoServicio.borarMetodoPago(metodopagoId);
	        if (ok) {
	            return "Se elimino el usuario con id " + metodopagoId;
	        }else{
	            return "No pudo eliminar el usuario con id " + metodopagoId;
	        }
	    }
}
