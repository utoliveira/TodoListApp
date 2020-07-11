import React, { Component } from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo';
import {v4} from 'uuid';

export class Todos extends Component {
    state = {
        todos: [] 
    }

    componentDidMount(){
        this.setState({todos:[
            {
                id: 1,
                text: 'Faz isso uai',
                completed: false
            },
            {
                id: 2,
                text: 'Faz isso uai',
                completed: false
            }
        ]});
    }

    addTodo = (text) =>{
        const newTodo = {id: v4(), text: text, completed: false }
        this.setState({todos:[newTodo, ...this.state.todos]});
    }

    markComplete = (id) => {
        this.setState({todos: this.state.todos.map( todo => {
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo;
        })})
    }

    deleteItem = (id) =>{
        this.setState({todos: [...this.state.todos.filter( todo => todo.id !== id)]});
    }

    render() {
        return (
            <React.Fragment>
                <h2 className="not-displayed">My Todos</h2>
                <AddTodo addTodo={this.addTodo}/>
                <TodoList todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem} />
            </React.Fragment>
        )
    }
}

export default Todos
