package com.shades.modelos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "metodoDePago")
public class MetodoDePagoModelo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
	private Long metodoPagoId;

	@ManyToOne
	@JoinColumn(nullable = false, name = "usuarioId")
	@JsonProperty(access = Access.WRITE_ONLY)
	private UsuarioModelo usuario;

	@ManyToOne
	@JoinColumn(nullable = false, name = "pagoId")
	private TipoDePagoModelo tipoDePago;

	private String banco;
	private Long numCuenta;
	private String expAnio;
	private String expMes;

	public Long getMetodoPagoId() {
		return metodoPagoId;
	}

	public void setMetodoPagoId(Long metodoPagoId) {
		this.metodoPagoId = metodoPagoId;
	}

	public UsuarioModelo getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuarioModelo usuario) {
		this.usuario = usuario;
	}

	public TipoDePagoModelo getTipoDePago() {
		return tipoDePago;
	}

	public void setTipoDePago(TipoDePagoModelo tipoDePago) {
		this.tipoDePago = tipoDePago;
	}

	public String getBanco() {
		return banco;
	}

	public void setBanco(String banco) {
		this.banco = banco;
	}

	public Long getNumCuenta() {
		return numCuenta;
	}

	public void setNumCuenta(Long numCuenta) {
		this.numCuenta = numCuenta;
	}

	public String getExpAnio() {
		return expAnio;
	}

	public void setExpAnio(String expAnio) {
		this.expAnio = expAnio;
	}

	public String getExpMes() {
		return expMes;
	}

	public void setExpMes(String expMes) {
		this.expMes = expMes;
	}

	public MetodoDePagoModelo() {
		super();
	}

}
