package com.todoapp.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public enum CustomExceptionEnum {

	TESTE("200", "2");
	
	@Getter
	private String code;
	
	@Getter
	private String message;
	
}
