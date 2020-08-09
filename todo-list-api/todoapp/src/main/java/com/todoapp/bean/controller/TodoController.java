package com.todoapp.bean.controller;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todoapp.bean.service.TodoService;
import com.todoapp.dto.TodoDTO;
import com.todoapp.rest.RestResponse;
import com.todoapp.rest.RestResponseCode;

@CrossOrigin
@RestController
@RequestMapping("/todo")
public class TodoController {

	@Autowired
	private TodoService todoService;
	
	@GetMapping("/all")
	public ResponseEntity<?> getAllTodos(HttpServletResponse response){
		return  ResponseEntity.ok(new RestResponse(RestResponseCode.SUCCESS, todoService.getAllTodos()));
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> addTodo(@Valid @RequestBody TodoDTO todo, HttpServletResponse response, BindingResult validation) {
		TodoDTO newTodo = todoService.addTodo(todo);
		return ResponseEntity.ok(new RestResponse(RestResponseCode.SUCCESS, newTodo));
	}
	
	@PutMapping(path = {"/changeComplete/{id}", "/changeComplete/"})
	public ResponseEntity<?> changeCompleteStatus(@PathVariable Integer id, HttpServletResponse response) {
		todoService.changeCompleteStatus(id);
		return  ResponseEntity.ok(new RestResponse(RestResponseCode.SUCCESS, null));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteTodo(@PathVariable Integer id) {
		todoService.deleteTodo(id);
		return ResponseEntity.ok(new RestResponse(RestResponseCode.SUCCESS, null));
	}

}
