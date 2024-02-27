package com.example.mageform.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
@RefreshScope
@RequestMapping("/api")
public class Hello {

	
    @Value("${test.text}")
    private String defaultPageTitle;

	@GetMapping("/employees")
	public String getAllEmployees(){
		System.out.println(defaultPageTitle);
		return "hello";
	}	
}
