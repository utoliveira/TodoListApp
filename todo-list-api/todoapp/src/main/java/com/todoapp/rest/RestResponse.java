package com.todoapp.rest;

import org.springframework.web.bind.annotation.ResponseBody;

import lombok.Getter;
import lombok.Setter;

@ResponseBody
public class RestResponse {
	
	@Getter @Setter
	private String code;
	
	@Getter @Setter
	private Object content;
	
	public RestResponse(RestResponseCode responseCode, Object content) {
		this.content = content;
		this.code = responseCode != null ? responseCode.getCode() : RestResponseCode.UNDEFINED.getCode();
	}
	
	
}
