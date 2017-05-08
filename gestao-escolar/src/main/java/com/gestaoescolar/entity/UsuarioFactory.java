package com.gestaoescolar.entity;

public class UsuarioFactory {
	
	public Usuario createUser(String type) {
		Usuario usuario;
		
		switch(type.toLowerCase()) {
		case "gestor":
			usuario = new Gestor();
			break;
		case "orientador":
			usuario = new Orientador();
			break;
//		case "responsavel":
//			usuario = new Responsavel();
//			break;
		default: throw new IllegalArgumentException("No such user.");
		}
		
		return usuario;
		
	}
	
}
