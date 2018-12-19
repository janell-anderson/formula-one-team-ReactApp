import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

export default class Drivers extends Component {
    render() {
        // console.log("Hi I Drivers");
        console.log(this.props.driver);
        // console.log(JSON.driver)
        return(
            <div>
                <Nav />
                <h2>Drivers List</h2>
                {this.props.driver.map(driver => (
                    <div key={driver.id}>
                        <Link to={`driver/${driver.id}`}>
                            <h3>{driver}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        )
    }
}

// In this component we are mapping through each driver in the database
// Each driver has there own id