package com.todoapp.exception;

public class CustomException extends Exception{

	private static final long serialVersionUID = 1L;
	private CustomExceptionEnum exception;
	
	public CustomException(CustomExceptionEnum exception) {
		super(exception.getMessage());
		this.exception = exception;
	}
	
	public String getCode() {
		return exception.getCode();
	}
	
	
}
