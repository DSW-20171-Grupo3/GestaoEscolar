package com.gestaoescolar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.gestaoescolar.entity.Aluno;
import com.gestaoescolar.repository.AlunoRepository;

import java.util.List;

@Controller
@RequestMapping("/")
public class AlunoController {

	 private AlunoRepository alunoRepository;
	   
     @Autowired
     public AlunoController( AlunoRepository alunoRepository) {
           this.alunoRepository = alunoRepository;
     }

     @RequestMapping(value = "/{idTurma}", method = RequestMethod.GET)
     public String listaAlunos(@PathVariable("idTurma") String idTurma, Model model) {
           List<Aluno> listaAlunos = alunoRepository.findByIdTurma(idTurma);
           if (listaAlunos != null) {
                 model.addAttribute("alunos", listaAlunos);
           }
           return "listaAlunos";
     }

     @RequestMapping(value = "/{idTurma}", method = RequestMethod.POST)
     public String adicionaAlunosTurma(@PathVariable("idTurma") String idTurma, Aluno aluno) {
           aluno.setIdTurma(idTurma);
           alunoRepository.save(aluno);
           return "redirect:/{idTurma}";
     }
	
}
