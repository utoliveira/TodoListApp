package com.todoapp.rest;

import org.springframework.web.bind.annotation.ResponseBody;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@ResponseBody
public class RestResponse {
	
	@Getter @Setter
	private String code;
	
	@Getter @Setter
	private Object content;
	
	
}
