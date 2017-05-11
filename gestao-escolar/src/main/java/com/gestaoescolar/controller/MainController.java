package com.gestaoescolar.controller;

import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.gestaoescolar.model.Presenca;
import com.gestaoescolar.service.PresencaService;

@Controller
public class MainController {
	
	@Autowired
	private PresencaService presencaService;
	
	@GetMapping("/")
	public String home(HttpServletRequest request){
		request.setAttribute("mode", "MODE_HOME");
		return "index";
	}
	
	@GetMapping("/all-presencas")
	public String allPresencas(HttpServletRequest request){
		request.setAttribute("presencas", presencaService.findAll());
		request.setAttribute("mode", "MODE_PRESENCAS");
		return "index";		
	}
	
	@GetMapping("/new-presenca")
	public String newPresenca(HttpServletRequest request){
		request.setAttribute("mode", "MODE_NEW");
		return "index";
	}
	
	@PostMapping("/save-presenca")
	public String savePresenca(@ModelAttribute Presenca presenca, BindingResult bindingResult, HttpServletRequest request){
		presenca.setDateCreated(new Date());
		presencaService.save(presenca);
		request.setAttribute("presencas", presencaService.findAll());
		request.setAttribute("mode", "MODE_PRESENCAS");
		return "index";
	}
	
	@GetMapping("/update-presenca")
	public String updatePresenca(@RequestParam int id, HttpServletRequest request){
		request.setAttribute("presenca", presencaService.findPresenca(id));
		request.setAttribute("mode", "MODE_UPDATE");
		return "index";
	}
	
	@GetMapping("/delete-presenca")
	public String deletePresenca(@RequestParam int id, HttpServletRequest request){
		presencaService.delete(id);
		request.setAttribute("presencas", presencaService.findAll());
		request.setAttribute("mode", "MODE_PRESENCAS");
		return "index";
	}

}
