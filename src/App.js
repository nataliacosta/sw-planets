import React, { Component } from 'react';
import './App.css';
import Box from './Box';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      max: 0,
      planet: {},
    };
  }

  componentDidMount() {
    this.fetchMax();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.state.id) {
      this.fetchPlanet();
    }
  }

  fetchMax() {
    fetch('https://swapi.co/api/planets/')
    .then(response => response.json())
    .then(data => {
      this.setState({max: data.count});
      this.setRandomPlanet();
    })
  }

  fetchPlanet() {
    fetch('https://swapi.co/api/planets/' + this.state.id)
    .then(response => response.json())
    .then(data => {
      this.setState({planet: data});
    })
  }

  setRandomPlanet() {
    let rand = Math.floor((Math.random() * this.state.max) + 1);
    this.setState({id: rand, planet: {}});
  }

  render() {
    return (
      <div className="App">
        <Box planet={this.state.planet}/>
        <div className="NextButton" onClick={() => this.setRandomPlanet()}>
          NEXT
        </div>
      </div>
    );
  }
}

export default App;
