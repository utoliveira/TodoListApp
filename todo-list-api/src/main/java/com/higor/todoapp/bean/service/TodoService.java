package com.higor.todoapp.bean.service;

import java.util.Collections;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.higor.todoapp.bean.mapper.IMapper;
import com.higor.todoapp.bean.repository.TodoRepository;
import com.higor.todoapp.entity.Todo;
import com.higor.todoapp.model.dto.TodoDTO;

@Service
public class TodoService {
		
	@Autowired
	private TodoRepository todoRepository;
	
	@Autowired
	private IMapper<Todo, TodoDTO> todoMapper;
	
	@Transactional
	public List<TodoDTO> getAllTodos() {
		try {
			return todoMapper.toBasicDTOList(todoRepository.findAll());	
		}catch (Exception e) {
			return Collections.emptyList();
		}	
	}
	
	@Transactional
	public TodoDTO addTodo(TodoDTO dto)  {
		Todo newTodo = todoRepository.save(todoMapper.toNewEntity(dto, "Higor", new Date()));
		dto.setId(newTodo.getId());
		return dto;
	}
	
	@Transactional
	public void changeCompleteStatus(Integer id) {
		Todo todo = todoRepository.getOne(id);
		todo.setCompleted(!todo.isCompleted());
	}
	
	@Transactional
	public void deleteTodo(Integer id) {
		todoRepository.deleteById(id);
	}
}