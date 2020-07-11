import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../css/pages/todos.css'

export class TodoItem extends Component {
    
    getCSS = () =>{
        return {
            textDecoration: this.props.item.completed ? 'line-through' : 'none'
        }
    }

    render() {

        const{id, text} = this.props.item;
        const{markComplete, deleteItem} = this.props;

        return (
            <div style={this.getCSS()} className="todo">
                <input type="checkbox" onChange={markComplete.bind(this, id)}/>
                <span>{text}</span>
                <button className="btn--delete right" onClick={deleteItem.bind(this,id)}><i className="fas fa-times"></i></button>
            </div>
        )
    }
}

TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired
}

export default TodoItem
