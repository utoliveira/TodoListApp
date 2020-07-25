import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Todos from './pages/Todos/Todos'
import About from './pages/About'
import NavBar from './layout/NavBar'

import '../App.css';

const Routes = () => (
    <BrowserRouter>
        <div className="todos-page">
            <div className="todos-container">
                <NavBar/>
                <Route exact path="/" component={Todos}/>           
                <Route exact path="/about" component={About} />    
            </div>
        </div>
    </BrowserRouter>
);

export default Routes;