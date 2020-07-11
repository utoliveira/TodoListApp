import React, { Component } from 'react'
import PropType from 'prop-types';
import {Link} from 'react-router-dom';

export class NavLinks extends Component {
    
    getClassName = (enabled) =>{
        return enabled ? "enabled" : "disabled";
    }
    
    render() {
        const {onLinkClick} = this.props;
        
        return this.props.links.map((link) =>(
            <Link className={this.getClassName(link.enabled)} key={link.id} to={link.path} onClick={onLinkClick.bind(this, link.id)}>{link.title}</Link>
        ));
    }
}

NavLinks.propTypes ={
    onLinkClick: PropType.func.isRequired
}

export default NavLinks
