import React, { Component } from 'react';
// import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
// import Nav from './components/Nav';
// import Footer from './components/Footer';
import Drivers from './components/Drivers';
// import Countries from './components/Countries';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      driver: []
    }
    // this.findDriver.bind(this);
  }

  fetchDrivers() {
    console.log("fetching drivers")
    fetch('/api/driver')
      .then(resp => {
        if(!resp.ok) {
          throw Error('Not fetching drivers ', resp.message);
        }
        return resp.json();
      }).then(data => this.setState ({
        driver: data.data
    })).catch(err => console.log(`${err}`))
  }

  // findDriver(id) {
  //   const driver = this.state.driver.filter(t => (t.id === parseInt(id,10)));
  //   return driver[0];
  // }

  componentDidMount() {
    this.fetchDrivers();
  }

  render() {
    // console.log(this.state);
    return(
      <Switch>

        {/* DRIVERS */}
        <Route exact path='/api/driver' component={(props) => (
          <Drivers 
            {...props}
            driver={this.state.driver}
        /> )} />

        {/* HOME */}
        <Route path='/' component={(props) => (
          <Home
            {...props}
            driver={this.state.driver}
        /> )} />
      </Switch>
    )
  }
}
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       driver: [],
//       countries: []
//     }

//   // Here we will be binding the functions
//   this.findDriver = this.findDriver.bind(this);
//   this.findCountry = this.findCountry.bind(this);
//   }

//   // fetching the drivers from the database
// fetchDrivers(){
//   // console.log("Hi I'm fetchDrivers");
//   // console.log(`${data.driver}`)
//   fetch('/api/driver')
//     .then(res => res.text())
//     .then(res => console.log('driver'))
//     .then(resp => {
//       console.log(this.driver[0])
//       if(!resp.ok) {
//         throw Error('oops: ', resp.message);
//       }
//       return resp.json();
//     })
//     .then(data => this.setState ({
//       driver: data.driver
//     })).catch(err => console.log(`error: ${err}`))
// }

//   // fetching the data for a single driver
//   findDriver(id) {
//     const driver = this.state.driver.filter(t => (t.id === parseInt(id, 10)));
//     return driver[0];
//   }

//   fetchCountries(){
//     // console.log("Hi, I'm fetchCountries");
//     fetch('/api/country')
//       .then(resp => {
//         if(!resp.ok) {
//           throw Error('oops: ', resp.message);
//         } 
//         return resp.json();
//       })
//       .then(res => res.text())
//       .then(res => console.log('country'))
//       .then(data => this.setState ({
//         countries: data.data
//       })).catch(err => console.log(`error: ${err}`))
//   }

//   findCountry(id) {
//     const country = this.state.country.filter(s => (s.id === parseInt(id, 10)));
//     return country[0];
//   }

//   componentDidMount() {
//     this.fetchDrivers();
//     this.fetchCountries();
//   }

//   render() {
//     // console.log(this.state);
//     return (
//       <div className="App">
//         <Switch>

//           {/* Route for Drivers Page */}
//           <Route exact path='/api/driver' component={(props) => (
//             <Drivers
//               {...props}
//               driver={this.state.driver}
//             /> )} />

//           {/* Route for Countries Page */}
//           <Route exact path='/api/country' components={(props) => (
//             <Countries 
//               {...props}
//               countries={this.state.countries}
//           /> )} />

//             {/* Route for Home page */}
//           <Route path='/' component={(props) => (
//             <Home 
//               {...props}
//               driver={this.state.driver}
//               countries={this.state.countries}
//             /> )} />

//         </Switch>
//       </div>
//     );
//   }
// }


