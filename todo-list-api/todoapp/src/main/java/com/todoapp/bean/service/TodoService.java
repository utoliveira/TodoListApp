package com.todoapp.bean.service;

import java.util.Collections;
import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todoapp.bean.dao.TodoDAO;
import com.todoapp.bean.mapper.IMapper;
import com.todoapp.dto.TodoDTO;
import com.todoapp.entity.Todo;

@Service
public class TodoService {
		
	@Autowired
	private TodoDAO todoDao;
	
	@Autowired
	private IMapper<Todo, TodoDTO> todoMapper;
	
	@Transactional
	public List<TodoDTO> getAllTodos() {
		try {
			return todoMapper.toBasicDTOList(todoDao.getAll());	
		}catch (Exception e) {
			return Collections.emptyList();
		}	
	}
	
	@Transactional
	public TodoDTO addTodo(TodoDTO dto) {
		Todo newTodo = todoDao.addTodo(todoMapper.toNewEntity(dto, "Higor", new Date()));
		dto.setId(newTodo.getId());
		return dto;
	}
	
	@Transactional
	public void changeCompleteStatus(Integer id) {
		Todo todo = todoDao.getTodo(id);
		todo.setCompleted(!todo.isCompleted());
	}
	
	@Transactional
	public void deleteTodo(Integer id) {
		todoDao.delete(id);
	}
}
