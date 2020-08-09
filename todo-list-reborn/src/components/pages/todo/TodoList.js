import React, {useContext} from 'react'
import {TodoContext} from '../../contexts/TodoContext'
import TodoItem from './TodoItem'
import api from '../../../packages/api'

const TodoList = () =>{

    const [todos, setTodos] = useContext(TodoContext);
    
    const markAsComplete = id => {

        api.put(`/todo/changeComplete/${id}`)
            .then(res => {
                setTodos(todos.map( todo => {
                    if(todo.id === id){
                        todo.completed = !todo.completed
                    }
                    return todo;
                }))
            })
            .catch(err => console.log(`errou ein ${err}`));
    }

    const deleteItem = id => {

        api.delete(`/todo/${id}`)
            .then(res => setTodos([...todos.filter(todo => todo.id !== id)]))
            .catch(err => console.log(`errou ein ${err}`))
    }

    return(
        <React.Fragment>
            {todos.map(todo => (
                <TodoItem item={todo} key={todo.id} markAsComplete={markAsComplete} deleteItem={deleteItem}/>
            ))}
        </React.Fragment>
    );
}

export default TodoList;