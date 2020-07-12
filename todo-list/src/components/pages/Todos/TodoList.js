import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

export class TodoList extends Component {
    renderTodos = (markComplete, deleteItem) =>{       
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} item ={todo} markComplete={markComplete} deleteItem={deleteItem}/>
        ));
    }

    renderMessage = () =>{
        return(<div className="message-all-done">Você tem tudo em dia! :) </div>);
    }
    
    render() {
        const {markComplete, deleteItem} = this.props;
        return this.props.todos.length > 0 ? this.renderTodos(markComplete, deleteItem) : this.renderMessage();
    }
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default TodoList
