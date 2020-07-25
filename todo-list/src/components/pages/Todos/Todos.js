import React, { Component } from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo';
import Axios from 'axios';

export class Todos extends Component {
    state = {
        todos: [] 
    }

    componentDidMount(){
        Axios.get("http://localhost:8080/todoapp/todo/all")
            .then(res => {this.setState({todos: res.data.content})});
    }

    addTodo = (text) =>{

        Axios.post("http://localhost:8080/todoapp/todo/add", {text: text, completed: false})
            .then(res => {this.setState({todos:[res.data.content, ...this.state.todos]})})
            .catch(error => console.log("Errou ein", error))

        //this.setState({todos:[newTodo, ...this.state.todos]});
    }

    markComplete = (id) => {
        Axios.put("http://localhost:8080/todoapp/todo/markComplete",{id: id})
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
