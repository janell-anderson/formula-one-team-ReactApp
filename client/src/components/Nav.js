import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return(
            <div>
                <nav>
                    <ul>
                        <Link to='/'>
                            <li>Home</li>
                        </Link>
                        
                        <Link to='/api/driver'>
                            <li>Drivers</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        )
    }
}