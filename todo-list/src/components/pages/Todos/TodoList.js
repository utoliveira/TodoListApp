import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

export class TodoList extends Component {
    render() {

        const {markComplete, deleteItem} = this.props;
        
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} item ={todo} markComplete={markComplete} deleteItem={deleteItem}/>
        ));
    }
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default TodoList
