import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../css/pages/todos.css'

export class AddTodo extends Component {
    
    state = {
        texto: ''
    }
    
    onChange = (e) =>{
        this.setState({[e.target.name] : e.target.value});
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.texto);
        this.setState({texto: ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="add-todo">
                <input className="add-todo__input" type="text" name="texto" placeholder="Nova tarefa" value={this.state.texto} onChange={this.onChange}/>
                <input className="btn--submit" type="submit" value="+"/>
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo : PropTypes.func.isRequired
}

export default AddTodo
