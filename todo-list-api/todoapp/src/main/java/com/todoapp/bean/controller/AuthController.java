package com.todoapp.bean.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todoapp.rest.RestResponse;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class AuthController {

	@PostMapping("/login")
	public RestResponse login() {
		return new RestResponse("001", "token");
	}
	
}
