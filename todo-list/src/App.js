import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/pages/Todos/Todos'
import About from './components/pages/About'
import NavBar from './components/layout/NavBar'

export class App extends Component {

  render() {
    return (
      <Router>
        <div className="todos-page">
          <div className="todos-container">
          <NavBar/>
          <Route exact path="/" component={Todos} />
          <Route path="/about" component={About} />    
          </div>
        </div>
      </Router>
    )
  }
}

export default App
