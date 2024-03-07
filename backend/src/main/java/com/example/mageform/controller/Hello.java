package com.example.mageform.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mageform.Model.Form;

@Controller
@RestController
@RefreshScope
@RequestMapping("/api")
public class Hello {

	
    @Value("${test.text}")
    private String defaultPageTitle;

	@GetMapping("/form-list-Info")
	public Form getAllEmployees(){
		Form form = new Form();
		form.setId(1);
		form.setAge(23);
		form.setName("helloword");
		return form;
	}	

	@GetMapping("/hello")
	public String hello(){
		return "hello";
	}	
}
