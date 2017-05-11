package com.gestaoescolar.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity(name="table_presenca")
public class Presenca implements Serializable{
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String name;
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateCreated;
	private boolean presencaConfirmada;
	
	public Presenca(){
		
	}
	
	public Presenca(String name, Date dateCreated, boolean presencaConfirmada) {
		super();
		this.name = name;
		this.dateCreated = dateCreated;
		this.presencaConfirmada = presencaConfirmada;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public Date getDateCreated() {
		return dateCreated;
	}
	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}
	
	public boolean isPresencaConfirmada() {
		return presencaConfirmada;
	}

	public void setPresencaConfirmada(boolean presencaConfirmada) {
		this.presencaConfirmada = presencaConfirmada;
	}

	@Override
	public String toString() {
		return "Presenca [id=" + id + ", name=" + name + ", dateCreated=" + dateCreated
				+ ", presenca confirmada=" + presencaConfirmada + "]";
	}	

}
