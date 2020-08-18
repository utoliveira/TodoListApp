package com.higor.todoapp.bean.mapper;

import java.util.Date;

import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import com.higor.todoapp.entity.Todo;
import com.higor.todoapp.model.dto.TodoDTO;

@Component
public class TodoMapper implements IMapper<Todo, TodoDTO> {

	
	@Override
	public TodoDTO toDTO(Todo entity) {
		return toBasicDTO(entity);
	}

	@Override
	public TodoDTO toBasicDTO(Todo entity) {
		if(entity == null) {
			return null;
		}
		
		TodoDTO dto = new TodoDTO();
		dto.setId(entity.getId());
		dto.setText(entity.getText());
		dto.setCompleted(entity.isCompleted());
		return dto;
	}

	@Override
	public Todo toNewEntity(TodoDTO dto, String user, Date date) {
		
		if(dto == null || StringUtils.isEmpty(user) || date == null) {
			throw new IllegalArgumentException("Argumentos inválidos para gerar uma entidade");
		}
		
		Todo todo = new Todo();
		todo.setCompleted(dto.isCompleted());
		todo.setText(dto.getText());
		return todo;
	}

}
