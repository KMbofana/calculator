import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class Nav extends Component {
    render() {
        return (
            <nav>
                <ul className="nav-links">
                    <Link to="/About">
                    <li>About</li>
                    </Link>
                   <Link to="/Shop">
                   <li>Shop</li>
                   </Link>
                    
                </ul>
            </nav>
        )
    }
}

export default Nav
