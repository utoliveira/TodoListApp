package com.todoapp.dto;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

public class TodoDTO {

	@Getter @Setter
	private Integer id;

	@NotEmpty
	@Size(max=255)
	@Getter @Setter
	private String text;
	
	@Getter @Setter
	private boolean completed;
}
