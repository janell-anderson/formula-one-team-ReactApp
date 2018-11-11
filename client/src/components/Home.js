import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default class Home extends Component {
    render() {
        return(
            <div>
                <Nav />
                <h1>Welcome to Formula 1 Driver Profile</h1>
                <Footer />
            </div>
        )
    }
}