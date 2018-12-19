import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

export default class Countries extends Component {
    render() {
        // console.log("Hi I Drivers");
        // console.log(this.props.driver);
        return(
            <div>
                <Nav />
                <h2>Country List</h2>
                {this.props.country.map(country => (
                    <div key={country.id}>
                        <Link to={`country/${country.id}`}>
                            <h3>{country.name}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        )
    }
}
