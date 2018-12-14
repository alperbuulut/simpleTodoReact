import React, { Component } from 'react';

//STYLES
import '../assets/css/Header.css';

class Header extends Component {
    render() {
        return (
            <div className={'header'}>
                <h1>Todo App</h1>
                <span>Manage your daily plans easily!</span>
            </div>
        );
    }
}

export default Header;