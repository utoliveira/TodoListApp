package com.todoapp.bean.controller;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todoapp.bean.service.TodoService;
import com.todoapp.dto.TodoDTO;
import com.todoapp.rest.RestResponse;

@CrossOrigin
@RestController
@RequestMapping("/todo")
public class TodoController {

	@Autowired
	private TodoService todoService;
	
	@GetMapping("/all")
	public RestResponse getAllTodos(HttpServletResponse response){
		return new RestResponse("001", todoService.getAllTodos());
	}
	
	@PostMapping("/add")
	public RestResponse addTodo(@Valid @RequestBody TodoDTO todo, HttpServletResponse response, BindingResult validation) {
		TodoDTO newTodo = todoService.addTodo(todo);
		return new RestResponse("001", newTodo);
	}

}
