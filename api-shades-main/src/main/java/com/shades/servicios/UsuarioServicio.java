package com.shades.servicios;

import static java.util.Collections.emptyList;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.shades.modelos.UsuarioModelo;
import com.shades.repositorios.UsuarioRepositorio;

@Service
public class UsuarioServicio implements UserDetailsService { // 'implements UserDetailsService' Resuelve el error de dependencias circulares  
	
	@Autowired
	private  UsuarioRepositorio usuarioRepository;
	
	// Obtener todos los usuarios
	public ArrayList<UsuarioModelo> obtenerUsuario(){
		return (ArrayList<UsuarioModelo>) usuarioRepository.findAll();
    }
	
	// Obtener usuario por id
    public UsuarioModelo obtenerUsuario(Long id) {
        Optional<UsuarioModelo> user = usuarioRepository.findById(id);
        return user.orElse(null);
    }
    
    // Guardar usuario
    public UsuarioModelo guardarUsuario(UsuarioModelo usuario){
        return usuarioRepository.save(usuario);
    }
    
    // Actualizar datos de usuario
    public UsuarioModelo actualizar(UsuarioModelo usuarioModelo) {
        return usuarioRepository.save(usuarioModelo);
    }
    
    // Eliminar usuario
    public boolean eliminar(Long id) {
        try{
            usuarioRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }

	@Override
	public UserDetails loadUserByUsername(String correo) throws UsernameNotFoundException {
		UsuarioModelo user = usuarioRepository.findByCorreo(correo);
		if(user == null) {
            throw new UsernameNotFoundException(correo);
        }
        return new org.springframework.security.core.userdetails.User(user.getCorreo(), user.getContrasenia(), emptyList());
	}
    
}
