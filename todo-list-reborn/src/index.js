import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import LandingPage from './components/pages/landing/Landing';
import About from './components/pages/about/About';
import Todo from './components/pages/todo/Todo';
import NotFound from './components/pages/not-found/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import NavBar from './components/pages/common/NavBar/NavBar'


function App (){
  return (
    <BrowserRouter>
      <div className="todos-container">
        <NavBar/> 
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <ProtectedRoute exact path="/todo" component={Todo}/>
          <ProtectedRoute exact path="/about" component={About}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

ReactDOM.render(<App/>, document.getElementById("root"));