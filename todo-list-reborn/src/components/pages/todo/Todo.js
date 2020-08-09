import React from 'react'
import TodoList from './TodoList';
import { TodoProvider } from '../../contexts/TodoContext';
import AddTodo from './AddTodo';
import './Todo.css';
const Todo = () => {
    return (
        <TodoProvider>
            <AddTodo/>
            <TodoList/>
        </TodoProvider>
    );
}

export default Todo
