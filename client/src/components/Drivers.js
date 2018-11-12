import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

export default class Drivers extends Component {
    
    render(){
        console.log("Hi I am the list of Drivers!");
        console.log(this.props.driver)
        return(
            <div>
            <Nav />
                <h2>Driver List</h2>
                {console.log("I am the second console log.")}
                {this.props.driver.map(driver => (
                    <div key={driver.id}>
                        <Link to={`api/driver/${driver.id}`}>
                            <div key={driver.id}>
                                <h3>{driver.name}</h3>
                            </div>
                        </Link>
                        <div>
                            <h2>{driver.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

// In this component we are mapping through each driver in the database
// Each driver has there own id