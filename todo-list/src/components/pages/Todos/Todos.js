import React, { Component } from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo';
import Axios from 'axios';

const API_HOST = 'localhost';

export class Todos extends Component {
    
    state = {
        todos: [] 
    }

    componentDidMount(){
        Axios.get(`http://${API_HOST}:8080/todoapp/todo/all`)
            .then(res => {this.setState({todos: res.data.content})});
    }

    addTodo = (text) =>{

        Axios.post(`http://${API_HOST}/todoapp/todo/add"`, {text: text, completed: false})
            .then(res => {this.setState({todos:[res.data.content, ...this.state.todos]})})
            .catch(error => console.log("Errou ein", error))

        //this.setState({todos:[newTodo, ...this.state.todos]});
    }

    markComplete = (id) => {
        Axios.put(`http://${API_HOST}:8080/todoapp/todo/changeComplete/${id}`)
            .then(res => this.markCompleteChange(id, res))
            .catch(err => console.log("errouuu", err));

    }

    markCompleteChange = (id, res) => {
        console.log(res);
        this.setState({todos: this.state.todos.map( todo => {
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo;
        })})
    }


    deleteItem = (id) =>{
        Axios.delete(`http://${API_HOST}:8080/todoapp/todo/${id}`)
        .then( res => { this.setState({todos: [...this.state.todos.filter( todo => todo.id !== id)]})})
        .catch( err => console.log(err));
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
