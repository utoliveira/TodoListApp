package com.higor.todoapp.bean.controller;

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

import com.higor.todoapp.bean.service.TodoService;
import com.higor.todoapp.model.dto.TodoDTO;

@CrossOrigin
@RestController
@RequestMapping("/todo")
public class TodoController {

	@Autowired
	private TodoService todoService;
	
	@GetMapping("/all")
	public ResponseEntity<?> getAllTodos(){
		return ResponseEntity.ok(todoService.getAllTodos());
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> addTodo(@Valid @RequestBody TodoDTO todo, BindingResult validation) {
		return ResponseEntity.ok(todoService.addTodo(todo));
	}
	
	@PutMapping(path = {"/changeComplete/{id}", "/changeComplete/"})
	public ResponseEntity<?> changeCompleteStatus(@PathVariable Integer id) {
		todoService.changeCompleteStatus(id);
		return ResponseEntity.ok("mudou");
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteTodo(@PathVariable Integer id) {
		todoService.deleteTodo(id);
		return ResponseEntity.ok("aa");
	}

}