package com.shades.servicios;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shades.modelos.MetodoDePagoModelo;
import com.shades.repositorios.MetodoPagoRepositorio;

@Service
public class MetodoPagoServicio{

    @Autowired
    private MetodoPagoRepositorio metodoPagoRepositorio;

    public ArrayList<MetodoDePagoModelo> obtenerMetodoPago(){
    return (ArrayList<MetodoDePagoModelo>) metodoPagoRepositorio.findAll();
    }
    
 // Obtener TipoDePago por id
    public MetodoDePagoModelo obtenerMetodoPago(Long id) {
        Optional<MetodoDePagoModelo> metodoPago = metodoPagoRepositorio.findById(id);
        return metodoPago.orElse(null);
    }

    //Crear
    public MetodoDePagoModelo guardarMetodoPago(MetodoDePagoModelo metodo) {
        return metodoPagoRepositorio.save(metodo);
    }

    //Actualizar
    public MetodoDePagoModelo modificarMetodoPago(MetodoDePagoModelo metodoPagoModelo) {
        return metodoPagoRepositorio.save(metodoPagoModelo);
    }


    //Eliminar
    public boolean borarMetodoPago(Long metodopagoId) {
        try {
            metodoPagoRepositorio.deleteById(metodopagoId);
            return true;
        }catch(Exception err){
            return false;
        }
    }




}