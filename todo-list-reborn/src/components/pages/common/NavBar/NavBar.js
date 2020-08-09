import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';

import './NavBar.css'

const NavBar = ({history}) => {
    const [links, setLinks] = useState([
        {
            id: 1,
            title: 'Tarefas',
            path: '/todo',
            enabled: history.location.pathname === '/todo'
        },
        {
            id: 2,
            title: 'About',
            path: '/about',
            enabled: history.location.pathname === '/about'
        }
    ]);

    const onClick = (id) => {
        setLinks([...links.map(link => {
            if(link.id === id){
                link.enabled = true;
            }else{
                link.enabled = false;
            }
            return link;
        })])
    }

    const getClassName = (enabled) =>{
        return enabled ? "enabled" : "disabled";
    }

    return(
    <div className="navbar">
        <h1 className="brand">Todo App</h1>
        <div>
            {links.map(link => (
                <Link className={getClassName(link.enabled)} key={link.id} to={link.path} onClick={onClick.bind(this, link.id)} >{link.title}</Link>
            ))}
        </div>
    </div>
    );
}

export default withRouter(NavBar)