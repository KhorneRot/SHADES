package com.shades.modelos;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "categoria")
public class CategoriaModelo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
	private Long categoriaId;

	@Column(nullable = false)
	private String nombreCategoria;

	@OneToMany(mappedBy = "categoria")
	private List<ProductoModelo> producto;

	public Long getCategoriaId() {
		return categoriaId;
	}

	public void setCategoriaId(Long categoriaId) {
		this.categoriaId = categoriaId;
	}

	public String getNombreCategoria() {
		return nombreCategoria;
	}

	public void setNombreCategoria(String nombreCategoria) {
		this.nombreCategoria = nombreCategoria;
	}

	public List<ProductoModelo> getProductoModelo() {
		return producto;
	}

	public void setProductoModelo(List<ProductoModelo> productoModelo) {
		this.producto = productoModelo;
	}

	public CategoriaModelo() {
		super();
	}

}
