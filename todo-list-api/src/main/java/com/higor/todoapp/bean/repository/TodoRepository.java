package com.higor.todoapp.bean.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.higor.todoapp.entity.Todo;

public interface TodoRepository extends JpaRepository<Todo, Integer>{

}
