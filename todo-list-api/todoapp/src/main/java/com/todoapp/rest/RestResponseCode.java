package com.todoapp.rest;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public enum RestResponseCode {
	SUCCESS("001"),
	UNDEFINED("999");
	
	@Getter
	private String code;
	
}
