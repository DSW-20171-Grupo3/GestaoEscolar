package com.gestaoescolar.service;

import java.util.ArrayList;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.stereotype.Service;
import com.gestaoescolar.DAO.PresencaRepository;
import com.gestaoescolar.model.Presenca;

@Service
@Transactional
public class PresencaService {
	
	private final PresencaRepository presencaRepository;
	
	public PresencaService(PresencaRepository presencaRepository){
		this.presencaRepository = presencaRepository;
	}

	public List<Presenca> findAll(){
		List<Presenca> presencas = new ArrayList<>();
		for(Presenca presenca : presencaRepository.findAll()){
			presencas.add(presenca);
		}
		return presencas;	
	}
	
	public Presenca findPresenca(int id){
		return presencaRepository.findOne(id);
	}
	
	public void save(Presenca presenca){
		presencaRepository.save(presenca);
	}
	
	public void delete(int id){
		presencaRepository.delete(id);
	}

}
