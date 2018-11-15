import React, { Component } from 'react';
// import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Drivers from './components/Drivers';
import Countries from './components/Countries';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      driver: [],
      country: []
    }

  // Here we will be binding the functions
  this.findDriver = this.findDriver.bind(this);
  this.findCountry = this.findCountry.bind(this);
  }

  // fetching the drivers from the database
fetchDrivers(){
  console.log("Hi I'm fetchDrivers");
  fetch('api/driver')
    .then(resp => {
      if(!resp.ok) {
        throw Error('oops: ', resp.message);
      }
      return resp.json();
    })
    .then(data => this.setState ({
      driver: data.data
    })).catch(err => console.log(`error: ${err}`))
}

  // fetching the data for a single driver
  findDriver(id) {
    const driver = this.state.driver.filter(t => (t.id === parseInt(id, 10)));
    return driver[0];
  }

  fetchCountries(){
    console.log("Hi, I'm fetchCountries");
    fetch('api/country')
      // .then(resp => {
      //   if(!resp.ok) {
      //     throw Error('oops: ', resp.message);
      //   } 
      //   return resp.json();
      // })
      .then(data => this.setState ({
        country: data.data
      })).catch(err => console.log(`error: ${err}`))
  }

  findCountry(id) {
    const country = this.state.country.filter(s => (s.id === parseInt(id, 10)));
    return country[0];
  }

  componentDidMount() {
    this.fetchDrivers();
    this.fetchCountries();
  }

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <Switch>

          {/* Route for Drivers Page */}
          <Route exact path='/api/driver' component={(props) => (
            <Drivers
              {...props}
              driver={this.state.driver}
            /> )} />

          {/* Route for Countries Page */}
          <Route exact path='/api/country' components={(props) => (
            <Countries 
              {...props}
              country={this.state.country}
          /> )} />

            {/* Route for Home page */}
          <Route path='/' component={(props) => (
            <Home 
              {...props}
              driver={this.state.driver}
            /> )} />

        </Switch>
      </div>
    );
  }
}


