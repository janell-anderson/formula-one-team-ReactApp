import React, { Component } from 'react';
// import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Drivers from './components/Drivers';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      driver: []
    }

  // Here we will be binding the functions
  this.findDriver = this.findDriver.bind(this);
  }

  // fetching the drivers from the database
  fetchDrivers() {
    console.log("hello i'm a fetchDrivers")
    fetch('/api/driver')
      .then(resp => {
        if(!resp.ok) {
          throw Error('oops: ', resp.message);
        }
        return resp.json();
    }).then(data => this.setState ({
      driver: data.data
    })).catch(err => console.log(`error: ${err}`))
  }

  // fetching the data for a single driver
  findDriver(id) {
    const driver = this.state.driver.filter(t => (t.id === parseInt(id, 10)));
    return driver[0];
  }

  componentDidMount() {
    this.fetchDrivers();
  }

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <Switch>
          {/* Route for Drivers */}
          <Route exact path='/api/driver' component={(props) => (
            <Drivers
              {...props}
              driver={this.state.driver}
            /> )} />
          <Home />
        </Switch>
      </div>
    );
  }
}


