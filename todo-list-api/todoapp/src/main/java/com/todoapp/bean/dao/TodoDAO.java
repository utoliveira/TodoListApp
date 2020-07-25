package com.todoapp.bean.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.todoapp.entity.Todo;

@Repository
public class TodoDAO {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	public List<Todo> getAll() throws Exception{
		Session session = sessionFactory.getCurrentSession();
		Query<Todo> select = session.createQuery("from Todo order by id", Todo.class);
		return select.getResultList();
	}
	
	public Todo addTodo(Todo todo) {
		Session session = sessionFactory.getCurrentSession();
		session.save(todo);	
		return todo;
	}
	
}
