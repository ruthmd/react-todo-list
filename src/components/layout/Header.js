import React from 'react';
import {Link} from 'react-router-dom'

const headerStyle = { 
    background: '#000',
    padding: '1px',
    textAlign: 'center',  
    color: '#fff'
}

const linkStyle= {
    color: '#fff', 
    textDecoration: 'none'
}

function Header(){
    return(
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link to='/' style={linkStyle}>Home</Link> | <Link to='/about' style={linkStyle}>About</Link>
        </header>
    )
}

export default Header;