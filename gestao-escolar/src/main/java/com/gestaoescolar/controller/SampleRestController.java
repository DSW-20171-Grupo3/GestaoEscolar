package com.gestaoescolar.controller;

import org.springframework.web.bind.annotation.GetMapping;

public class SampleRestController {
	
	@GetMapping("/hello")
	public String hello(){
		return "Hello World!";
	}

}
