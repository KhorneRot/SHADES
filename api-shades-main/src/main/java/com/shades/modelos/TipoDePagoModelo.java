package com.shades.modelos;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "tipoDePago")
public class TipoDePagoModelo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
	private Long pagoId;
	
	@Column(nullable = false)
	private String metodoPago;

	@OneToMany(mappedBy = "tipoDePago")
	@JsonProperty(access = Access.WRITE_ONLY)
	private List<MetodoDePagoModelo> metodoDePago;

	public Long getPagoId() {
		return pagoId;
	}

	public void setPagoId(Long pagoId) {
		this.pagoId = pagoId;
	}

	public String getMetodoPago() {
		return metodoPago;
	}

	public void setMetodoPago(String metodoPago) {
		this.metodoPago = metodoPago;
	}

	public List<MetodoDePagoModelo> getMetodoDePago() {
		return metodoDePago;
	}

	public void setMetodoDePago(List<MetodoDePagoModelo> metodoDePago) {
		this.metodoDePago = metodoDePago;
	}

	public TipoDePagoModelo() {
		super();
	}

}
