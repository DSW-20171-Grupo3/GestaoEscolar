package com.gestaoescolar.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Aluno {
	 @Id 
	 @Column(name="matricula", nullable=false, unique=true)
     private Long matricula; 
     
     @Column(name="nome", nullable=false)
      private String nome; 

     @Column(name="cpfResponsavel")
     private String cpfResponsavel; 
     
     @Column(name="idTurma", nullable=false)
     private String idTurma;

	public Long getMatricula() {
		return matricula;
	}

	public void setMatricula(Long matricula) {
		this.matricula = matricula;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpfResponsavel() {
		return cpfResponsavel;
	}

	public void setCpfResponsavel(String cpf_responsavel) {
		this.cpfResponsavel = cpf_responsavel;
	}

	public String getIdTurma() {
		return idTurma;
	}

	public void setIdTurma(String id_turma) {
		this.idTurma = id_turma;
	}
 
     
}
