package com.shades.controladores;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shades.modelos.UsuarioModelo;
import com.shades.servicios.UsuarioServicio;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioControlador {
	
	private final UsuarioServicio usuarioServicio;
	private final BCryptPasswordEncoder bCryptPasswordEncoder;

	
	public UsuarioControlador(@Autowired UsuarioServicio usuarioServicio, BCryptPasswordEncoder bCryptPasswordEncoder) {
		this.usuarioServicio = usuarioServicio;
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
	}
	
	// Obtener Usuarios
	@GetMapping() // http://localhost/8080/api/usuarios
	public ArrayList<UsuarioModelo> obtenerUsuarios() {
		return usuarioServicio.obtenerUsuario();
	}
	
	@GetMapping("/{id}") // http://localhost/8080/api/usuarios/1
	public UsuarioModelo getProducto(@PathVariable Long id) {
        return usuarioServicio.obtenerUsuario(id);
    }
	
	// Crear usuarios
	@PostMapping()  // http://localhost:8080/api/usuarios
    public UsuarioModelo guardarUsuario(@RequestBody UsuarioModelo usuario){
		usuario.setContrasenia(bCryptPasswordEncoder.encode(usuario.getContrasenia()));
        return usuarioServicio.guardarUsuario(usuario);
    }
	
	 // Editar usuario
    @PutMapping("/actualizar") //http://localhost:8080/api/usuarios/actualizar
    public UsuarioModelo update(@RequestBody UsuarioModelo usuarioModelo) {
        return usuarioServicio.actualizar(usuarioModelo);
    }
    
    //Eliminar usuario
    @DeleteMapping("/eliminar/{id}") //http://localhost:8080/api/usuarios/eliminar/1
        public String eliminarPorId(@PathVariable("id") Long id){
        boolean ok = this.usuarioServicio.eliminar(id);
        if (ok){
            return "Se eliminó el usuario con id " + id;
        }else{
            return "No pudo eliminar el usuario con id " + id;
        }
    }
}
