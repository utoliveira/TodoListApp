import React, { Component } from 'react'

import '../css/common.css'
import NavLinks from './NavLinks';

export class NavBar extends Component {
    
    state={
        links : [
            {
                id: 1,
                title: 'Tarefas',
                path: '/',
                enabled: true
            },
            {
                id: 2,
                title: 'About',
                path: '/About',
                enabled: false
            }
        ]
    }

    onLinkClick = (id) =>{
        this.setState({links: this.state.links.map( link => {
            if(link.id === id){
                link.enabled = true;
            }else{
                link.enabled = false;
            }
            return link;
        })});
    }

    render() {
        return (
            <div className="navbar">
            <h1>Todo App</h1>
            <div>
                <NavLinks links={this.state.links} onLinkClick={this.onLinkClick}/>
            </div>
        </div>
        )
    }
}

export default NavBar
