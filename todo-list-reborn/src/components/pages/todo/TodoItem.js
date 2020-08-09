import React from 'react';
import './Todo.css'

const TodoItem = ({item, markAsComplete, deleteItem}) => {

    const getCSS = () => {
        return {
            textDecoration:  item.completed? 'line-through' : 'none'
        }
    }

    return(
        <div style={getCSS()} className="todo">
            <input type="checkbox" onChange={markAsComplete.bind(this, item.id)} checked={item.completed}/>
            <span>{item.text}</span>
            <button className="btn--delete right" onClick={deleteItem.bind(this, item.id)}><i className="fas fa-times"></i></button>
        </div>
    );
}

export default TodoItem;