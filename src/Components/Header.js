import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <nav className="uk-navbar-container" uk-navbar="true">
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li className="uk-active"><a href="#">
                            <h3> <span uk-icon="icon: happy; ratio: 2"></span>&nbsp;Emoji Search </h3>
                        </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
